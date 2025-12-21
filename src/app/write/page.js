"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Keyboard, Maximize2, Volume2, VolumeX } from "lucide-react";
import AppHeader from "../components/AppHeader";
import RoutineModal from "../components/RoutineModal";

const TYPE_SOUND = {
  clickDuration: 0.035,
  clickGain: 0.28,
  clickFreq: 1900,
  thockDuration: 0.09,
  thockGain: 0.16,
  thockFreq: 140,
};

const getWordCount = (text) => {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
};

export default function WritePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [routine, setRoutine] = useState("");
  const [showRoutineModal, setShowRoutineModal] = useState(false);
  const [content, setContent] = useState("");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isZenMode, setIsZenMode] = useState(false);
  const audioContextRef = useRef(null);
  const lastSoundAtRef = useRef(0);
  const noiseBufferRef = useRef(null);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("focusnow-darkmode");
    const savedRoutine = localStorage.getItem("focusnow-routine");
    if (savedDarkMode) setDarkMode(JSON.parse(savedDarkMode));
    if (savedRoutine) setRoutine(savedRoutine);
  }, []);

  useEffect(() => {
    localStorage.setItem("focusnow-darkmode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("focusnow-routine", routine);
  }, [routine]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsZenMode(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const getNoiseBuffer = (context) => {
    if (noiseBufferRef.current) return noiseBufferRef.current;
    const length = Math.floor(context.sampleRate * 0.05);
    const buffer = context.createBuffer(1, length, context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / length);
    }
    noiseBufferRef.current = buffer;
    return buffer;
  };

  const playTypeSound = () => {
    if (!soundEnabled) return;
    const now = Date.now();
    if (now - lastSoundAtRef.current < 35) return;
    lastSoundAtRef.current = now;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }
    const context = audioContextRef.current;
    if (context.state === "suspended") {
      context.resume().catch(() => {});
    }
    const startAt = context.currentTime + 0.01;

    const noiseSource = context.createBufferSource();
    const noiseGain = context.createGain();
    const noiseFilter = context.createBiquadFilter();
    noiseSource.buffer = getNoiseBuffer(context);
    noiseFilter.type = "bandpass";
    noiseFilter.frequency.setValueAtTime(TYPE_SOUND.clickFreq, startAt);
    noiseFilter.Q.setValueAtTime(0.9, startAt);
    noiseGain.gain.setValueAtTime(0.0001, startAt);
    noiseGain.gain.exponentialRampToValueAtTime(TYPE_SOUND.clickGain, startAt + 0.008);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, startAt + TYPE_SOUND.clickDuration);
    noiseSource.connect(noiseFilter).connect(noiseGain).connect(context.destination);
    noiseSource.start(startAt);
    noiseSource.stop(startAt + TYPE_SOUND.clickDuration + 0.02);

    const thockOsc = context.createOscillator();
    const thockGain = context.createGain();
    thockOsc.type = "triangle";
    thockOsc.frequency.setValueAtTime(TYPE_SOUND.thockFreq, startAt);
    thockGain.gain.setValueAtTime(0.0001, startAt);
    thockGain.gain.exponentialRampToValueAtTime(TYPE_SOUND.thockGain, startAt + 0.02);
    thockGain.gain.exponentialRampToValueAtTime(0.0001, startAt + TYPE_SOUND.thockDuration);
    thockOsc.connect(thockGain).connect(context.destination);
    thockOsc.start(startAt);
    thockOsc.stop(startAt + TYPE_SOUND.thockDuration + 0.03);
  };

  const handleKeyDown = (event) => {
    if (event.key.length === 1 || event.key === "Enter" || event.key === "Backspace") {
      playTypeSound();
    }
  };

  const toggleZenMode = () => {
    setIsZenMode((prev) => !prev);
  };

  const exportContent = () => {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `focusnow-writing-${new Date().toISOString().slice(0, 10)}.txt`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const wordCount = getWordCount(content);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
    }`}>
      {!isZenMode && (
        <AppHeader
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode(!darkMode)}
          onOpenRoutine={() => setShowRoutineModal(true)}
        />
      )}
      <div className={isZenMode ? "fixed inset-0 z-40" : "w-[90%] mx-auto py-8"}>
        <div className={`${isZenMode ? "w-full h-full p-4 sm:p-8 border-2 rounded-3xl" : "rounded-3xl p-5 sm:p-8"} ${
          darkMode ? "bg-gray-900 border-blue-500/50" : "bg-gray-50 border-blue-200"
        }`}>
          {!isZenMode && (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 text-blue-500">
                  <Keyboard className="w-5 h-5" />
                  <span className="text-sm font-semibold uppercase tracking-wide">Writing Space</span>
                </div>
                <h2 className="text-2xl font-bold mt-2">Stay in flow, one line at a time.</h2>
                <p className={`text-sm mt-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Distraction-free writing with export and typewriter sound.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setSoundEnabled((prev) => !prev)}
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                    soundEnabled
                      ? darkMode
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                      : darkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-gray-200"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                  }`}
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  {soundEnabled ? "Sound On" : "Sound Off"}
                </button>
                <button
                  type="button"
                  onClick={toggleZenMode}
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  }`}
                >
                  <Maximize2 className="w-4 h-4" />
                  Zen Mode
                </button>
                <button
                  type="button"
                  onClick={exportContent}
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                    darkMode
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "bg-purple-500 hover:bg-purple-600 text-white"
                  }`}
                >
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>
          )}

          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Start writing..."
            rows={14}
            className={`w-full ${isZenMode ? "h-full rounded-2xl border-2" : "min-h-[65vh] rounded-2xl border-2"} px-4 py-4 focus:outline-none transition-colors resize-none text-lg ${
              darkMode
                ? "bg-gray-900 border-blue-500/40 focus:border-blue-400 text-white placeholder-gray-500"
                : "bg-white border-blue-200 focus:border-blue-500 text-gray-900 placeholder-gray-400"
            }`}
          />

          {!isZenMode && (
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mt-4 text-sm">
              <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
                Word count: {wordCount}
              </span>
              <span className={darkMode ? "text-gray-500" : "text-gray-400"}>
                &copy; {new Date().getFullYear()} FocusNow. Powered by{" "}
                <a
                  href="https://somydigital.com"
                  target="_blank"
                  rel="noreferrer"
                  className={darkMode ? "text-blue-300 hover:text-blue-200" : "text-blue-600 hover:text-blue-700"}
                >
                  Somy Digital
                </a>.
              </span>
            </div>
          )}
        </div>
      </div>

      <RoutineModal
        open={showRoutineModal}
        routine={routine}
        onChange={setRoutine}
        onClose={() => setShowRoutineModal(false)}
        onSave={() => setShowRoutineModal(false)}
        darkMode={darkMode}
      />
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Plus, X, Check, Coffee, Moon, Sun, Timer, Clock, Target, CheckCircle2, ChevronRight, Star, Calendar, Pencil, AlertTriangle } from 'lucide-react';

const TASK_NAME_MAX = 120;
const DEFAULT_ESTIMATE_MINUTES = 30;
const MIN_ESTIMATE_MINUTES = 5;
const MAX_ESTIMATE_MINUTES = 480;
const DURATION_OPTIONS = [10, 25, 30, 45];

const CONFETTI_PIECES = [
  { x: '-24px', y: '-32px', r: '-25deg', color: '#f97316' },
  { x: '18px', y: '-34px', r: '20deg', color: '#06b6d4' },
  { x: '-14px', y: '-8px', r: '15deg', color: '#a855f7' },
  { x: '26px', y: '-10px', r: '-30deg', color: '#22c55e' },
  { x: '-6px', y: '-38px', r: '35deg', color: '#eab308' },
  { x: '6px', y: '-18px', r: '-15deg', color: '#ef4444' },
];

const SOUND_PATTERNS = {
  start: [
    { freq: 660, duration: 0.1, delay: 0, gain: 0.14, type: 'sine' },
    { freq: 880, duration: 0.12, delay: 0.12, gain: 0.14, type: 'sine' },
  ],
  break: [
    { freq: 520, duration: 0.14, delay: 0, gain: 0.16, type: 'triangle' },
    { freq: 390, duration: 0.18, delay: 0.16, gain: 0.16, type: 'triangle' },
  ],
  complete: [
    { freq: 784, duration: 0.12, delay: 0, gain: 0.18, type: 'sine' },
    { freq: 988, duration: 0.14, delay: 0.14, gain: 0.18, type: 'sine' },
    { freq: 1175, duration: 0.16, delay: 0.3, gain: 0.18, type: 'sine' },
  ],
  timeUp: [
    { freq: 880, duration: 0.24, delay: 0, gain: 0.3, type: 'square' },
    { freq: 988, duration: 0.24, delay: 0.26, gain: 0.3, type: 'square' },
    { freq: 1175, duration: 0.26, delay: 0.52, gain: 0.32, type: 'square' },
    { freq: 1319, duration: 0.28, delay: 0.8, gain: 0.32, type: 'square' },
  ],
};

const LandingPage = ({ onGetStarted }) => {
  const features = [
    {
      icon: <Timer className="w-6 h-6" />,
      title: "Smart Focus Timer",
      description: "Pomodoro technique with customizable durations to match your workflow"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Task Management",
      description: "Add up to 10 tasks and track your progress throughout the day"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Smart Breaks",
      description: "Never miss a break with intelligent 5-minute break reminders"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Designer",
      content: "FocusNow helped me increase my productivity by 40%. Simple and effective!",
      rating: 5
    },
    {
      name: "Michael Roberts",
      role: "Software Engineer",
      content: "Best focus app I've used. Clean interface and actually helps me focus.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Content Writer",
      content: "I love how simple it is. No distractions, just pure productivity.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Timer className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">FocusNow</span>
          </div>
          <button
            onClick={onGetStarted}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all hover:scale-105"
          >
            Try For Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
          🚀 Free Forever • No Sign Up Required
        </div>
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Master Your Focus.<br />Achieve More.
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          The ultimate productivity companion that helps you focus, track progress, and build lasting habits. Science-backed techniques meet beautiful design.
        </p>
        <button
          onClick={onGetStarted}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
        >
          Try For Free <ChevronRight className="w-5 h-5" />
        </button>
        <p className="text-sm text-gray-500 mt-4">Free forever • Start focusing in seconds</p>

        {/* Hero Image Placeholder */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 p-8 shadow-2xl">
          <div className="bg-white rounded-xl p-8 text-left">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Timer className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Complete Project Proposal</h3>
                <p className="text-sm text-gray-500">25:00 remaining</p>
              </div>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Stay Focused</h2>
            <p className="text-xl text-gray-600">Powerful features designed for peak productivity</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">2M+</div>
              <div className="text-blue-100">Focus Sessions</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">40%</div>
              <div className="text-blue-100">Productivity Boost</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.9★</div>
              <div className="text-blue-100">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Loved by Professionals</h2>
            <p className="text-xl text-gray-600">See what our users are saying</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 rounded-xl bg-white border-2 border-gray-100 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Productivity?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of professionals who've mastered their focus</p>
          <button
            onClick={onGetStarted}
            className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Try For Free <ChevronRight className="w-6 h-6" />
          </button>
          <p className="text-sm text-gray-500 mt-4">Free forever • No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Timer className="w-6 h-6" />
                <span className="text-xl font-bold">FocusNow</span>
              </div>
              <p className="text-gray-400">Master your focus. Achieve more.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-gray-400">
                <div>Features</div>
                <div>How it Works</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-gray-400">
                <div>About</div>
                <div>Blog</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-gray-400">
                <div>Help Center</div>
                <div>Contact</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FocusNow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  const [showApp, setShowApp] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskEstimate, setNewTaskEstimate] = useState(String(DEFAULT_ESTIMATE_MINUTES));
  const [selectedDuration, setSelectedDuration] = useState(25);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);
  const [showRoutineModal, setShowRoutineModal] = useState(false);
  const [routine, setRoutine] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskName, setEditingTaskName] = useState('');
  const [editingTaskEstimate, setEditingTaskEstimate] = useState(String(DEFAULT_ESTIMATE_MINUTES));
  const [overtimeNotice, setOvertimeNotice] = useState(null);
  const [celebratingTaskId, setCelebratingTaskId] = useState(null);
  const audioContextRef = useRef(null);
  const celebrationTimeoutRef = useRef(null);
  const overtimeTimeoutRef = useRef(null);

  const selectedTask = tasks.find((task) => task.id === selectedTaskId) || null;

  useEffect(() => {
    const savedTasks = localStorage.getItem('focusnow-tasks');
    const savedDarkMode = localStorage.getItem('focusnow-darkmode');
    const savedPomodoros = localStorage.getItem('focusnow-pomodoros');
    const savedRoutine = localStorage.getItem('focusnow-routine');
    const hasSeenLanding = localStorage.getItem('focusnow-seen-landing');
    
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      if (Array.isArray(parsedTasks)) {
        const normalizedTasks = parsedTasks.map((task) => ({
          ...task,
          timeSpent: Number(task.timeSpent) || 0,
          estimatedMinutes: Number(task.estimatedMinutes) || DEFAULT_ESTIMATE_MINUTES,
        }));
        setTasks(normalizedTasks);
      }
    }
    if (savedDarkMode) setDarkMode(JSON.parse(savedDarkMode));
    if (savedPomodoros) setCompletedPomodoros(JSON.parse(savedPomodoros));
    if (savedRoutine) setRoutine(savedRoutine);
    if (hasSeenLanding) setShowApp(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('focusnow-tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('focusnow-darkmode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('focusnow-pomodoros', JSON.stringify(completedPomodoros));
  }, [completedPomodoros]);

  useEffect(() => {
    localStorage.setItem('focusnow-routine', routine);
  }, [routine]);

  const playSound = (soundKey) => {
    const pattern = SOUND_PATTERNS[soundKey];
    if (!pattern) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }
    const context = audioContextRef.current;
    if (context.state === 'suspended') {
      context.resume().catch(() => {});
    }
    const startAt = context.currentTime + 0.02;
    pattern.forEach((tone) => {
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();
      const toneStart = startAt + (tone.delay || 0);
      const toneEnd = toneStart + tone.duration;
      oscillator.type = tone.type || 'sine';
      oscillator.frequency.setValueAtTime(tone.freq, toneStart);
      gainNode.gain.setValueAtTime(0.0001, toneStart);
      gainNode.gain.exponentialRampToValueAtTime(tone.gain || 0.16, toneStart + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, toneEnd);
      oscillator.connect(gainNode).connect(context.destination);
      oscillator.start(toneStart);
      oscillator.stop(toneEnd + 0.05);
    });
  };

  const triggerCelebration = (taskId) => {
    setCelebratingTaskId(taskId);
    if (celebrationTimeoutRef.current) {
      clearTimeout(celebrationTimeoutRef.current);
    }
    celebrationTimeoutRef.current = setTimeout(() => {
      setCelebratingTaskId(null);
    }, 900);
  };

  const showOvertimeNotice = (task, nextTimeSpent) => {
    const estimate = Number(task.estimatedMinutes) || 0;
    const previous = Number(task.timeSpent) || 0;
    if (estimate > 0 && previous <= estimate && nextTimeSpent > estimate) {
      setOvertimeNotice({
        id: task.id,
        name: task.name,
        overBy: nextTimeSpent - estimate,
      });
      if (overtimeTimeoutRef.current) {
        clearTimeout(overtimeTimeoutRef.current);
      }
      overtimeTimeoutRef.current = setTimeout(() => {
        setOvertimeNotice(null);
      }, 4500);
    }
  };

  const getRemainingMinutes = (task) => {
    if (!task) return 0;
    const estimate = Number(task.estimatedMinutes) || 0;
    const spent = Number(task.timeSpent) || 0;
    return Math.max(estimate - spent, 0);
  };

  const applyTimeToTask = (taskId, minutesSpent) => {
    if (!taskId || minutesSpent <= 0) return;
    setTasks((prev) => prev.map((task) => {
      if (task.id !== taskId) return task;
      const nextTimeSpent = (task.timeSpent || 0) + minutesSpent;
      showOvertimeNotice(task, nextTimeSpent);
      return { ...task, timeSpent: nextTimeSpent };
    }));
  };

  useEffect(() => {
    let interval = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      if (!isBreak) {
        setCompletedPomodoros(prev => prev + 1);
        if (selectedTaskId) {
          applyTimeToTask(selectedTaskId, selectedDuration);
        }
      }
      playSound('timeUp');
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, isBreak, selectedDuration, selectedTaskId]);

  const addTask = () => {
    const estimateValue = Number(newTaskEstimate);
    const isEstimateValid = Number.isFinite(estimateValue)
      && estimateValue >= MIN_ESTIMATE_MINUTES
      && estimateValue <= MAX_ESTIMATE_MINUTES;
    if (newTaskName.trim() && tasks.length < 10 && isEstimateValid) {
      const newTask = {
        id: Date.now(),
        name: newTaskName.trim(),
        completed: false,
        timeSpent: 0,
        estimatedMinutes: Math.round(estimateValue),
      };
      setTasks((prev) => [...prev, newTask]);
      setNewTaskName('');
      setNewTaskEstimate(String(DEFAULT_ESTIMATE_MINUTES));
      setShowAddTask(false);
    }
  };

  const startEditingTask = (task) => {
    setEditingTaskId(task.id);
    setEditingTaskName(task.name);
    setEditingTaskEstimate(String(task.estimatedMinutes || DEFAULT_ESTIMATE_MINUTES));
  };

  const cancelEditing = () => {
    setEditingTaskId(null);
    setEditingTaskName('');
    setEditingTaskEstimate(String(DEFAULT_ESTIMATE_MINUTES));
  };

  const saveTaskEdits = () => {
    const estimateValue = Number(editingTaskEstimate);
    const isEstimateValid = Number.isFinite(estimateValue)
      && estimateValue >= MIN_ESTIMATE_MINUTES
      && estimateValue <= MAX_ESTIMATE_MINUTES;
    if (!editingTaskName.trim() || !isEstimateValid) return;
    setTasks((prev) => prev.map((task) => {
      if (task.id !== editingTaskId) return task;
      return {
        ...task,
        name: editingTaskName.trim(),
        estimatedMinutes: Math.round(estimateValue),
      };
    }));
    cancelEditing();
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter(task => task.id !== id));
    if (selectedTaskId === id) {
      setSelectedTaskId(null);
    }
    if (editingTaskId === id) {
      cancelEditing();
    }
  };

  const toggleTaskComplete = (id) => {
    const task = tasks.find((item) => item.id === id);
    if (!task) return;
    const minutesSpent = (selectedTaskId === id && isRunning)
      ? Math.ceil(((selectedDuration * 60) - timeLeft) / 60)
      : 0;
    const shouldComplete = (selectedTaskId === id && isRunning) ? true : !task.completed;
    setTasks((prev) => prev.map((item) => {
      if (item.id !== id) return item;
      const nextTimeSpent = minutesSpent > 0
        ? (item.timeSpent || 0) + minutesSpent
        : (item.timeSpent || 0);
      if (minutesSpent > 0) {
        showOvertimeNotice(item, nextTimeSpent);
      }
      return {
        ...item,
        completed: shouldComplete,
        timeSpent: nextTimeSpent,
      };
    }));
    if (!task.completed && shouldComplete) {
      triggerCelebration(id);
      playSound('complete');
    }
    if (selectedTaskId === id) {
      setIsRunning(false);
      if (shouldComplete) {
        setSelectedTaskId(null);
      }
    }
  };

  const selectTask = (task) => {
    setSelectedTaskId(task.id);
    setIsBreak(false);
    resetTimer(selectedDuration, { task });
  };

  const startBreak = () => {
    setIsBreak(true);
    setSelectedTaskId(null);
    playSound('break');
    resetTimer(5, { enforceLimit: false });
  };

  const resetTimer = (minutes, options = {}) => {
    const { enforceLimit = true, task } = options;
    const taskForLimit = task || selectedTask;
    let nextMinutes = minutes;
    if (enforceLimit && taskForLimit) {
      const remaining = getRemainingMinutes(taskForLimit);
      if (remaining <= 0) {
        nextMinutes = 0;
      } else if (minutes > remaining) {
        const allowed = DURATION_OPTIONS.filter((duration) => duration <= remaining);
        nextMinutes = allowed.length > 0 ? Math.max(...allowed) : remaining;
      }
    }
    setTimeLeft(nextMinutes * 60);
    setIsRunning(false);
    setSelectedDuration(nextMinutes);
  };

  const toggleTimer = () => {
    if (timeLeft === 0) return;
    if (!isRunning) {
      playSound('start');
    }
    setIsRunning((prev) => !prev);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatHoursMinutes = (totalMinutes) => {
    const safeMinutes = Number(totalMinutes) || 0;
    const hours = Math.floor(safeMinutes / 60);
    const minutes = safeMinutes % 60;
    if (hours === 0) return `${minutes}m`;
    if (minutes === 0) return `${hours}h`;
    return `${hours}h ${minutes}m`;
  };

  const getFocusMessage = (totalMinutes) => {
    const hours = Math.floor((Number(totalMinutes) || 0) / 60);
    if (hours >= 5) {
      return {
        headline: "You've focused 5+ hours today",
        sub: "Very productive day so far.",
      };
    }
    if (hours >= 4) {
      return {
        headline: "You've focused 4+ hours today",
        sub: "Keep going — you're doing great.",
      };
    }
    if (hours >= 3) {
      return {
        headline: "You've focused 3+ hours today",
        sub: "Keep going — you're doing good.",
      };
    }
    if (hours >= 2) {
      return {
        headline: "You've focused 2+ hours today",
        sub: "Nice pace — keep it up.",
      };
    }
    if (hours >= 1) {
      return {
        headline: "You've focused 1+ hour today",
        sub: "Great start — keep going.",
      };
    }
    return {
      headline: "You're building momentum",
      sub: "Keep going — you're doing good.",
    };
  };

  const saveRoutine = () => {
    setShowRoutineModal(false);
  };

  const handleGetStarted = () => {
    setShowApp(true);
    localStorage.setItem('focusnow-seen-landing', 'true');
  };

  if (!showApp) {
    return <LandingPage onGetStarted={handleGetStarted} />;
  }

  const remainingMinutes = selectedTask ? getRemainingMinutes(selectedTask) : 0;
  const minDuration = Math.min(...DURATION_OPTIONS);
  const durationOptions = (remainingMinutes > 0 && remainingMinutes < minDuration)
    ? [remainingMinutes, ...DURATION_OPTIONS]
    : DURATION_OPTIONS;
  const canStartTimer = (isBreak || (selectedTask && remainingMinutes > 0)) && timeLeft > 0;
  const newEstimateValue = Number(newTaskEstimate);
  const isNewEstimateValid = Number.isFinite(newEstimateValue)
    && newEstimateValue >= MIN_ESTIMATE_MINUTES
    && newEstimateValue <= MAX_ESTIMATE_MINUTES;
  const canAddTask = Boolean(newTaskName.trim()) && isNewEstimateValid;
  const editingEstimateValue = Number(editingTaskEstimate);
  const isEditingEstimateValid = Number.isFinite(editingEstimateValue)
    && editingEstimateValue >= MIN_ESTIMATE_MINUTES
    && editingEstimateValue <= MAX_ESTIMATE_MINUTES;
  const canSaveEdit = Boolean(editingTaskName.trim()) && isEditingEstimateValid;
  const totalFocusMinutes = tasks.reduce((sum, task) => sum + (task.timeSpent || 0), 0);
  const completedTasksCount = tasks.filter(task => task.completed).length;
  const focusMessage = getFocusMessage(totalFocusMinutes);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Timer className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold">FocusNow</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowRoutineModal(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                darkMode
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'bg-purple-500 hover:bg-purple-600 text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Today's Routine
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-full transition-colors ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Timer Section */}
        <div className={`rounded-3xl p-8 mb-8 ${
          darkMode ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
          <div className="text-center mb-6">
            {isBreak ? (
              <div className="flex items-center justify-center gap-2 mb-2">
                <Coffee className="w-6 h-6" />
                <h2 className="text-2xl font-semibold">Break Time</h2>
              </div>
            ) : selectedTask ? (
              <>
                <h2 className="text-2xl font-semibold mb-2">{selectedTask.name}</h2>
                {remainingMinutes === 0 ? (
                  <div className="inline-flex items-center gap-2 text-sm text-red-500">
                    <AlertTriangle className="w-4 h-4" />
                    Estimated time used up. Update the estimate to continue.
                  </div>
                ) : (
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {formatHoursMinutes(remainingMinutes)} remaining of {formatHoursMinutes(selectedTask.estimatedMinutes || 0)}
                  </div>
                )}
              </>
            ) : (
              <h2 className="text-2xl font-semibold mb-2">Select a task to focus</h2>
            )}
          </div>

          <div className="text-7xl font-bold text-center mb-8 font-mono">
            {formatTime(timeLeft)}
          </div>

          {/* Duration Selector */}
          <div className="flex gap-2 justify-center mb-6 flex-wrap">
            {durationOptions.map(duration => {
              const isDurationDisabled = isRunning
                || (!isBreak && selectedTask && duration > remainingMinutes)
                || (!isBreak && selectedTask && remainingMinutes === 0);
              return (
              <button
                key={duration}
                onClick={() => resetTimer(duration)}
                disabled={isDurationDisabled}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedDuration === duration
                    ? darkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-500 text-white'
                    : darkMode
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-gray-200 hover:bg-gray-300'
                } ${isDurationDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {duration}m
              </button>
              );
            })}
          </div>

          {/* Timer Controls */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={toggleTimer}
              disabled={!canStartTimer && !isRunning}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all ${
                (!canStartTimer && !isRunning)
                  ? 'opacity-50 cursor-not-allowed bg-gray-400'
                  : darkMode
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              {isRunning ? 'Pause' : 'Start'}
            </button>
            <button
              onClick={() => resetTimer(selectedDuration)}
              className={`p-4 rounded-xl transition-all ${
                darkMode
                  ? 'bg-gray-700 hover:bg-gray-600'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button
              onClick={startBreak}
              className={`flex items-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all ${
                darkMode
                  ? 'bg-green-700 hover:bg-green-600 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              <Coffee className="w-5 h-5" />
              Break
            </button>
            {selectedTask && isRunning && (
              <button
                onClick={() => toggleTaskComplete(selectedTask.id)}
                className={`flex items-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all ${
                  darkMode
                    ? 'bg-purple-700 hover:bg-purple-600 text-white'
                    : 'bg-purple-500 hover:bg-purple-600 text-white'
                }`}
              >
                <CheckCircle2 className="w-5 h-5" />
                Mark Complete
              </button>
            )}
          </div>
        </div>

        {/* Tasks Section */}
        <div className={`rounded-3xl p-6 mb-8 ${
          darkMode ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Your Tasks ({tasks.length}/10)</h3>
            {!showAddTask && tasks.length < 10 && (
              <button
                onClick={() => setShowAddTask(true)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  darkMode
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                <Plus className="w-4 h-4" />
                Add Task
              </button>
            )}
          </div>

          {overtimeNotice && (
            <div className={`mb-4 flex items-center gap-3 rounded-lg border px-4 py-3 text-sm ${
              darkMode
                ? 'border-red-500/30 bg-red-500/10 text-red-200'
                : 'border-red-200 bg-red-50 text-red-600'
            }`}>
              <AlertTriangle className="w-4 h-4" />
              <span>
                {overtimeNotice.name} is taking longer than expected by {formatHoursMinutes(overtimeNotice.overBy)}.
              </span>
            </div>
          )}

          {showAddTask && (
            <div className="mb-4 grid gap-3">
              <div className="flex flex-col gap-2 md:flex-row md:items-center">
                <input
                  type="text"
                  value={newTaskName}
                  onChange={(e) => setNewTaskName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && canAddTask && addTask()}
                  placeholder="Enter task name..."
                  maxLength={TASK_NAME_MAX}
                  autoFocus
                  className={`flex-1 px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 focus:border-blue-500'
                      : 'bg-white border-gray-200 focus:border-blue-500'
                  }`}
                />
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={MIN_ESTIMATE_MINUTES}
                    max={MAX_ESTIMATE_MINUTES}
                    step="5"
                    value={newTaskEstimate}
                    onChange={(e) => setNewTaskEstimate(e.target.value)}
                    placeholder="Est. min"
                    className={`w-32 px-3 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
                      darkMode
                        ? 'bg-gray-700 border-gray-600 focus:border-blue-500'
                        : 'bg-white border-gray-200 focus:border-blue-500'
                    }`}
                  />
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>min</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={addTask}
                  disabled={!canAddTask}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    canAddTask
                      ? darkMode
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-gray-400 cursor-not-allowed text-gray-200'
                  }`}
                >
                  Add
                </button>
                <button
                  onClick={() => {
                    setShowAddTask(false);
                    setNewTaskName('');
                    setNewTaskEstimate(String(DEFAULT_ESTIMATE_MINUTES));
                  }}
                  className={`px-4 py-3 rounded-lg transition-all ${
                    darkMode
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="space-y-2">
            {tasks.length === 0 ? (
              <p className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                No tasks yet. Add your first task to get started!
              </p>
            ) : (
              tasks.map(task => {
                const isEditing = editingTaskId === task.id;
                const spentMinutes = task.timeSpent || 0;
                const estimateMinutes = task.estimatedMinutes || 0;
                const overBy = Math.max(spentMinutes - estimateMinutes, 0);
                return (
                  <div
                    key={task.id}
                    className={`relative flex items-center gap-3 p-4 rounded-xl transition-all ${
                      isEditing ? 'cursor-default' : 'cursor-pointer'
                    } ${
                      selectedTaskId === task.id
                        ? darkMode
                          ? 'bg-blue-900 border-2 border-blue-500'
                          : 'bg-blue-50 border-2 border-blue-500'
                        : darkMode
                          ? 'bg-gray-700 hover:bg-gray-650'
                          : 'bg-white hover:bg-gray-50'
                    }`}
                    onClick={() => !task.completed && !isEditing && selectTask(task)}
                  >
                    {celebratingTaskId === task.id && (
                      <div className="confetti-burst pointer-events-none">
                        {CONFETTI_PIECES.map((piece, index) => (
                          <span
                            key={index}
                            className="confetti-piece"
                            style={{
                              '--x': piece.x,
                              '--y': piece.y,
                              '--r': piece.r,
                              backgroundColor: piece.color,
                            }}
                          />
                        ))}
                      </div>
                    )}
                    {isEditing ? (
                      <div className="flex flex-1 flex-col gap-3">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center">
                          <input
                            type="text"
                            value={editingTaskName}
                            onChange={(e) => setEditingTaskName(e.target.value)}
                            maxLength={TASK_NAME_MAX}
                            className={`flex-1 px-3 py-2 rounded-lg border-2 focus:outline-none transition-colors ${
                              darkMode
                                ? 'bg-gray-700 border-gray-600 focus:border-blue-500'
                                : 'bg-white border-gray-200 focus:border-blue-500'
                            }`}
                          />
                          <div className="flex items-center gap-2">
                            <input
                              type="number"
                              min={MIN_ESTIMATE_MINUTES}
                              max={MAX_ESTIMATE_MINUTES}
                              step="5"
                              value={editingTaskEstimate}
                              onChange={(e) => setEditingTaskEstimate(e.target.value)}
                              className={`w-28 px-3 py-2 rounded-lg border-2 focus:outline-none transition-colors ${
                                darkMode
                                  ? 'bg-gray-700 border-gray-600 focus:border-blue-500'
                                  : 'bg-white border-gray-200 focus:border-blue-500'
                              }`}
                            />
                            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>min</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={saveTaskEdits}
                            disabled={!canSaveEdit}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                              canSaveEdit
                                ? darkMode
                                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                  : 'bg-blue-500 hover:bg-blue-600 text-white'
                                : 'bg-gray-400 cursor-not-allowed text-gray-200'
                            }`}
                          >
                            Save
                          </button>
                          <button
                            onClick={cancelEditing}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                              darkMode
                                ? 'bg-gray-700 hover:bg-gray-600'
                                : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleTaskComplete(task.id);
                          }}
                          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                            task.completed
                              ? 'bg-green-500 border-green-500'
                              : darkMode
                                ? 'border-gray-500 hover:border-gray-400'
                                : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          {task.completed && <Check className="w-4 h-4 text-white" />}
                        </button>
                        <div className="flex-1">
                          <div className={`font-medium ${task.completed ? 'line-through opacity-50' : ''}`}>
                            {task.name}
                          </div>
                          <div className={`text-xs ${task.completed ? 'opacity-60' : ''} ${
                            darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            Est {formatHoursMinutes(estimateMinutes)} | Spent {formatHoursMinutes(spentMinutes)}
                            {overBy > 0 && (
                              <span className={`font-semibold ${darkMode ? 'text-red-300' : 'text-red-500'}`}>
                                {' '}| Over {formatHoursMinutes(overBy)}
                              </span>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            startEditingTask(task);
                          }}
                          className={`flex-shrink-0 p-2 rounded-lg transition-all ${
                            darkMode
                              ? 'hover:bg-gray-600 text-gray-400 hover:text-blue-300'
                              : 'hover:bg-gray-100 text-gray-400 hover:text-blue-500'
                          }`}
                          aria-label="Edit task"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteTask(task.id);
                          }}
                          className={`flex-shrink-0 p-2 rounded-lg transition-all ${
                            darkMode
                              ? 'hover:bg-gray-600 text-gray-400 hover:text-red-400'
                              : 'hover:bg-gray-100 text-gray-400 hover:text-red-500'
                          }`}
                          aria-label="Delete task"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Today's Progress */}
        <div className={`rounded-3xl p-6 ${
          darkMode ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
          <h3 className="text-xl font-semibold mb-4">Today's Progress</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <Clock className={`w-8 h-8 mx-auto mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <div className="text-2xl font-bold">{formatHoursMinutes(totalFocusMinutes)}</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Focus Time</div>
            </div>
            <div className="text-center">
              <CheckCircle2 className={`w-8 h-8 mx-auto mb-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
              <div className="text-2xl font-bold">{completedTasksCount}/{tasks.length}</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Completed</div>
            </div>
            <div className="text-center">
              <Target className={`w-8 h-8 mx-auto mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              <div className="text-base font-semibold">{focusMessage.headline}</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{focusMessage.sub}</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Stay focused. One task at a time. 🎯
          </p>
        </div>
      </div>

      {/* Routine Modal */}
      {showRoutineModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Today's Routine</h2>
              <button
                onClick={() => setShowRoutineModal(false)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Plan your day to stay organized and focused. Add your daily routine, goals, and priorities.
            </p>
            <textarea
              value={routine}
              onChange={(e) => setRoutine(e.target.value)}
              placeholder="Example:
• 6:00 AM - Morning workout
• 7:00 AM - Breakfast & planning
• 8:00 AM - Deep work session
• 10:00 AM - Team meeting
• 12:00 PM - Lunch break
• 1:00 PM - Project work
• 3:00 PM - Emails & admin
• 5:00 PM - Review & wrap up"
              rows={12}
              className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors resize-none ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 focus:border-blue-500 text-white placeholder-gray-400'
                  : 'bg-gray-50 border-gray-200 focus:border-blue-500 placeholder-gray-400'
              }`}
            />
            <div className="flex gap-3 mt-6">
              <button
                onClick={saveRoutine}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                  darkMode
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                Save Routine
              </button>
              <button
                onClick={() => setShowRoutineModal(false)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  darkMode
                    ? 'bg-gray-700 hover:bg-gray-600'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";

const getNavClasses = (isActive, darkMode) => {
  const base = "px-4 py-1 text-lg font-semibold rounded-full transition-colors";
  if (isActive) {
    return darkMode
      ? `${base} text-blue-300`
      : `${base} text-blue-600`;
  }
  return darkMode
    ? `${base} text-gray-300 hover:text-blue-200`
    : `${base} text-gray-600 hover:text-blue-600`;
};

export default function AppHeader({ darkMode, onToggleDarkMode, onOpenRoutine }) {
  const pathname = usePathname();
  const isFocus = pathname === "/";
  const isWriting = pathname.startsWith("/write");

  return (
    <header className="w-full">
      <div className="w-[90%] mx-auto py-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/focusnow-mark.svg" alt="FocusNow logo" className="w-8 h-8" />
          <h1 className={`text-3xl font-bold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
            FocusNow
          </h1>
        </Link>
        <div className="flex flex-wrap items-center gap-4">
          <nav className="flex items-center gap-4">
            <Link href="/" className={getNavClasses(isFocus, darkMode)}>
              Focus
            </Link>
            <Link href="/write" className={getNavClasses(isWriting, darkMode)}>
              Writing
            </Link>
            <button
              type="button"
              onClick={onOpenRoutine}
              className={getNavClasses(false, darkMode)}
            >
              Routine
            </button>
          </nav>
          <button
            onClick={onToggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
}

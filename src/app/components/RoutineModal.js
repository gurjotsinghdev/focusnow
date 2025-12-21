"use client";

import { X } from "lucide-react";

const ROUTINE_PLACEHOLDER = `Example:
6:00 AM - Morning workout
7:00 AM - Breakfast & planning
8:00 AM - Deep work session
10:00 AM - Team meeting
12:00 PM - Lunch break
1:00 PM - Project work
3:00 PM - Emails & admin
5:00 PM - Review & wrap up`;

export default function RoutineModal({ open, routine, onChange, onClose, onSave, darkMode }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4">
      <div className={`rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border shadow-xl ${
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      }`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Today's Routine</h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
            aria-label="Close routine"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <p className={`mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          Plan your day to stay organized and focused. Add your daily routine, goals, and priorities.
        </p>
        <textarea
          value={routine}
          onChange={(e) => onChange(e.target.value)}
          placeholder={ROUTINE_PLACEHOLDER}
          rows={12}
          className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors resize-none ${
            darkMode
              ? "bg-gray-700 border-gray-600 focus:border-blue-500 text-white placeholder-gray-400"
              : "bg-gray-50 border-gray-200 focus:border-blue-500 placeholder-gray-400"
          }`}
        />
        <div className="flex flex-col gap-3 mt-6 sm:flex-row">
          <button
            onClick={onSave}
            className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
              darkMode
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            Save Routine
          </button>
          <button
            onClick={onClose}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

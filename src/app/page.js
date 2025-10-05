"use client";

import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Plus, X, Check, Coffee, Moon, Sun, Timer, Clock, Target, CheckCircle2, ChevronRight, Star, Calendar } from 'lucide-react';

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
  const [selectedTask, setSelectedTask] = useState(null);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');
  const [selectedDuration, setSelectedDuration] = useState(25);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);
  const [showRoutineModal, setShowRoutineModal] = useState(false);
  const [routine, setRoutine] = useState('');
  const [sessionStartTime, setSessionStartTime] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem('focusnow-tasks');
    const savedDarkMode = localStorage.getItem('focusnow-darkmode');
    const savedPomodoros = localStorage.getItem('focusnow-pomodoros');
    const savedRoutine = localStorage.getItem('focusnow-routine');
    const hasSeenLanding = localStorage.getItem('focusnow-seen-landing');
    
    if (savedTasks) setTasks(JSON.parse(savedTasks));
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

  useEffect(() => {
    let interval = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      if (!isBreak) {
        setCompletedPomodoros(prev => prev + 1);
      }
      playNotification();
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, isBreak]);

  const playNotification = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Audio play failed:', e));
    }
  };

  const addTask = () => {
    if (newTaskName.trim() && tasks.length < 10) {
      const newTask = {
        id: Date.now(),
        name: newTaskName.trim(),
        completed: false,
        timeSpent: 0
      };
      setTasks([...tasks, newTask]);
      setNewTaskName('');
      setShowAddTask(false);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    if (selectedTask?.id === id) {
      setSelectedTask(null);
    }
  };

  const toggleTaskComplete = (id) => {
    if (selectedTask?.id === id && isRunning) {
      // Calculate time spent (time that has elapsed)
      const timeSpent = (selectedDuration * 60) - timeLeft;
      const minutesSpent = Math.ceil(timeSpent / 60); // Round up to nearest minute
      
      setTasks(tasks.map(task => 
        task.id === id ? { 
          ...task, 
          completed: true, 
          timeSpent: (task.timeSpent || 0) + minutesSpent 
        } : task
      ));
      setIsRunning(false);
      setSelectedTask(null);
    } else {
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      ));
    }
  };

  const selectTask = (task) => {
    setSelectedTask(task);
    setIsBreak(false);
    resetTimer(selectedDuration);
    setSessionStartTime(Date.now());
  };

  const startBreak = () => {
    setIsBreak(true);
    setSelectedTask(null);
    resetTimer(5);
  };

  const resetTimer = (minutes) => {
    setTimeLeft(minutes * 60);
    setIsRunning(false);
    setSelectedDuration(minutes);
  };

  const toggleTimer = () => {
    if (!isRunning && !sessionStartTime) {
      setSessionStartTime(Date.now());
    }
    setIsRunning(!isRunning);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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

  const durations = [10, 30, 45];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <audio ref={audioRef} src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBzGH0fPTgjMGHm7A7+OZVRE=" />
      
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
            <div className={`px-4 py-2 rounded-lg ${
              darkMode ? 'bg-gray-800' : 'bg-gray-100'
            }`}>
              <span className="text-sm font-medium">{completedPomodoros} sessions today</span>
            </div>
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
              <h2 className="text-2xl font-semibold mb-2">{selectedTask.name}</h2>
            ) : (
              <h2 className="text-2xl font-semibold mb-2">Select a task to focus</h2>
            )}
          </div>

          <div className="text-7xl font-bold text-center mb-8 font-mono">
            {formatTime(timeLeft)}
          </div>

          {/* Duration Selector */}
          <div className="flex gap-2 justify-center mb-6 flex-wrap">
            {durations.map(duration => (
              <button
                key={duration}
                onClick={() => resetTimer(duration)}
                disabled={isRunning}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedDuration === duration
                    ? darkMode
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-500 text-white'
                    : darkMode
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-gray-200 hover:bg-gray-300'
                } ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {duration}m
              </button>
            ))}
          </div>

          {/* Timer Controls */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={toggleTimer}
              disabled={!selectedTask && !isBreak}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all ${
                !selectedTask && !isBreak
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

          {showAddTask && (
            <div className="mb-4 flex gap-2">
              <input
                type="text"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTask()}
                placeholder="Enter task name..."
                maxLength={50}
                autoFocus
                className={`flex-1 px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${
                  darkMode
                    ? 'bg-gray-700 border-gray-600 focus:border-blue-500'
                    : 'bg-white border-gray-200 focus:border-blue-500'
                }`}
              />
              <button
                onClick={addTask}
                disabled={!newTaskName.trim()}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  newTaskName.trim()
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
          )}

          <div className="space-y-2">
            {tasks.length === 0 ? (
              <p className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                No tasks yet. Add your first task to get started!
              </p>
            ) : (
              tasks.map(task => (
                <div
                  key={task.id}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all cursor-pointer ${
                    selectedTask?.id === task.id
                      ? darkMode
                        ? 'bg-blue-900 border-2 border-blue-500'
                        : 'bg-blue-50 border-2 border-blue-500'
                      : darkMode
                        ? 'bg-gray-700 hover:bg-gray-650'
                        : 'bg-white hover:bg-gray-50'
                  }`}
                  onClick={() => !task.completed && selectTask(task)}
                >
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
                  <span className={`flex-1 font-medium ${task.completed ? 'line-through opacity-50' : ''}`}>
                    {task.name}
                    {task.timeSpent > 0 && (
                      <span className={`ml-2 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        ({task.timeSpent}m)
                      </span>
                    )}
                  </span>
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
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))
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
              <div className="text-2xl font-bold">{completedPomodoros * 25}m</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Focus Time</div>
            </div>
            <div className="text-center">
              <CheckCircle2 className={`w-8 h-8 mx-auto mb-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
              <div className="text-2xl font-bold">{tasks.filter(t => t.completed).length}/{tasks.length}</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Completed</div>
            </div>
            <div className="text-center">
              <Target className={`w-8 h-8 mx-auto mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              <div className="text-2xl font-bold">🔥 {Math.min(completedPomodoros, 7)}</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Day Streak</div>
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
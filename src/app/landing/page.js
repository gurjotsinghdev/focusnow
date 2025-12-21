import Link from "next/link";
import { CheckCircle2, Clock, Sparkles } from "lucide-react";

const FEATURES = [
  {
    title: "Focus that respects your time",
    description: "Short, intentional sessions help you stay present without burning out.",
    icon: <Clock className="w-5 h-5" />,
  },
  {
    title: "Know what it will take",
    description: "Estimate tasks up front and track time as you go.",
    icon: <CheckCircle2 className="w-5 h-5" />,
  },
  {
    title: "Celebrate progress",
    description: "Gentle reminders and simple wins keep momentum strong.",
    icon: <Sparkles className="w-5 h-5" />,
  },
];

export default function LandingPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b">
        <div className="w-[90%] mx-auto py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/focusnow-mark.svg" alt="FocusNow logo" className="w-9 h-9" />
            <span className="text-2xl font-bold text-blue-600">FocusNow</span>
          </Link>
          <Link
            href="/"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Open App
          </Link>
        </div>
      </header>

      <main>
        <section className="w-[90%] mx-auto py-16 sm:py-24 text-center">
          <p className="text-sm uppercase tracking-wide text-blue-600 font-semibold">Focus. Finish. Repeat.</p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4">
            A calmer way to stay focused every day.
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            FocusNow blends a gentle timer, task estimates, and progress tracking so you can
            do deep work without distractions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Start Focusing
            </Link>
            <Link
              href="/write"
              className="px-6 py-3 border border-blue-200 text-blue-600 hover:border-blue-300 hover:text-blue-700 font-semibold rounded-lg transition-colors"
            >
              Try Writing Space
            </Link>
          </div>
        </section>

        <section className="w-[90%] mx-auto pb-20">
          <div className="grid gap-6 sm:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="border border-gray-200 rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blue-50">
          <div className="w-[90%] mx-auto py-14 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Ready to focus with clarity?</h2>
              <p className="text-gray-600 mt-2">Jump in and start your first session in seconds.</p>
            </div>
            <Link
              href="/"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Open FocusNow
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="w-[90%] mx-auto py-8 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; {currentYear} FocusNow</span>
          <a
            href="https://somydigital.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            Powered by Somy Digital
          </a>
        </div>
      </footer>
    </div>
  );
}

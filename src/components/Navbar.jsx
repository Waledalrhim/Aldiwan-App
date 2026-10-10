import { Bell, LogOut, MoonStar, Search, ShieldCheck, Sparkles, SunMedium, UserRound } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ activeTab, onSelectTab, onOpenAuth, isAuthenticated, user, onLogout }) {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-lg font-black text-white shadow-lg shadow-emerald-200 dark:shadow-emerald-900/30">
            د
          </div>

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-400">
              الديوان
            </p>
            <h2 className="text-lg font-black text-slate-900 dark:text-white">أرشيف القبائل العربية</h2>
          </div>
        </div>

        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="flex w-full max-w-xl items-center gap-3 rounded-full border border-slate-200 bg-slate-100 px-4 py-2.5 text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            <Search className="h-4 w-4" />
            <input
              aria-label="بحث"
              placeholder="ابحث عن قبيلة، مؤرخ، أو وثيقة..."
              className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-200"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition hover:border-emerald-300 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            aria-label="تبديل النمط"
          >
            {darkMode ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
          </button>

          <button
            type="button"
            className="hidden items-center justify-center rounded-full border border-slate-200 bg-slate-100 p-2.5 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 sm:flex"
            aria-label="الإشعارات"
          >
            <Bell className="h-4 w-4" />
          </button>

          {isAuthenticated && user ? (
            <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1.5 dark:border-emerald-900/60 dark:bg-emerald-950/40">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-sm font-bold text-white">
                {user.name?.charAt(0) || 'م'}
              </div>

              <div className="hidden sm:block">
                <div className="flex items-center gap-1 text-sm font-bold text-slate-800 dark:text-slate-100">
                  {user.name}
                  {user.verified && <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">{user.role}</div>
              </div>

              <button
                type="button"
                onClick={onLogout}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white transition hover:bg-emerald-600 dark:bg-slate-800"
                aria-label="تسجيل الخروج"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={onOpenAuth}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-200 transition hover:scale-[1.02] hover:shadow-emerald-300 dark:shadow-emerald-900/30"
            >
              <UserRound className="h-4 w-4" />
              تسجيل الدخول
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

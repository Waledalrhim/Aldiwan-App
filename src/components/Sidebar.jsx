import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Sidebar({ sections, activeTab, onSelectTab }) {
  return (
    <aside className="hidden w-[280px] shrink-0 lg:block">
      <div className="sticky top-24 card-surface rounded-[30px] p-4">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">القائمة</p>
            <h3 className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white">لوحة التحكم</h3>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            aria-label="إغلاق القائمة"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>

        <nav className="space-y-2">
          {sections.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => onSelectTab(key)}
              className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-right transition ${
                activeTab === key
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-200 dark:shadow-emerald-900/30'
                  : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              <span className="flex items-center gap-3">
                <Icon className="h-5 w-5" />
                <span className="font-bold">{label}</span>
              </span>

              <ChevronRight className="h-4 w-4" />
            </button>
          ))}
        </nav>

        <div className="mt-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 p-4 text-white shadow-soft">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">الإنجاز</p>
          <div className="mt-3 flex items-end gap-2">
            <span className="text-3xl font-black">12.4K</span>
            <span className="pb-1 text-sm text-slate-300">مستند</span>
          </div>
          <div className="mt-4 h-2 rounded-full bg-white/10">
            <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-emerald-400 to-teal-300" />
          </div>
        </div>
      </div>
    </aside>
  );
}

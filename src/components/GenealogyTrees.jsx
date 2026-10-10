import { ArrowLeft, Filter, MapPinned, Search, Users } from 'lucide-react';

const tribeTree = [
  {
    name: 'بني تميم',
    region: 'الجزيرة العربية',
    children: ['بنو مالك', 'بنو أسد', 'بنو عائذ']
  },
  {
    name: 'بني أسد',
    region: 'الحجاز',
    children: ['بني ربيعة', 'بني جشم', 'بني فزارة']
  },
  {
    name: 'بني هوازن',
    region: 'نجد',
    children: ['بني قحطان', 'بني غطفان', 'بني عدي']
  }
];

export default function GenealogyTrees() {
  return (
    <div className="space-y-6">
      <div className="card-surface rounded-[30px] p-4 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              aria-label="بحث في شجرة النسب"
              placeholder="ابحث عن قبيلة أو بطن أو فرع..."
              className="w-full bg-transparent text-sm text-slate-700 outline-none dark:text-slate-100"
            />
          </div>

          <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
            <Filter className="h-4 w-4 text-slate-500" />
            <select className="bg-transparent text-sm text-slate-700 outline-none dark:text-slate-200">
              <option>كل المناطق</option>
              <option>الحجاز</option>
              <option>نجد</option>
              <option>الجزيرة</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        {tribeTree.map((item) => (
          <div key={item.name} className="card-surface rounded-[30px] p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">{item.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.region}</p>
                </div>
              </div>

              <MapPinned className="h-5 w-5 text-emerald-600" />
            </div>

            <div className="mt-5 space-y-3">
              {item.children.map((child, index) => (
                <div key={child} className="flex items-center justify-between rounded-2xl bg-slate-100 px-3 py-2 dark:bg-slate-900">
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{child}</span>
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                    فرع {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="card-surface rounded-[30px] p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-black text-slate-900 dark:text-white">شجرة البطون المعتمدة</h3>
          <button type="button" className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            <ArrowLeft className="h-4 w-4" />
            عرض كامل
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[28px] bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 p-5 text-white">
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-200">بني تميم</p>
            <div className="mt-5 space-y-3 text-sm text-slate-200">
              <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                <span>بنو مالك</span>
                <span className="text-emerald-300">34 أسرة</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                <span>بنو أسد</span>
                <span className="text-emerald-300">18 أسرة</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                <span>بنو عائذ</span>
                <span className="text-emerald-300">22 أسرة</span>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-dashed border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">ملاحظات التوثيق</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>• تم اعتماد 6 مصادر أولية من المخطوطات المحلية.</li>
              <li>• تم تحديث أصول 18 بطن في عهد الدولة السعودية الأولى.</li>
              <li>• توجد 3 روايات متداخلة تحتاج مراجعة قبل الاعتماد النهائي.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

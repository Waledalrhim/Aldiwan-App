import { BookOpenText, Download, FileImage, FileText, FolderOpen, UploadCloud } from 'lucide-react';

const archiveItems = [
  {
    id: 1,
    title: 'مخطوطة مواريث بني خالد',
    type: 'مخطوطة',
    tribe: 'بني خالد',
    year: '1260 هـ',
    size: '4.2 MB',
    icon: FileText
  },
  {
    id: 2,
    title: 'خريطة حوض نجد',
    type: 'خريطة',
    tribe: 'بني تميم',
    year: '1901 م',
    size: '2.8 MB',
    icon: FileImage
  },
  {
    id: 3,
    title: 'وثيقة قرارات العشيرة',
    type: 'وثيقة',
    tribe: 'بني هوازن',
    year: '1475 هـ',
    size: '680 KB',
    icon: FolderOpen
  },
  {
    id: 4,
    title: 'مذكرة الأنساب',
    type: 'مكتبة',
    tribe: 'بني أسد',
    year: '1918 م',
    size: '1.1 MB',
    icon: BookOpenText
  }
];

export default function DigitalArchive() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {archiveItems.map(({ id, title, type, tribe, year, size, icon: Icon }) => (
          <div key={id} className="card-surface rounded-[28px] p-4">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {type}
              </span>
            </div>

            <h3 className="mt-4 text-lg font-extrabold text-slate-900 dark:text-white">{title}</h3>
            <div className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
              <p>القبيلة: {tribe}</p>
              <p>التاريخ: {year}</p>
              <p>الحجم: {size}</p>
            </div>

            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-100 px-3 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-emerald-100 hover:text-emerald-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              <Download className="h-4 w-4" />
              تحميل
            </button>
          </div>
        ))}
      </div>

      <div className="card-surface rounded-[30px] p-5">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-600 text-white">
            <UploadCloud className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white">إضافة وثيقة جديدة</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">اختر القبيلة وتوثق تفاصيل أصل الوثيقة</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">اسم الوثيقة</label>
            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-900" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">القبيلة</label>
            <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-900">
              <option>بني تميم</option>
              <option>بني أسد</option>
              <option>بني هوازن</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">الفئة</label>
            <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-900">
              <option>وثيقة</option>
              <option>مخطوطة</option>
              <option>صورة تاريخية</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">السنة</label>
            <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-900" placeholder="مثال: 1901" />
          </div>
        </div>

        <button
          type="button"
          className="mt-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-emerald-200 dark:shadow-emerald-900/30"
        >
          رفع الوثيقة
        </button>
      </div>
    </div>
  );
}

import { BookOpenText, Download, Search, ShieldCheck, Star } from 'lucide-react';

const books = [
  {
    id: 1,
    title: 'أصول النسب في الجزيرة العربية',
    author: 'د. سامي الحارثي',
    category: 'أصول',
    pages: 432,
    size: '18 MB',
    badge: true
  },
  {
    id: 2,
    title: 'موسوعة بطون قبائل نجد',
    author: 'د. فهد الموشكي',
    category: 'موسوعة',
    pages: 610,
    size: '26 MB',
    badge: true
  },
  {
    id: 3,
    title: 'المخطوطات والوثائق الحجازية',
    author: 'أ. فاطمة المهنا',
    category: 'مخطوطات',
    pages: 276,
    size: '12 MB',
    badge: false
  }
];

export default function BookLibrary() {
  return (
    <div className="space-y-6">
      <div className="card-surface rounded-[30px] p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              placeholder="ابحث عن كتاب، مؤلف، أو قبيلة..."
              className="w-full bg-transparent text-sm text-slate-700 outline-none dark:text-slate-200"
            />
          </div>

          <select className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-medium text-slate-700 outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            <option>جميع التصنيفات</option>
            <option>أصول</option>
            <option>مخطوطات</option>
            <option>موسوعة</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {books.map((book) => (
          <article key={book.id} className="card-surface rounded-[32px] p-4">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white">
                <BookOpenText className="h-5 w-5" />
              </div>
              {book.badge && (
                <span className="flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-bold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  موثوق
                </span>
              )}
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">{book.title}</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{book.author}</p>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
              <span>{book.category}</span>
              <span>{book.pages} صفحة</span>
            </div>

            <div className="mt-3 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                4.9
              </span>
              <span>{book.size}</span>
            </div>

            <button
              type="button"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 px-3 py-2.5 text-sm font-black text-white shadow-lg shadow-emerald-200 dark:shadow-emerald-900/30"
            >
              <Download className="h-4 w-4" />
              تنزيل PDF
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

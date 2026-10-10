import { Bookmark, Camera, CheckCheck, Heart, MessageSquareText, Share2, Sparkles, UserRound } from 'lucide-react';

const posts = [
  {
    id: 1,
    author: { name: 'خالد السلمي', role: 'مؤرخ مغربي', verified: true },
    tribe: 'بني تميم',
    time: 'قبل 25 دقيقة',
    content:
      'نشرنا اليوم وثيقة جديدة توثق انتقال الأسر من وادي الدواسر إلى البصرة، مع أسماء البطون وأعدادهم خلال القرن التاسع الهجري.',
    tags: ['وثيقة', 'مخطوطة', 'بطون'],
    likes: 484,
    comments: 68,
    saves: 41,
    highlight: 'مؤكد' 
  },
  {
    id: 2,
    author: { name: 'معاذ العنزي', role: 'باحث في الأنساب', verified: true },
    tribe: 'بني هوازن',
    time: 'قبل 1 ساعة',
    content:
      'تحديث خارطة نسب بعض فروع هوازن في عسير مع توثيق شجرة العشائر من خلال مخطوطة مخطوطات البارقي، مع مقارنة بين الروايات المتداولة.',
    tags: ['أصل', 'تاريخ', 'بيانات'],
    likes: 352,
    comments: 44,
    saves: 18,
    highlight: 'عرض ميداني'
  }
];

export default function HomeFeed() {
  return (
    <div className="space-y-6">
      <div className="card-surface rounded-[30px] p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-base font-black text-white">
            ف
          </div>
          <div className="flex-1 rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-3 text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            ما الذي تريد مشاركته اليوم؟
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {['منشور', 'وثيقة', 'مخطوطة'].map((item) => (
            <button
              key={item}
              type="button"
              className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-bold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              + {item}
            </button>
          ))}
        </div>
      </div>

      {posts.map((post) => (
        <article key={post.id} className="card-surface rounded-[30px] p-4 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-sm font-black text-white">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{post.author.name}</h3>
                  {post.author.verified && <CheckCheck className="h-4 w-4 text-blue-500" />}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span>{post.author.role}</span>
                  <span>•</span>
                  <span>{post.time}</span>
                </div>
              </div>
            </div>

            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
              {post.tribe}
            </span>
          </div>

          <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-3 text-sm font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-300">
            {post.highlight}
          </div>

          <p className="mt-4 text-base leading-8 text-slate-700 dark:text-slate-200">{post.content}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                #{tag}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-3 dark:border-slate-700">
            <div className="flex items-center gap-5 text-sm text-slate-600 dark:text-slate-300">
              <button type="button" className="flex items-center gap-2 transition hover:text-rose-500">
                <Heart className="h-4 w-4" />
                {post.likes}
              </button>
              <button type="button" className="flex items-center gap-2 transition hover:text-sky-500">
                <MessageSquareText className="h-4 w-4" />
                {post.comments}
              </button>
              <button type="button" className="flex items-center gap-2 transition hover:text-emerald-500">
                <Bookmark className="h-4 w-4" />
                {post.saves}
              </button>
            </div>

            <button type="button" className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200">
              <Share2 className="h-4 w-4" />
              مشاركة
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

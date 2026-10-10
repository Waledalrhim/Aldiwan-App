import { useState } from 'react';
import { Chrome, Mail, Smartphone, X } from 'lucide-react';

const defaultState = {
  name: 'فهد الزهراني',
  email: 'fahd@aldiwan.sa',
  phone: '+966500123456',
  password: 'secret123'
};

export default function AuthModal({ isOpen, onClose, onLogin }) {
  const [authMode, setAuthMode] = useState('email');
  const [rememberMe, setRememberMe] = useState(true);
  const [form, setForm] = useState(defaultState);

  if (!isOpen) return null;

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      id: Date.now(),
      name: form.name || 'مستخدم جديد',
      email: form.email,
      phone: form.phone,
      role: 'باحث/مؤرخ',
      verified: true,
      avatar: 'ف'
    };

    onLogin(user, rememberMe);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-[30px] border border-slate-200 bg-white p-5 shadow-2xl dark:border-slate-700 dark:bg-slate-900">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-600">الديوان</p>
            <h3 className="mt-1 text-2xl font-black text-slate-900 dark:text-white">تسجيل الدخول</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"
            aria-label="إغلاق"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mb-5 grid grid-cols-3 gap-2 rounded-2xl bg-slate-100 p-1 dark:bg-slate-800">
          {[
            { id: 'email', label: 'البريد', icon: Mail },
            { id: 'phone', label: 'الهاتف', icon: Smartphone },
            { id: 'google', label: 'Google', icon: Chrome }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setAuthMode(id)}
              className={`flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-bold ${
                authMode === id
                  ? 'bg-white text-emerald-700 shadow-sm dark:bg-slate-700 dark:text-emerald-400'
                  : 'text-slate-500 dark:text-slate-300'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {authMode !== 'google' && (
            <>
              <div>
                <label className="mb-1.5 block text-sm font-bold text-slate-700 dark:text-slate-300">الاسم الكامل</label>
                <input
                  value={form.name}
                  onChange={handleChange('name')}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                />
              </div>

              {authMode === 'email' ? (
                <>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold text-slate-700 dark:text-slate-300">البريد الإلكتروني</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={handleChange('email')}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-bold text-slate-700 dark:text-slate-300">كلمة المرور</label>
                    <input
                      type="password"
                      value={form.password}
                      onChange={handleChange('password')}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                    />
                  </div>
                </>
              ) : (
                <div>
                  <label className="mb-1.5 block text-sm font-bold text-slate-700 dark:text-slate-300">رقم الهاتف</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleChange('phone')}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                  />
                </div>
              )}
            </>
          )}

          {authMode === 'google' && (
            <div className="rounded-2xl border border-dashed border-emerald-300 bg-emerald-50 p-4 text-center text-sm font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300">
              سوف يتم تسجيلك عبر حساب Google المؤسسي وتوثيق هويتك تلقائياً.
            </div>
          )}

          <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
            />
            تذكرني وحفظ الجلسة
          </label>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-3 text-base font-black text-white shadow-lg shadow-emerald-200 transition hover:shadow-emerald-300 dark:shadow-emerald-900/30"
          >
            {authMode === 'google' ? 'تسجيل الدخول عبر Google' : 'دخول إلى الديوان'}
          </button>
        </form>
      </div>
    </div>
  );
}

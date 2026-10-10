import { useMemo, useState } from 'react';
import {
  Home,
  Archive,
  Users,
  BookOpenText,
  MessageSquareText,
  UserRound,
  Bell,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AuthModal from './components/AuthModal';
import HomeFeed from './components/HomeFeed';
import DigitalArchive from './components/DigitalArchive';
import GenealogyTrees from './components/GenealogyTrees';
import BookLibrary from './components/BookLibrary';
import ChatSystem from './components/ChatSystem';
import ErrorBoundary from './components/ErrorBoundary';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ChatProvider } from './context/ChatContext';
import { ThemeProvider } from './context/ThemeContext';

const sections = [
  { key: 'home', label: 'الرئيسية', icon: Home },
  { key: 'archive', label: 'الأرشيف', icon: Archive },
  { key: 'genealogy', label: 'الأنساب', icon: Users },
  { key: 'books', label: 'المكتبة', icon: BookOpenText },
  { key: 'chat', label: 'الدردشة', icon: MessageSquareText }
];

function AppShell() {
  const { user, isAuthenticated, login, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('home');
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const sectionContent = useMemo(() => {
    switch (activeTab) {
      case 'archive':
        return <DigitalArchive />;
      case 'genealogy':
        return <GenealogyTrees />;
      case 'books':
        return <BookLibrary />;
      case 'chat':
        return <ChatSystem />;
      case 'home':
      default:
        return <HomeFeed />;
    }
  }, [activeTab]);

  const handleLogin = (userData, rememberMe) => {
    login(userData, rememberMe);
    setAuthModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[color:var(--color-shell)] text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenAuth={() => setAuthModalOpen(true)}
        isAuthenticated={isAuthenticated}
        user={user}
        onLogout={logout}
      />

      <div className="mx-auto flex max-w-[1600px] gap-6 px-4 pb-24 pt-6 sm:px-6 lg:px-8">
        <Sidebar sections={sections} activeTab={activeTab} onSelectTab={setActiveTab} />

        <main className="min-w-0 flex-1 space-y-6">
          <div className="flex items-center justify-between rounded-3xl border border-slate-200/70 bg-white/80 p-4 shadow-soft backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80">
            <div>
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
                <Sparkles className="h-4 w-4" />
                مجتمع الأنساب العربية
              </p>
              <h1 className="mt-1 text-2xl font-extrabold text-slate-900 dark:text-white">
                {sections.find((section) => section.key === activeTab)?.label || 'الرئيسية'}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-300 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                <Bell className="h-4 w-4" />
                التنبيهات
              </button>

              <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-300">
                <ShieldCheck className="h-4 w-4" />
                {isAuthenticated ? 'الهوية موثقة' : 'تسجيل الدخول'}
              </div>
            </div>
          </div>

          {sectionContent}
        </main>
      </div>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} onLogin={handleLogin} />

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/90 p-3 shadow-[0_-8px_26px_rgba(15,23,42,0.1)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/90 md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-5 gap-2 text-center text-xs font-medium">
          {sections.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              className={`flex flex-col items-center justify-center rounded-2xl px-2 py-2 ${
                activeTab === key
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200 dark:shadow-emerald-900/20'
                  : 'text-slate-500 dark:text-slate-300'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="mt-1">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <ChatProvider>
            <AppShell />
          </ChatProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

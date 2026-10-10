import { useState } from 'react';
import { CheckCheck, ImagePlus, MessageSquareText, Plus, Send, ShieldCheck } from 'lucide-react';
import { useChat } from '../context/ChatContext';

export default function ChatSystem() {
  const { chats, selectedChat, selectedChatId, setSelectedChatId, addGroupChat } = useChat();
  const [draft, setDraft] = useState('');
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [groupType, setGroupType] = useState('عام');

  const handleCreateGroup = (event) => {
    event.preventDefault();

    if (!groupName.trim()) {
      return;
    }

    addGroupChat({
      name: groupName,
      description: groupDescription || 'مجموعة جديدة للنقاش التاريخي',
      coverImage: coverImage || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
      type: groupType
    });

    setGroupName('');
    setGroupDescription('');
    setCoverImage('');
    setGroupType('عام');
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[330px_minmax(0,1fr)_320px]">
      <aside className="card-surface rounded-[30px] p-3">
        <div className="mb-4 flex items-center justify-between p-2">
          <h3 className="text-xl font-black text-slate-900 dark:text-white">المحادثات</h3>
          <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-200 dark:shadow-emerald-900/20">
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-3">
          {chats.map((chat) => (
            <button
              key={chat.id}
              type="button"
              onClick={() => setSelectedChatId(chat.id)}
              className={`flex w-full items-center gap-3 rounded-[26px] border p-2.5 text-right transition ${
                chat.id === selectedChatId
                  ? 'border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/30'
                  : 'border-transparent bg-slate-50 hover:border-slate-200 dark:bg-slate-900/70'
              }`}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${chat.color} text-sm font-black text-white`}>
                {chat.avatar}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate text-sm font-black text-slate-900 dark:text-white">{chat.name}</span>
                  {chat.unread > 0 && (
                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-500 px-1 text-[10px] font-bold text-white">
                      {chat.unread}
                    </span>
                  )}
                </div>
                <p className="truncate text-xs text-slate-500 dark:text-slate-400">{chat.lastMessage}</p>
              </div>
            </button>
          ))}
        </div>
      </aside>

      <section className="card-surface flex min-h-[640px] flex-col overflow-hidden rounded-[30px]">
        <header className="flex items-center justify-between border-b border-slate-200 p-4 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${selectedChat.color} text-white`}>
              {selectedChat.avatar}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-slate-900 dark:text-white">{selectedChat.name}</h3>
                {selectedChat.type === 'direct' && <ShieldCheck className="h-4 w-4 text-blue-500" />}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">{selectedChat.subtitle}</p>
            </div>
          </div>

          <button type="button" className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            {selectedChat.type === 'direct' ? 'محادثة مباشرة' : 'مجموعة'}
          </button>
        </header>

        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          {selectedChat.messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[80%] rounded-[24px] px-4 py-3 text-sm ${
                  message.sender === 'me'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-200 dark:shadow-emerald-900/20'
                    : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200'
                }`}
              >
                <div className="mb-1 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                    {message.sender === 'me' ? 'أنت' : 'عضو'}
                  </span>
                  <span className="text-[10px] opacity-80">{message.time}</span>
                </div>
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 p-4 dark:border-slate-700">
          <div className="flex items-center gap-2 rounded-[24px] border border-slate-200 bg-slate-50 p-2 dark:border-slate-700 dark:bg-slate-900">
            <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              <ImagePlus className="h-4 w-4" />
            </button>
            <input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="اكتب رسالتك..."
              className="flex-1 bg-transparent px-2 text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-200"
            />
            <button type="button" className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <aside className="card-surface rounded-[30px] p-4">
        <div className="mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
          <MessageSquareText className="h-5 w-5 text-emerald-600" />
          <h3 className="text-xl font-black">إنشاء مجموعة</h3>
        </div>

        <form onSubmit={handleCreateGroup} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-bold text-slate-700 dark:text-slate-300">اسم المجموعة</label>
            <input
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-900"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-bold text-slate-700 dark:text-slate-300">الوصف</label>
            <textarea
              value={groupDescription}
              onChange={(e) => setGroupDescription(e.target.value)}
              className="min-h-[90px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-900"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-bold text-slate-700 dark:text-slate-300">رابط صورة الغلاف</label>
            <input
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="https://..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-900"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-bold text-slate-700 dark:text-slate-300">نوع المجموعة</label>
            <select
              value={groupType}
              onChange={(e) => setGroupType(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-900"
            >
              <option>عام</option>
              <option>خاص</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-emerald-200 dark:shadow-emerald-900/30"
          >
            إنشاء المجموعة
          </button>
        </form>
      </aside>
    </div>
  );
}

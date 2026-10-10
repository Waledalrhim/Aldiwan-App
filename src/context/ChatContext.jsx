import { createContext, useContext, useMemo, useState } from 'react';

const ChatContext = createContext(null);

const initialChats = [
  {
    id: 'chat-1',
    type: 'direct',
    name: 'سارة الحنفي',
    subtitle: 'باحثة في شجرة بني تميم',
    avatar: 'س',
    color: 'from-emerald-500 to-green-600',
    unread: 2,
    lastMessage: 'أرسلت لك مخطوطة جديدة عن فروع قحطان.',
    messages: [
      { id: 1, sender: 'me', text: 'السلام عليكم، ربطت الشجرة بالنسب المعتمد', time: '09:40' },
      { id: 2, sender: 'them', text: 'وعليكم السلام، أرسلت لك المراجع الموثقة', time: '09:41' }
    ]
  },
  {
    id: 'chat-2',
    type: 'group',
    name: 'مجلس بني مالك',
    subtitle: 'مجموعة عامة • 48 عضو',
    avatar: 'م',
    color: 'from-sky-500 to-cyan-600',
    unread: 0,
    lastMessage: 'تم تحديث خريطة البطون في الحجاز.',
    messages: [
      { id: 1, sender: 'them', text: 'أفراد المجلس، نحتاج إلى توثيق جديد عن فروع مالك بن النمر', time: '08:25' },
      { id: 2, sender: 'me', text: 'سأرسل المراجع خلال ساعة.', time: '08:27' }
    ]
  }
];

export function ChatProvider({ children }) {
  const [chats, setChats] = useState(initialChats);
  const [selectedChatId, setSelectedChatId] = useState(initialChats[0].id);

  const addGroupChat = ({ name, description, coverImage, type = 'عام' }) => {
    const newGroup = {
      id: `group-${Date.now()}`,
      type: 'group',
      name,
      subtitle: `${type} • 12 عضو`,
      avatar: name.charAt(0),
      color: 'from-violet-500 to-purple-600',
      unread: 0,
      lastMessage: description,
      coverImage,
      messages: [
        { id: 1, sender: 'them', text: `تم إنشاء ${name} ومشاركة دعوتك للانضمام.`, time: 'الآن' }
      ]
    };

    setChats((prev) => [newGroup, ...prev]);
    setSelectedChatId(newGroup.id);
  };

  const selectedChat = chats.find((chat) => chat.id === selectedChatId) || chats[0];

  const value = useMemo(
    () => ({ chats, selectedChat, selectedChatId, setSelectedChatId, addGroupChat }),
    [chats, selectedChat, selectedChatId]
  );

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within ChatProvider');
  }
  return context;
}

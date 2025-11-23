import { useState } from 'react';
import ChatList from '@/components/messenger/ChatList';
import ChatWindow from '@/components/messenger/ChatWindow';
import Profile from '@/components/messenger/Profile';
import Files from '@/components/messenger/Files';
import Settings from '@/components/messenger/Settings';
import Sidebar from '@/components/messenger/Sidebar';

export type View = 'chats' | 'profile' | 'files' | 'settings';

const Index = () => {
  const [activeView, setActiveView] = useState<View>('chats');
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  const renderContent = () => {
    switch (activeView) {
      case 'chats':
        return (
          <div className="flex h-screen">
            <ChatList onSelectChat={setSelectedChatId} selectedChatId={selectedChatId} />
            <ChatWindow chatId={selectedChatId} />
          </div>
        );
      case 'profile':
        return <Profile />;
      case 'files':
        return <Files />;
      case 'settings':
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      <div className="flex-1 overflow-hidden">
        {renderContent()}
      </div>
    </div>
  );
};

export default Index;
import Icon from '@/components/ui/icon';
import { View } from '@/pages/Index';

interface SidebarProps {
  activeView: View;
  onViewChange: (view: View) => void;
}

const Sidebar = ({ activeView, onViewChange }: SidebarProps) => {
  const menuItems = [
    { view: 'chats' as View, icon: 'MessageSquare', label: 'Чаты' },
    { view: 'profile' as View, icon: 'User', label: 'Профиль' },
    { view: 'files' as View, icon: 'Folder', label: 'Файлы' },
    { view: 'settings' as View, icon: 'Settings', label: 'Настройки' },
  ];

  return (
    <div className="w-20 bg-slate-900 flex flex-col items-center py-6 space-y-8">
      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
        <Icon name="MessageCircle" className="text-white" size={24} />
      </div>
      
      <nav className="flex flex-col items-center space-y-6 flex-1">
        {menuItems.map((item) => (
          <button
            key={item.view}
            onClick={() => onViewChange(item.view)}
            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
              activeView === item.view
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
            title={item.label}
          >
            <Icon name={item.icon} size={22} />
          </button>
        ))}
      </nav>

      <button className="w-12 h-12 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
        <Icon name="Search" size={22} />
      </button>
    </div>
  );
};

export default Sidebar;

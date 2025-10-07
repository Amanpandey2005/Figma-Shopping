import { useState } from 'react';
import { Home } from './components/Home';
import { Explore } from './components/Explore';
import { Profile } from './components/Profile';
import { Settings } from './components/Settings';
import { Home as HomeIcon, Compass, User, Settings as SettingsIcon } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'explore':
        return <Explore />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="size-full flex flex-col bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground px-6 py-4 shadow-sm">
        <h1>My App</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-card border-t border-border px-4 py-3 shadow-lg">
        <div className="flex justify-around items-center max-w-2xl mx-auto">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'home'
                ? 'text-primary bg-accent'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <HomeIcon className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </button>
          
          <button
            onClick={() => setActiveTab('explore')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'explore'
                ? 'text-primary bg-accent'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Compass className="w-6 h-6" />
            <span className="text-xs">Explore</span>
          </button>
          
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'profile'
                ? 'text-primary bg-accent'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <User className="w-6 h-6" />
            <span className="text-xs">Profile</span>
          </button>
          
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'settings'
                ? 'text-primary bg-accent'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <SettingsIcon className="w-6 h-6" />
            <span className="text-xs">Settings</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

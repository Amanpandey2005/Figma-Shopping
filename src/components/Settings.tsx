import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { ChevronRight, Bell, Lock, Eye, Globe, HelpCircle, LogOut } from 'lucide-react';

export function Settings() {
  const settingsSections = [
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        { id: 'push', label: 'Push Notifications', description: 'Receive push notifications', hasSwitch: true },
        { id: 'email', label: 'Email Notifications', description: 'Receive email updates', hasSwitch: true },
      ],
    },
    {
      title: 'Privacy & Security',
      icon: Lock,
      items: [
        { id: 'private', label: 'Private Account', description: 'Only approved followers can see your content', hasSwitch: true },
        { id: 'activity', label: 'Activity Status', description: 'Show when you\'re active', hasSwitch: true },
      ],
    },
    {
      title: 'Preferences',
      icon: Eye,
      items: [
        { id: 'theme', label: 'Theme', description: 'Choose your display theme', hasSwitch: false },
        { id: 'language', label: 'Language', description: 'English', hasSwitch: false },
      ],
    },
  ];

  const menuItems = [
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
    { id: 'about', label: 'About', icon: Globe },
    { id: 'logout', label: 'Log Out', icon: LogOut, variant: 'destructive' as const },
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <div className="space-y-2">
        <h2>Settings</h2>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      {/* Settings Sections */}
      {settingsSections.map((section) => {
        const Icon = section.icon;
        return (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon className="w-5 h-5" />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {section.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-2">
                  <div className="flex-1">
                    <Label htmlFor={item.id} className="cursor-pointer">
                      {item.label}
                    </Label>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  {item.hasSwitch ? (
                    <Switch id={item.id} />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        );
      })}

      {/* Menu Items */}
      <Card>
        <CardContent className="pt-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={item.variant || 'ghost'}
                className="w-full justify-between"
              >
                <span className="flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  {item.label}
                </span>
                <ChevronRight className="w-5 h-5" />
              </Button>
            );
          })}
        </CardContent>
      </Card>

      <p className="text-center text-sm text-muted-foreground">Version 1.0.0</p>
    </div>
  );
}

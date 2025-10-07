import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { TrendingUp, Star, Clock } from 'lucide-react';

export function Home() {
  const featuredItems = [
    { id: 1, title: 'Getting Started', description: 'Learn the basics and get up to speed', icon: Star },
    { id: 2, title: 'Popular Today', description: 'See what\'s trending right now', icon: TrendingUp },
    { id: 3, title: 'Recent Activity', description: 'Check your latest updates', icon: Clock },
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h2>Welcome back!</h2>
        <p className="text-muted-foreground">Here's what's happening today</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-muted-foreground">Total Views</p>
              <h3>1,234</h3>
              <p className="text-xs text-green-600">+12% from last week</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-muted-foreground">Engagement</p>
              <h3>89%</h3>
              <p className="text-xs text-green-600">+5% from last week</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Featured Items */}
      <div className="space-y-4">
        <h3>Featured</h3>
        {featuredItems.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      {/* Action Button */}
      <Button className="w-full">
        Explore More
      </Button>
    </div>
  );
}

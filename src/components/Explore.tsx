import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Search } from 'lucide-react';

export function Explore() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 1, name: 'Technology', count: 45, color: 'bg-blue-500' },
    { id: 2, name: 'Design', count: 32, color: 'bg-purple-500' },
    { id: 3, name: 'Business', count: 28, color: 'bg-green-500' },
    { id: 4, name: 'Health', count: 21, color: 'bg-red-500' },
    { id: 5, name: 'Education', count: 18, color: 'bg-yellow-500' },
    { id: 6, name: 'Entertainment', count: 15, color: 'bg-pink-500' },
  ];

  const items = [
    { id: 1, title: 'Modern Design Trends', category: 'Design', views: 1234 },
    { id: 2, title: 'Tech Innovation 2025', category: 'Technology', views: 2341 },
    { id: 3, title: 'Business Strategies', category: 'Business', views: 891 },
    { id: 4, title: 'Healthy Living Tips', category: 'Health', views: 1567 },
    { id: 5, title: 'Learning Resources', category: 'Education', views: 943 },
    { id: 6, title: 'Entertainment News', category: 'Entertainment', views: 2103 },
  ];

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <h3>Categories</h3>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <Card key={category.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                  <div className="flex-1">
                    <p>{category.name}</p>
                    <p className="text-xs text-muted-foreground">{category.count} items</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-3">
        <h3>Discover</h3>
        <div className="space-y-3">
          {filteredItems.map((item) => (
            <Card key={item.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p>{item.title}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{item.category}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {item.views.toLocaleString()} views
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

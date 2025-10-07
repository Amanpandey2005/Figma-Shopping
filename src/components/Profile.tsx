import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { Mail, MapPin, Calendar, Award } from 'lucide-react';

export function Profile() {
  const stats = [
    { label: 'Posts', value: '42' },
    { label: 'Followers', value: '1.2K' },
    { label: 'Following', value: '386' },
  ];

  const achievements = [
    { id: 1, name: 'Early Adopter', description: 'Joined in the first week' },
    { id: 2, name: 'Active User', description: '30 days streak' },
    { id: 3, name: 'Top Contributor', description: 'Most helpful user' },
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      {/* Profile Header */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <Avatar className="w-24 h-24">
              <AvatarFallback className="text-2xl">JD</AvatarFallback>
            </Avatar>
            
            <div className="space-y-1">
              <h2>John Doe</h2>
              <p className="text-muted-foreground">@johndoe</p>
            </div>

            <p>Passionate about technology and design. Love creating amazing experiences.</p>

            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary" className="gap-1">
                <Mail className="w-3 h-3" />
                john@example.com
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <MapPin className="w-3 h-3" />
                San Francisco, CA
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Calendar className="w-3 h-3" />
                Joined Oct 2025
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="pt-6 text-center space-y-1">
              <h3>{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="flex items-start gap-3 p-3 bg-accent/50 rounded-lg">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Award className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <p>{achievement.name}</p>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex gap-3">
        <Button className="flex-1">Edit Profile</Button>
        <Button variant="outline" className="flex-1">Share</Button>
      </div>
    </div>
  );
}

import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tv, Download, Users, Film } from 'lucide-react';

const features = [
  {
    icon: <Film className="h-8 w-8 text-accent" />,
    title: 'Vast Library',
    description: 'Access thousands of movies and TV series from all genres, with new titles added weekly.',
  },
  {
    icon: <Tv className="h-8 w-8 text-accent" />,
    title: 'Stream Everywhere',
    description: 'Watch on your phone, tablet, laptop, and TV. Your progress syncs across all your devices.',
  },
  {
    icon: <Download className="h-8 w-8 text-accent" />,
    title: 'Offline Viewing',
    description: 'Download your favorite shows and movies to watch on the go, without an internet connection.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Multiple Profiles',
    description: 'Create up to 5 profiles for your family. Get personalized recommendations for everyone.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Everything You Need in a Streaming App</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            StreamVerse is packed with features that make your viewing experience seamless and enjoyable.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border/60 hover:border-accent/80 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="font-headline">{feature.title}</CardTitle>
                <CardDescription className="pt-2">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

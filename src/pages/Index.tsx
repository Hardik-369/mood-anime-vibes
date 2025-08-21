import React, { useState } from 'react';
import Header from '@/components/Header';
import MoodSelector from '@/components/MoodSelector';
import AnimeRecommendations from '@/components/AnimeRecommendations';

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood === selectedMood ? null : mood);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Header />
        
        <main className="space-y-12">
          <section className="animate-anime-slide-in">
            <MoodSelector 
              selectedMood={selectedMood} 
              onMoodSelect={handleMoodSelect} 
            />
          </section>

          {selectedMood && (
            <section className="animate-anime-slide-in" style={{ animationDelay: '0.3s' }}>
              <AnimeRecommendations selectedMood={selectedMood} />
            </section>
          )}
        </main>
        
        <footer className="text-center py-8 mt-16 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            Powered by{' '}
            <a 
              href="https://jikan.moe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline anime-transition"
            >
              Jikan API
            </a>
            {' '}• Made with 💜 for anime lovers
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

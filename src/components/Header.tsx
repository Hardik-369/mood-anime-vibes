import React from 'react';
import { Film, Sparkles } from 'lucide-react';
import logoImage from '@/assets/anime-logo.png';

const Header: React.FC = () => {
  return (
    <header className="relative py-8 text-center">
      <div className="flex items-center justify-center gap-4 mb-4 animate-anime-bounce-in">
        <div className="relative">
          <img 
            src={logoImage} 
            alt="AniMood Logo" 
            className="w-16 h-16 rounded-2xl anime-card-shadow animate-anime-float"
          />
          <div className="absolute -top-1 -right-1">
            <Sparkles className="w-6 h-6 text-accent animate-anime-pulse" />
          </div>
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold anime-gradient-primary bg-clip-text text-transparent">
            AniMood
          </h1>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 mt-1">
            <Film className="w-4 h-4" />
            Your mood, your anime
          </p>
        </div>
      </div>
      
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-anime-slide-in">
        Discover the perfect anime movie that matches your current mood. 
        From heartwarming romances to thrilling adventures, we've got something for every feeling.
      </p>
    </header>
  );
};

export default Header;
import React from 'react';
import { MoodButton } from '@/components/ui/mood-button';

const moods = [
  { emoji: '😊', mood: 'happy', description: 'Cheerful and uplifting' },
  { emoji: '😢', mood: 'sad', description: 'Emotional and touching' },
  { emoji: '🗡️', mood: 'adventurous', description: 'Action-packed and thrilling' },
  { emoji: '🔮', mood: 'mysterious', description: 'Suspenseful and intriguing' },
  { emoji: '🌸', mood: 'nostalgic', description: 'Sentimental and reflective' },
  { emoji: '⚡', mood: 'energetic', description: 'High-energy and exciting' },
  { emoji: '🕊️', mood: 'peaceful', description: 'Calm and relaxing' },
  { emoji: '💕', mood: 'romantic', description: 'Sweet and heartwarming' },
];

interface MoodSelectorProps {
  selectedMood: string | null;
  onMoodSelect: (mood: string) => void;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({ selectedMood, onMoodSelect }) => {
  return (
    <div className="space-y-6">
      <div className="text-center animate-anime-slide-in">
        <h2 className="text-3xl font-bold mb-2">
          How are you feeling today?
        </h2>
        <p className="text-lg text-muted-foreground">
          Choose your mood and we'll find the perfect anime movie for you
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {moods.map((moodItem, index) => (
          <div
            key={moodItem.mood}
            className="animate-anime-bounce-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <MoodButton
              emoji={moodItem.emoji}
              mood={moodItem.mood}
              isSelected={selectedMood === moodItem.mood}
              onClick={() => onMoodSelect(moodItem.mood)}
              className="w-full"
              title={moodItem.description}
            />
          </div>
        ))}
      </div>
      
      {selectedMood && (
        <div className="text-center animate-anime-slide-in">
          <p className="text-sm text-muted-foreground">
            You selected: <span className="font-semibold text-primary capitalize">{selectedMood}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default MoodSelector;
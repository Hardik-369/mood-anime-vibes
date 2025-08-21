import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { AnimeCard, AnimeCardContent, AnimeCardDescription, AnimeCardHeader, AnimeCardTitle } from '@/components/ui/anime-card';
import { Badge } from '@/components/ui/badge';
import { Star, Calendar } from 'lucide-react';

interface AnimeMovie {
  mal_id: number;
  title: string;
  synopsis: string;
  score: number;
  year: number;
  duration: string;
  genres: Array<{ name: string }>;
  images: {
    jpg: {
      large_image_url: string;
    };
  };
}

interface AnimeRecommendationsProps {
  selectedMood: string | null;
}

const moodToGenres: Record<string, number[]> = {
  happy: [4, 22, 36], // Comedy, Romance, Slice of Life
  sad: [8, 22, 37], // Drama, Romance, Supernatural
  adventurous: [2, 1, 10], // Adventure, Action, Fantasy
  mysterious: [7, 41, 37], // Mystery, Thriller, Supernatural
  nostalgic: [8, 13, 36], // Drama, Historical, Slice of Life
  energetic: [1, 30, 27], // Action, Sports, Shounen
  peaceful: [36], // Slice of Life
  romantic: [22, 8, 25], // Romance, Drama, Shoujo
};

const fetchAnimeRecommendations = async (mood: string): Promise<AnimeMovie[]> => {
  const genreIds = moodToGenres[mood] || [1];
  const params = new URLSearchParams({
    type: 'movie',
    order_by: 'score',
    sort: 'desc',
    limit: '10',
    min_score: '7',
  });
  params.set('genres', genreIds.join(','));

  const url = `https://api.jikan.moe/v4/anime?${params.toString()}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch anime data');
  const data = await response.json();
  let list: AnimeMovie[] = data.data || [];

  // Fallback: if empty, try popularity with first genre only
  if (!list.length && genreIds.length) {
    const fallbackParams = new URLSearchParams({
      type: 'movie',
      order_by: 'popularity',
      sort: 'asc',
      limit: '10',
    });
    fallbackParams.set('genres', String(genreIds[0]));
    const resp2 = await fetch(`https://api.jikan.moe/v4/anime?${fallbackParams.toString()}`);
    if (resp2.ok) {
      const data2 = await resp2.json();
      list = data2.data || [];
    }
  }

  return list.slice(0, 5);
};

const AnimeRecommendations: React.FC<AnimeRecommendationsProps> = ({ selectedMood }) => {
  const { data: recommendations, isLoading, error } = useQuery({
    queryKey: ['animeRecommendations', selectedMood],
    queryFn: () => fetchAnimeRecommendations(selectedMood!),
    enabled: !!selectedMood,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  if (!selectedMood) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4 animate-anime-float">🎭</div>
        <h3 className="text-xl font-semibold text-muted-foreground">
          Select your mood to discover amazing anime movies!
        </h3>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="animate-anime-slide-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <AnimeCard className="h-96">
              <AnimeCardHeader className="h-48 bg-muted animate-pulse" />
              <AnimeCardContent>
                <div className="h-4 bg-muted rounded mb-2 animate-pulse" />
                <div className="h-3 bg-muted rounded w-3/4 mb-4 animate-pulse" />
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded animate-pulse" />
                  <div className="h-3 bg-muted rounded w-5/6 animate-pulse" />
                </div>
              </AnimeCardContent>
            </AnimeCard>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">😔</div>
        <h3 className="text-xl font-semibold text-destructive mb-2">
          Oops! Something went wrong
        </h3>
        <p className="text-muted-foreground">
          Unable to fetch recommendations. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center animate-anime-slide-in">
        <h2 className="text-2xl font-bold mb-2">
          Perfect for your <span className="text-primary capitalize font-bold">{selectedMood}</span> mood
        </h2>
        <p className="text-muted-foreground">
          Here are {recommendations?.length || 0} anime movies curated just for you!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations?.map((anime, index) => (
          <div
            key={anime.mal_id}
            className="animate-anime-slide-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <AnimeCard className="h-full hover:shadow-lg">
              <AnimeCardHeader className="relative h-48 overflow-hidden">
                <img
                  src={anime.images.jpg.large_image_url}
                  alt={anime.title}
                  className="w-full h-full object-cover group-hover:scale-110 anime-transition"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-2 text-primary-foreground text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-accent" />
                      <span className="font-semibold">{anime.score}</span>
                    </div>
                    {anime.year && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{anime.year}</span>
                      </div>
                    )}
                  </div>
                </div>
              </AnimeCardHeader>
              
              <AnimeCardContent className="flex-1 flex flex-col">
                <AnimeCardTitle className="group-hover:text-primary anime-transition">
                  {anime.title}
                </AnimeCardTitle>
                
                <AnimeCardDescription className="flex-1 mb-4">
                  {anime.synopsis || "An amazing anime movie experience awaits!"}
                </AnimeCardDescription>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {anime.genres.slice(0, 3).map((genre, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs hover:anime-gradient-secondary hover:text-secondary-foreground anime-transition"
                    >
                      {genre.name}
                    </Badge>
                  ))}
                </div>
              </AnimeCardContent>
            </AnimeCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeRecommendations;
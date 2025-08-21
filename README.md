# 🎭 AniMood - Anime Movie Recommender

**Discover the perfect anime movie that matches your current mood**

AniMood is a sophisticated mood-based anime movie recommendation system that curates personalized anime movie suggestions based on your emotional state. Whether you're feeling adventurous, nostalgic, or romantic, AniMood helps you find the perfect anime movie to complement your mood.

![AniMood Preview](public/anime-logo.png)

## ✨ Features

### 🎯 Mood-Based Recommendations
- **8 Distinct Moods**: Happy, Sad, Adventurous, Mysterious, Nostalgic, Energetic, Peaceful, Romantic
- **Smart Genre Mapping**: Each mood is intelligently mapped to relevant anime genres
- **Dynamic Filtering**: Real-time recommendations based on mood selection

### 🎬 Rich Movie Information
- **Comprehensive Details**: Title, synopsis, rating, release year, and duration
- **Visual Appeal**: High-quality movie posters and promotional images
- **Genre Tags**: Interactive genre badges for easy categorization
- **Rating System**: MyAnimeList scores for quality assurance

### 🎨 Modern User Experience
- **Anime-Inspired Design**: Vibrant gradients and smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, animated transitions, and visual feedback
- **Performance Optimized**: Lazy loading, caching, and efficient API calls

### 🚀 Technical Excellence
- **Real-time Data**: Integration with Jikan API for up-to-date anime information
- **Intelligent Caching**: React Query for optimized data fetching and caching
- **Error Handling**: Graceful fallbacks and error states
- **Accessibility**: Semantic HTML and keyboard navigation support

## 🛠 Technology Stack

### Frontend Framework
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development and better developer experience
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Design System** - Anime-inspired color palette and animations
- **Radix UI** - Accessible, unstyled UI primitives
- **Shadcn/ui** - Beautiful, reusable UI components

### Data Management
- **TanStack Query (React Query)** - Powerful data synchronization
- **Jikan API** - MyAnimeList unofficial API for anime data

### Development Tools
- **ESLint** - Code linting and quality assurance
- **TypeScript** - Static type checking
- **Vite** - Modern build tooling

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/animood.git
   cd animood
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 📖 Usage

### Basic Usage
1. **Select Your Mood**: Choose from 8 different mood options on the main interface
2. **Browse Recommendations**: View 5 curated anime movie recommendations
3. **Explore Details**: Each movie card displays rating, year, genres, and synopsis
4. **Interactive Experience**: Hover over cards for enhanced visual feedback

### Mood Categories

| Mood | Recommended Genres | Best For |
|------|-------------------|----------|
| **Happy** | Comedy, Romance, Slice of Life | Light-hearted entertainment |
| **Sad** | Drama, Romance, Supernatural | Emotional catharsis |
| **Adventurous** | Adventure, Action, Fantasy | Thrilling experiences |
| **Mysterious** | Mystery, Thriller, Supernatural | Mind-bending stories |
| **Nostalgic** | Drama, Historical, Slice of Life | Reflective viewing |
| **Energetic** | Action, Sports, Shounen | High-energy entertainment |
| **Peaceful** | Slice of Life | Relaxing content |
| **Romantic** | Romance, Drama, Shoujo | Love stories |

## 🔧 Configuration

### Environment Variables
No environment variables are required for basic functionality. The application uses the free Jikan API which doesn't require authentication.

### Customization
- **Colors**: Modify `src/index.css` for custom color schemes
- **Animations**: Update `tailwind.config.ts` for animation preferences
- **Moods**: Extend mood categories in `src/components/AnimeRecommendations.tsx`

## 📊 API Integration

### Jikan API
AniMood integrates with the [Jikan API](https://jikan.moe/), the unofficial MyAnimeList API:

- **Endpoint**: `https://api.jikan.moe/v4/anime`
- **Rate Limiting**: 60 requests per minute
- **Data Source**: MyAnimeList database
- **No Authentication**: Free to use without API keys

### Data Processing
- **Genre Mapping**: Moods are mapped to specific MyAnimeList genre IDs
- **Filtering**: Results filtered by movie type, minimum rating, and relevance
- **Fallback Logic**: Multiple query strategies ensure consistent results

## 🎨 Design System

### Color Palette
- **Primary**: Vibrant anime purple (`hsl(280, 100%, 70%)`)
- **Secondary**: Soft anime pink (`hsl(320, 100%, 85%)`)
- **Accent**: Anime orange (`hsl(25, 100%, 70%)`)
- **Background**: Gradient from light to purple-tinted

### Typography
- **Font Family**: Nunito (primary), Inter (fallback)
- **Hierarchy**: Clear heading and text size relationships
- **Readability**: High contrast ratios for accessibility

### Animations
- **Float Effect**: Subtle vertical movement for logo
- **Slide In**: Smooth entrance animations for content
- **Hover States**: Interactive feedback for all clickable elements
- **Loading States**: Skeleton animations during data fetching

## 🧪 Testing

### Running Tests
```bash
# Run unit tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 📈 Performance

### Optimization Features
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Lazy loading and responsive images
- **Caching Strategy**: Intelligent API response caching
- **Bundle Analysis**: Webpack bundle analyzer integration

### Performance Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Process
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Follow TypeScript best practices
- Use ESLint configuration provided
- Write descriptive commit messages
- Add tests for new features
- Update documentation as needed

### Bug Reports
Please use the issue template and include:
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **MyAnimeList** - For providing comprehensive anime data
- **Jikan API** - For making MyAnimeList data accessible
- **Anime Community** - For inspiration and feedback
- **Open Source Libraries** - For the amazing tools and components

## 📞 Support

For support, questions, or feature requests:
- Create an issue on GitHub
- Check existing documentation
- Review FAQ section

---

**Made with 💜 for anime lovers everywhere**

*Discover your next favorite anime movie with AniMood*
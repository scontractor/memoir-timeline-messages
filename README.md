# Forever Friendship Moments

A beautiful React + TypeScript website celebrating the friendship between Sharvari, Rajvee, and Tanisha. This project was created as a 30th birthday gift to showcase their journey together.

## Features

- **Home Page**: Hero section with beautiful animations and navigation
- **Timeline**: Chronological display of friendship moments with responsive design
- **Predictions**: Interactive envelope components with countdown timers
- **About**: Bios and information about each friend
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Animations**: Smooth Framer Motion animations throughout
- **Database Integration**: Supabase backend for storing predictions

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Backend**: Supabase
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd memoir-timeline-messages
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_SUPABASE_URL=your_supabase_project_url_here
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000)

## Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Create a table called `predictions` with the following schema:

```sql
CREATE TABLE predictions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  sender TEXT NOT NULL,
  receiver TEXT NOT NULL,
  content TEXT NOT NULL,
  unlock_date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

3. Copy your project URL and anon key to the `.env` file

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.tsx   # Main navigation
│   ├── Envelope.tsx     # Interactive envelope component
│   └── CountdownTimer.tsx # Countdown timer component
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── Timeline.tsx    # Timeline page
│   ├── Predictions.tsx # Predictions page
│   └── About.tsx       # About page
├── lib/                # Utility functions
│   └── supabase.ts     # Supabase client and functions
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles
```

## Customization

### Adding Images
- Place hero images in `public/assets/`
- Update image paths in the components
- Recommended image names:
  - `hero-placeholder.jpg` - Hero section background
  - `timeline-photo-1.jpg` to `timeline-photo-6.jpg` - Timeline photos
  - `bio-sharvari.jpg`, `bio-rajvee.jpg`, `bio-tanisha.jpg` - Profile photos

### Updating Content
- Modify text content in the respective page components
- Update predictions in `src/pages/Predictions.tsx`
- Customize timeline data in `src/pages/Timeline.tsx`
- Edit friend bios in `src/pages/About.tsx`

### Styling
- Colors are defined in `tailwind.config.js`
- Custom CSS classes are in `src/index.css`
- Component-specific styles use Tailwind utility classes

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Add environment variables in Netlify dashboard

### Deploy to Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect it's a React app
3. Add environment variables in Vercel dashboard

## Contributing

This is a personal project, but feel free to fork and customize for your own friendship celebrations!

## License

This project is created with love for a special friendship. Feel free to use and modify for your own projects.

## Acknowledgments

- Built with React and TypeScript
- Styled with Tailwind CSS
- Animated with Framer Motion
- Backend powered by Supabase
- Created with ❤️ for Sharvari's 30th birthday 
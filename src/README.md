# My App

A modern, mobile-first web application built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful UI with Tailwind CSS v4
- 📱 Mobile-first responsive design
- 🌙 Dark mode ready
- 🧩 Component-based architecture
- ⚡ Fast development with Vite
- 🎯 TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── App.tsx                 # Main app component
├── main.tsx               # App entry point
├── index.html             # HTML template
├── components/            # React components
│   ├── Home.tsx
│   ├── Explore.tsx
│   ├── Profile.tsx
│   ├── Settings.tsx
│   └── ui/               # Shadcn UI components
├── styles/
│   └── globals.css       # Global styles & Tailwind config
└── package.json          # Project dependencies
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Build your project: `npm run build`
2. Drag and drop the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json scripts:
   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Shadcn/ui** - UI components
- **Lucide React** - Icons
- **Radix UI** - Headless UI components

## Customization

### Change Colors

Edit the CSS variables in `styles/globals.css`:

```css
:root {
  --primary: #030213;
  --accent: #e9ebef;
  /* ... more colors */
}
```

### Add New Pages

1. Create a new component in `components/`
2. Import it in `App.tsx`
3. Add it to the navigation

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.

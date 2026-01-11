# Susheel Portfolio - Full Stack Developer

A clean, minimal, high-performance personal portfolio built with React + Vite. Designed to impress interviewers with smooth animations, dark/light theme support, and a scalable component structure.

## 🎯 Features

- **Clean, Premium UI** - Developer-focused design without unnecessary flashiness
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Powered by Framer Motion with meaningful transitions
- **Dark/Light Theme** - System preference detection with local storage persistence
- **Data-Driven** - All content (projects, skills, experience) from JSON files
- **No External UI Kits** - Custom-built components with Tailwind CSS
- **Type-Safe** - Full TypeScript support with proper typing
- **Performance Optimized** - Built with Vite for lightning-fast builds and HMR

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Multi-variant button component
│   ├── Card.tsx        # Hover-animated card component
│   ├── Header.tsx      # Sticky navigation header
│   ├── Section.tsx     # Section wrapper with animations
│   └── ThemeToggle.tsx # Light/dark theme switcher
├── sections/           # Page sections
│   ├── HeroSection.tsx       # Hero with CTA buttons
│   ├── SkillsSection.tsx     # Technical skills grouped by category
│   ├── ExperienceSection.tsx # Timeline-based experience
│   ├── ProjectsSection.tsx   # Featured and other projects
│   ├── ContactSection.tsx    # Contact form and social links
│   └── Footer.tsx            # Footer with credits
├── context/            # React Context for global state
│   └── ThemeContext.tsx # Theme provider and context
├── hooks/              # Custom React hooks
│   └── useTheme.ts    # Theme management hook
├── data/               # Static JSON data
│   ├── skills.json
│   ├── experience.json
│   └── projects.json
├── types/              # TypeScript type definitions
│   └── index.ts       # Shared types
├── styles/             # Global styles
├── App.tsx             # Main app component
└── main.tsx            # React DOM entry point
```

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ (recommend 18+)
- npm or yarn

### Installation

```bash
# Clone or navigate to project directory
cd Susheel-Kumar

# Install dependencies
npm install

# Start dev server
npm run dev
```

The application will open at `http://localhost:5173`

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

## 📝 Customization

### Update Content

Edit the JSON files in `src/data/`:

- **skills.json** - Add/remove skill categories and items
- **experience.json** - Add professional experience entries
- **projects.json** - Add project showcases

Each file has a clear structure - just follow the existing format.

### Customize Theme

1. **Colors** - Edit `tailwind.config.ts` to change color scheme
2. **Fonts** - Modify font family in tailwind config
3. **Animations** - Adjust Framer Motion settings in components

### Add New Sections

1. Create a new component in `src/sections/YourSection.tsx`
2. Import and add to `src/App.tsx` between existing sections
3. Use the `<Section>` wrapper for consistent styling and animations

Example:

```tsx
import { Section } from '../components/Section';

export function YourSection() {
  return (
    <Section id="your-id" title="Your Title">
      {/* Your content */}
    </Section>
  );
}
```

## 🎨 Component API

### Button Component

```tsx
<Button 
  variant="primary" // 'primary' | 'secondary' | 'outline'
  size="md"         // 'sm' | 'md' | 'lg'
  onClick={() => {}}
>
  Click me
</Button>
```

### Card Component

```tsx
<Card hover={true} className="p-6">
  Card content with optional hover animation
</Card>
```

### Section Component

```tsx
<Section 
  id="section-id"
  title="Section Title"
  subtitle="Optional subtitle"
>
  Section content
</Section>
```

## 🚀 Deployment

### GitHub Pages

1. Update `vite.config.ts` base to `/your-repo-name/`
2. Build the project: `npm run build`
3. Push `dist/` folder to GitHub Pages branch

```bash
npm run build
# Deploy dist folder to gh-pages branch
```

## 🔧 Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

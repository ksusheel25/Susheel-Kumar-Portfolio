# 🚀 Quick Start Guide

## Project is Ready!

Your professional portfolio is fully built and ready for customization and deployment.

## ⚡ Development

```bash
# Start the development server
npm run dev

# Then open your browser to http://localhost:5173
```

## 🔧 Customization

### 1. Update Your Content (Most Important!)

Edit these JSON files to add your real data:

- **`src/data/skills.json`** - Add your technical skills
- **`src/data/experience.json`** - Add your work experience
- **`src/data/projects.json`** - Add your projects

### 2. Update Contact Links

Open `src/components/Header.tsx` and `src/sections/ContactSection.tsx` to:
- Replace social media links (GitHub, LinkedIn, Email)
- Update contact form handling (currently logs to console)

### 3. Customize Colors & Theme

Edit `tailwind.config.ts` to change:
- Primary colors (currently blue/purple)
- Font families
- Dark mode colors

### 4. Update HTML Metadata

Open `index.html` and update:
- Page title
- Meta description
- OG tags for social sharing

## 🏗️ File Structure

```
src/
├── components/       # Reusable UI components
├── sections/        # Page sections (Hero, Skills, etc.)
├── context/         # React Context (Theme provider)
├── hooks/           # Custom hooks (useTheme)
├── data/            # JSON data files
├── types/           # TypeScript types
└── App.tsx          # Main component
```

## 🎯 Adding New Sections

Example: Add a Blog section

1. Create `src/sections/BlogSection.tsx`:

```tsx
import { Section } from '../components/Section';

export function BlogSection() {
  return (
    <Section id="blog" title="Blog" subtitle="Latest articles">
      {/* Your content */}
    </Section>
  );
}
```

2. Import and add to `src/App.tsx`:

```tsx
import { BlogSection } from './sections/BlogSection';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        {/* ... other sections ... */}
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
```

## 🚀 Deployment

### Vercel (Recommended - Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy" - Done!

**Environment:** Vercel auto-detects Vite and builds automatically

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Netlify auto-fills build settings
6. Click "Deploy" - Done!

### GitHub Pages

1. Update `vite.config.ts`:
   ```ts
   base: '/your-repo-name/',
   ```

2. Build:
   ```bash
   npm run build
   ```

3. Deploy `dist/` folder to GitHub Pages branch

## 📦 Build & Preview

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 🎨 Component APIs

### Button
```tsx
<Button variant="primary" size="md" onClick={() => {}}>
  Click me
</Button>
```

### Card
```tsx
<Card hover={true} className="p-6">
  Your content
</Card>
```

### Section
```tsx
<Section id="id" title="Title" subtitle="Optional">
  Content
</Section>
```

## 🔐 Environment Variables

Currently, no environment variables needed. If you add a backend service:

1. Create `.env.local` file
2. Add your variables: `VITE_API_URL=https://api.example.com`
3. Access in code: `import.meta.env.VITE_API_URL`

## 🐛 Troubleshooting

### Port 5173 already in use?
```bash
# Kill the process on that port
lsof -ti:5173 | xargs kill -9
```

### Tailwind styles not showing?
- Clear `.next` and `dist` folders
- Restart dev server
- Ensure `index.html` has `<div id="root"></div>`

### Dark mode not working?
- Check `ThemeContext.tsx` is wrapping your app
- Verify `className={theme === 'dark' ? 'dark' : ''}` on root element

## 📊 Performance Tips

1. **Images** - Optimize before adding (use ImageOptim or TinyPNG)
2. **Code Splitting** - Vite does this automatically
3. **Animations** - Already optimized with Framer Motion
4. **Lighthouse** - Run Lighthouse in DevTools to check scores

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

## 🎉 You're All Set!

Your portfolio is production-ready. Now:

1. ✅ Update your data in JSON files
2. ✅ Customize the theme and styling
3. ✅ Deploy to Vercel or Netlify
4. ✅ Share your portfolio with recruiters!

---

**Questions?** Check the main README.md for detailed information.

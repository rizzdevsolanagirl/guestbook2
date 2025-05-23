# Solana Starter Kit - Styling Guide

## Overview

This project now uses a consistent design system based on semantic color tokens and utility classes. The styling has been unified to match the aesthetic of the `styled-swap` component across the entire application.

## Design System Principles

### 1. Semantic Color Tokens

Instead of hardcoded colors like `bg-zinc-950`, we use semantic tokens that adapt to the theme:

- `bg-background` - Main background color (zinc-950 in dark mode)
- `bg-card` - Card backgrounds (zinc-900 in dark mode)
- `bg-muted` - Muted/secondary backgrounds (zinc-800 in dark mode)
- `bg-primary` - Primary accent color (purple-600)
- `border-border` - Border color (zinc-800 in dark mode)
- `text-foreground` - Primary text color (zinc-50 in dark mode)
- `text-muted-foreground` - Secondary text color (zinc-400 in dark mode)

### 2. Utility Classes

We've added utility classes for common patterns:

```css
.card-primary {
  @apply bg-card border border-border rounded-lg;
}

.card-secondary {
  @apply bg-muted border border-border rounded-lg;
}

.button-primary {
  @apply bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-200;
}

.button-secondary {
  @apply bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-200;
}

.button-ghost {
  @apply bg-transparent text-foreground hover:bg-accent transition-all duration-200;
}

.input-primary {
  @apply bg-input border border-border text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20;
}
```

## Color Palette

### Dark Theme (Primary)

- **Background**: `#09090b` (zinc-950)
- **Card**: `#18181b` (zinc-900)
- **Muted**: `#27272a` (zinc-800)
- **Primary**: `#9333ea` (purple-600)
- **Border**: `#27272a` (zinc-800)
- **Foreground**: `#fafafa` (zinc-50)
- **Muted Foreground**: `#a1a1aa` (zinc-400)

## Component Guidelines

### Cards

```tsx
// ✅ Good - Using semantic tokens
<div className="bg-card border border-border rounded-lg p-6">
  <h3 className="text-foreground">Title</h3>
  <p className="text-muted-foreground">Description</p>
</div>

// ❌ Bad - Using hardcoded colors
<div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
  <h3 className="text-white">Title</h3>
  <p className="text-gray-400">Description</p>
</div>
```

### Buttons

```tsx
// ✅ Good - Using utility classes
<button className="button-primary">Primary Action</button>
<button className="button-secondary">Secondary Action</button>

// ❌ Bad - Inline styles
<button className="bg-purple-600 text-white hover:bg-purple-700">
  Primary Action
</button>
```

### Loading States

```tsx
// ✅ Good - Consistent loading skeleton
<div className="animate-pulse flex flex-col items-center">
  <div className="h-12 w-12 rounded-full bg-muted mb-4" />
  <div className="h-4 w-40 bg-muted rounded mb-2" />
  <div className="h-3 w-32 bg-muted rounded" />
</div>
```

### Modals and Overlays

```tsx
// ✅ Good - Semantic background
<div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
  <div className="bg-card rounded-lg max-w-4xl w-full">
    {/* Modal content */}
  </div>
</div>
```

## Migration Guide

### Before (Inconsistent)

```tsx
// Multiple different approaches
<div className="bg-zinc-950 border-zinc-800">
<div className="bg-zinc-900 hover:bg-zinc-800">
<button className="bg-purple-600 hover:bg-purple-700">
<p className="text-gray-400">
```

### After (Consistent)

```tsx
// Unified semantic approach
<div className="bg-background border-border">
<div className="bg-card hover:bg-muted">
<button className="button-primary">
<p className="text-muted-foreground">
```

## File Structure

### Updated Files

- `src/app/globals.css` - Updated CSS custom properties and utility classes
- `src/components/profile/portfolio-view.tsx` - Migrated to semantic tokens
- `src/components/profile/profile-content.tsx` - Migrated to semantic tokens
- `src/components/trade/components/styled-swap.tsx` - Updated to use semantic tokens
- `src/components/trade/components/token-chart-widget.tsx` - Migrated colors
- `src/app/page.tsx` - Updated home page styling

### New Files

- `src/components/ui/style-guide.tsx` - Style guide component for reference
- `STYLING_GUIDE.md` - This documentation

## Best Practices

1. **Always use semantic tokens** instead of hardcoded colors
2. **Use utility classes** for common patterns
3. **Maintain consistent spacing** with Tailwind's spacing scale
4. **Use consistent border radius** (0.5rem default)
5. **Apply consistent hover states** with transition-all duration-200
6. **Use consistent focus states** with ring-2 ring-ring/20

## Testing the Changes

To see the style guide in action, you can temporarily add it to a page:

```tsx
import { StyleGuide } from '@/components/ui/style-guide'

// Add to any page component
;<StyleGuide />
```

## Future Considerations

1. **Component Library**: Consider extracting common components into a shared library
2. **Theme Switching**: The semantic token system makes it easy to add light/dark theme switching
3. **Design Tokens**: Could be extended with design tokens for spacing, typography, etc.
4. **Accessibility**: Ensure color contrast ratios meet WCAG guidelines

## Conclusion

This styling system provides:

- **Consistency** across all components
- **Maintainability** through semantic tokens
- **Flexibility** for future theme changes
- **Developer Experience** with clear utility classes
- **Performance** by reducing CSS bundle size through reusable classes

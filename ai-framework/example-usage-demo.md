# AEM EDS Block Generator - Example Usage Demo

## Example 1: Creating a Feature Grid Block from Design

### User Input:
```
Using the AEM EDS Block Generation framework, create a "feature-grid" block based on this design specification:

**Design Description:**
A 3-column grid showcasing product features. Each feature card contains:
- Icon (64x64px, blue accent color)
- Feature title (bold, larger text)
- Feature description (2-3 lines of body text)
- Optional "Learn more" link

**Layout:**
- Desktop: 3 columns with 32px gaps
- Tablet: 2 columns 
- Mobile: 1 column, stacked vertically
- Cards have subtle shadow and border radius
- Hover effect: shadow increases, slight scale transform

**Colors from design:**
- Icon color: #3b63fb (matches existing --link-color)
- Card background: white
- Border: #dadada (light gray)
- Shadow: rgba(0, 0, 0, 0.1)

**Content Structure:**
Each row in the block editor represents one feature with:
- Column 1: Icon (SVG or image)
- Column 2: Title text
- Column 3: Description text
- Column 4: Link (optional)

Generate the complete feature-grid block.
```

### Expected Output:

#### feature-grid.js
```javascript
import { createOptimizedPicture, decorateIcons } from '../../scripts/aem.js';

/**
 * loads and decorates the feature-grid block
 * @param {Element} block The feature-grid block element
 */
export default function decorate(block) {
  const grid = document.createElement('div');
  grid.className = 'feature-grid-container';

  [...block.children].forEach((row) => {
    const feature = document.createElement('div');
    feature.className = 'feature-grid-item';

    const [iconCell, titleCell, descCell, linkCell] = row.children;

    // Icon section
    if (iconCell) {
      const iconDiv = document.createElement('div');
      iconDiv.className = 'feature-grid-icon';
      iconDiv.innerHTML = iconCell.innerHTML;
      feature.append(iconDiv);
    }

    // Content section
    const content = document.createElement('div');
    content.className = 'feature-grid-content';

    if (titleCell) {
      const title = document.createElement('h3');
      title.className = 'feature-grid-title';
      title.textContent = titleCell.textContent.trim();
      content.append(title);
    }

    if (descCell) {
      const desc = document.createElement('p');
      desc.className = 'feature-grid-description';
      desc.textContent = descCell.textContent.trim();
      content.append(desc);
    }

    if (linkCell?.textContent.trim()) {
      const link = document.createElement('a');
      link.className = 'feature-grid-link';
      link.href = linkCell.querySelector('a')?.href || '#';
      link.textContent = linkCell.textContent.trim();
      link.setAttribute('aria-label', `Learn more about ${titleCell?.textContent || 'this feature'}`);
      content.append(link);
    }

    feature.append(content);
    grid.append(feature);
  });

  // Optimize images and decorate icons
  grid.querySelectorAll('img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '64' }]);
    img.closest('picture')?.replaceWith(optimizedPic);
  });

  decorateIcons(grid);

  block.textContent = '';
  block.append(grid);
}
```

#### feature-grid.css  
```css
.feature-grid .feature-grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin: 0;
  padding: 0;
}

.feature-grid .feature-grid-item {
  background-color: var(--background-color);
  border: 1px solid #dadada;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: center;
}

.feature-grid .feature-grid-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.feature-grid .feature-grid-icon {
  margin-bottom: 16px;
}

.feature-grid .feature-grid-icon img,
.feature-grid .feature-grid-icon svg {
  width: 64px;
  height: 64px;
  color: var(--link-color);
}

.feature-grid .feature-grid-title {
  font-family: var(--heading-font-family);
  font-size: var(--heading-font-size-s);
  font-weight: 700;
  color: var(--text-color);
  margin: 0 0 12px 0;
  line-height: 1.3;
}

.feature-grid .feature-grid-description {
  font-size: var(--body-font-size-s);
  line-height: 1.5;
  color: var(--dark-color);
  margin: 0 0 16px 0;
}

.feature-grid .feature-grid-link {
  display: inline-block;
  color: var(--link-color);
  text-decoration: none;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.feature-grid .feature-grid-link:hover {
  color: var(--link-hover-color);
  border-bottom-color: var(--link-hover-color);
}

.feature-grid .feature-grid-link:focus {
  outline: 2px solid var(--link-color);
  outline-offset: 2px;
  border-radius: 2px;
}

@media (width >= 600px) {
  .feature-grid .feature-grid-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
}

@media (width >= 900px) {
  .feature-grid .feature-grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .feature-grid .feature-grid-title {
    font-size: var(--heading-font-size-m);
  }
  
  .feature-grid .feature-grid-description {
    font-size: var(--body-font-size-m);
  }
}
```

#### feature-grid-authoring-guide.md
```markdown
# Feature Grid Block - Authoring Guide

## Overview
The Feature Grid block displays a responsive grid of feature cards, each highlighting a key product or service feature with an icon, title, description, and optional link.

## Content Structure
Each row in the block represents one feature card with the following columns:

| Column | Content Type | Required | Description |
|--------|-------------|----------|-------------|
| 1 | Icon | Yes | SVG icon or image (64x64px recommended) |
| 2 | Title | Yes | Feature name or title (keep concise) |
| 3 | Description | Yes | Brief description (2-3 lines recommended) |
| 4 | Link | Optional | "Learn more" link with URL |

## Authoring Instructions

### Adding Features
1. Click "Add Row" for each feature you want to display
2. In Column 1: Add an icon (upload SVG or image, or use text-based icon)
3. In Column 2: Enter the feature title
4. In Column 3: Enter a concise description
5. In Column 4: Add a link if you want users to learn more (optional)

### Example Content Structure
```
| :icon-performance: | Fast Performance | Lightning-fast loading with optimized delivery | /performance |
| :icon-security: | Secure & Reliable | Enterprise-grade security and 99.9% uptime | /security |
| :icon-scale: | Global Scale | Deploy worldwide with edge delivery network | /global |
```

### Icon Guidelines
- **SVG icons**: Recommended for best quality and performance
- **Image icons**: Use 64x64px for optimal display
- **Text icons**: Use emoji or text-based icons as fallback
- **Color**: Icons automatically inherit the theme accent color

### Content Best Practices
- **Titles**: Keep to 2-4 words for better readability
- **Descriptions**: Aim for 15-25 words (2-3 lines)
- **Consistency**: Use parallel structure across all features
- **Links**: Make link text descriptive ("Learn about security" vs "Learn more")

## Responsive Behavior
- **Mobile (< 600px)**: Single column layout, stacked vertically
- **Tablet (600px - 899px)**: Two columns with increased spacing
- **Desktop (900px+)**: Three columns with optimal spacing

## Styling Options
The block automatically adapts to your site's design system using CSS custom properties:
- Colors follow your theme's primary and text colors
- Typography uses your site's font families and scales
- Hover effects provide subtle interactive feedback

## Accessibility Features
- **Semantic markup**: Uses proper heading hierarchy (h3 for titles)
- **Keyboard navigation**: All links are keyboard accessible
- **Screen reader support**: Descriptive link labels and proper structure
- **Color contrast**: Meets WCAG AA standards
- **Focus indicators**: Clear focus states for keyboard users

## Performance Notes
- **Lazy loading**: Images load as they enter the viewport
- **Optimized images**: Automatically creates responsive image sets
- **CSS-driven animations**: Smooth hover effects without JavaScript overhead
- **Progressive enhancement**: Works perfectly without JavaScript

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Mobile-optimized for all major mobile browsers

## Tips for Best Results
1. **Limit features**: 3-6 features work best for readability
2. **Consistent icons**: Use similar icon styles throughout
3. **Balanced content**: Keep descriptions roughly the same length
4. **Test mobile**: Preview how the single-column layout looks
5. **Use quality icons**: Vector icons scale better than bitmap images
```

## Example 2: Quick Mobile-Responsive Card Block

### User Input:
```
Create a simple "testimonial-card" block. Each card shows customer photo, quote, name, and company. Mobile stacks cards, desktop shows 2 per row. Use clean, minimal design with subtle shadows.
```

### Expected Streamlined Output:

The framework would generate a complete testimonial-card block following all EDS patterns, with proper responsive behavior, accessibility features, and performance optimizations - all based on this brief description and the established design system patterns.

## Usage Benefits

1. **Consistent Quality**: Every generated block follows EDS best practices
2. **Complete Implementation**: All three required files generated together
3. **Accessibility Built-in**: WCAG compliance by default
4. **Performance Optimized**: Follows Core Web Vitals best practices  
5. **Responsive by Default**: Mobile-first approach with proper breakpoints
6. **Maintainable Code**: Clean, documented, and following established patterns
7. **Author-Friendly**: Includes comprehensive authoring documentation

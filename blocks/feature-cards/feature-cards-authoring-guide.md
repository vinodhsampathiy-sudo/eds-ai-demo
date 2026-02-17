# Feature Cards Block - Authoring Guide

## Overview
The Feature Cards block displays a grid of visually appealing cards showcasing features, services, or content categories. Each card includes an icon, title, description, and optional tags. One card can be designated as "featured" with a gradient background and call-to-action button.

## Content Structure

### Section Header (Optional)
- **Row 1**: Section heading (e.g., "Explore EDS Block Types")
- **Row 2**: Section subheading (e.g., "Choose from hundreds of pre-built blocks...")

### Card Rows
Each subsequent row represents a card with the following columns:

| Column | Content Type | Required | Description |
|--------|-------------|----------|-------------|
| 1 | Icon Name | Yes | Icon identifier (e.g., "layers", "grid", "form") |
| 2 | Title | Yes | Card heading |
| 3 | Description | Yes | Brief description of the feature |
| 4 | Tags | Optional | Comma or bullet-separated tags |
| 5 | CTA Link | Optional | Call-to-action link (makes card "featured") |

## Authoring Instructions

### Step 1: Add Section Header
```
| Explore EDS Block Types |
| Choose from hundreds of pre-built blocks or generate custom ones instantly |
```

### Step 2: Add Regular Cards
```
| layers | Hero Sections | Eye-catching hero blocks with dynamic backgrounds, CTAs, and animations | Responsive, Animated | |
| grid | Card Layouts | Flexible card grids for products, services, team members, and more | Flexible, Modern | |
| form | Form Blocks | Beautiful, accessible forms with validation and smooth user experience | Accessible, Validated | |
```

### Step 3: Add Featured Card (Optional)
Add a link in the 5th column to make a card featured:
```
| quote | Testimonials | Social proof sections with ratings, reviews, and customer stories | Engaging, Trust-Building | [Explore](/testimonials) |
```

## Content Guidelines

### Icons
Available icon names (ensure corresponding SVG exists in `/icons/`):
- `layers` - Hero sections, stacked content
- `grid` - Card layouts, grids
- `form` - Forms, inputs
- `menu` - Navigation, menus
- `gallery` - Image galleries
- `quote` - Testimonials, quotes

**Custom Icons**: Add new SVG files to `/icons/` folder with the naming pattern `{icon-name}.svg`

### Titles
- Keep concise: 2-4 words ideal
- Use clear, descriptive language
- Examples: "Hero Sections", "Card Layouts", "Form Blocks"

### Descriptions
- Length: 10-20 words recommended
- Focus on key benefits or features
- Use active, engaging language
- Example: "Eye-catching hero blocks with dynamic backgrounds, CTAs, and animations"

### Tags
- Use 2-3 tags per card
- Keep tags short: 1-2 words each
- Separate with commas or bullet points (•)
- Examples: "Responsive", "Animated", "Modern", "Accessible"

### Featured Card
- Use the 5th column for a CTA link
- Only one featured card per block recommended
- Featured cards get purple gradient background
- CTA button appears at bottom of card
- Example: `[Explore](/path)` or `[Learn More](/path)`

## Layout Behavior

### Desktop (≥1200px)
- 3 cards per row
- Maximum width: 1400px (centered)
- Generous spacing between cards

### Tablet (768px - 1199px)
- 2 cards per row
- Maintains visual hierarchy
- Adequate spacing maintained

### Mobile (<768px)
- Single column layout
- Cards stack vertically
- Reduced padding for smaller screens
- Featured card maintains special styling but doesn't dominate

## Styling Variations

### Card States
- **Default**: Dark background with subtle border
- **Hover**: Slight lift, glowing border, shadow
- **Focus**: Clear outline for keyboard navigation

### Featured Card
- Purple gradient background
- White text for better contrast
- Decorative quote icon in background
- CTA button with white background and purple text

## Accessibility Features

### Semantic Structure
- Section wrapped in semantic HTML
- Card titles use proper heading hierarchy (h3)
- Descriptive alt text for icons

### Keyboard Navigation
- All cards are keyboard accessible
- Tab through cards and CTA buttons
- Enter/Space to activate

### ARIA Labels
- CTA buttons have descriptive labels
- Decorative icons marked as `aria-hidden="true"`
- Clickable cards have proper role and tabindex

### Color Contrast
- All text meets WCAG AA standards
- Sufficient contrast on both regular and featured cards
- Tag borders provide adequate visibility

## Performance Considerations

### Optimizations
- Lightweight CSS with minimal box-shadows
- SVG icons load inline (no external requests)
- No JavaScript required for basic functionality
- Grid reflows smoothly without layout shifts

### Best Practices
- Limit to 6-9 cards per block
- Use optimized SVG icons
- Keep descriptions concise
- Test on various screen sizes

## Example Content Structure

### Complete Example
```
| Feature Cards |
| Explore EDS Block Types |
| Choose from hundreds of pre-built blocks or generate custom ones instantly |
| layers | Hero Sections | Eye-catching hero blocks with dynamic backgrounds, CTAs, and animations | Responsive • Animated | |
| grid | Card Layouts | Flexible card grids for products, services, team members, and more | Flexible • Modern | |
| form | Form Blocks | Beautiful, accessible forms with validation and smooth user experience | Accessible • Validated | |
| menu | Navigation Menus | Responsive navigation patterns including mega menus and mobile drawers | Mobile-First • Customizable | |
| gallery | Gallery Blocks | Stunning image galleries with lightbox, masonry, and grid layouts | Visual • Interactive | |
| quote | Testimonials | Social proof sections with ratings, reviews, and customer stories | Engaging • Trust-Building | [Explore](/testimonials) |
```

## Troubleshooting

### Icons Not Displaying
- Verify icon SVG files exist in `/icons/` folder
- Check icon name matches filename (case-sensitive)
- Ensure `decorateIcons()` is being called

### Featured Card Not Styled
- Verify CTA link is in 5th column
- Check link format: `[Text](URL)`
- Ensure CSS is loaded correctly

### Layout Issues
- Check grid breakpoints in CSS
- Verify max-width container settings
- Test responsive behavior at breakpoints

### Accessibility Issues
- Run automated accessibility tests
- Test keyboard navigation
- Verify color contrast ratios
- Check screen reader compatibility

## Tips for Best Results

### Visual Design
1. Use consistent icon style across all cards
2. Keep card content balanced (similar lengths)
3. Use featured card sparingly (max 1 per block)
4. Test hover states on different devices

### Content Strategy
1. Order cards by importance or user journey
2. Place featured card strategically (often last)
3. Use clear, benefit-focused language
4. Keep tag labels consistent across cards

### Performance
1. Optimize SVG icons (remove unnecessary data)
2. Test loading on slower connections
3. Monitor layout shift metrics
4. Ensure smooth hover transitions

## Browser Support
- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Related Blocks
- **Cards Block**: Simpler card layout without icons
- **Feature Carousel**: Sliding feature cards
- **Hero Block**: Large hero sections with CTAs

---

**Need Help?** Refer to existing blocks in `/blocks/` for implementation patterns and best practices.

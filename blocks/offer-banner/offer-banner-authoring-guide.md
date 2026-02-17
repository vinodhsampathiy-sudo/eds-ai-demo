# Offer Banner Block - Authoring Guide

## Overview
The Offer Banner block creates an eye-catching promotional section with a dark gradient background, featuring a limited-time offer badge, compelling headline, feature highlights, and a prominent call-to-action button. Perfect for driving trial signups, product launches, or special promotions.

## Content Structure
The block expects content in a specific row structure:

| Row | Content Type | Required | Description |
|-----|-------------|----------|-------------|
| 1 | Badge Text | Optional | Limited time offer or promotional text |
| 2 | Main Heading | Required | Primary headline (e.g., "Start Your Free Trial Today") |
| 3 | Description | Optional | Supporting text or value proposition |
| 4 | Features List | Optional | Benefits separated by bullet points (•) |
| 5 | CTA Button | Required | Button text and link |
| 6 | Bottom Text | Optional | Additional context or statistics |

## Authoring Instructions

### Step 1: Add the Offer Banner Block
1. In your document, add a new section
2. Insert the offer-banner block: `| Offer Banner |`

### Step 2: Configure Content
Add each row of content as specified:

```
| Limited Time Offer |
| Start Your Free Trial Today |
| No credit card required • Full access to all features • Cancel anytime |
| Unlimited blocks • Priority support • Advanced AI features • Team collaboration |
| [Start Free Trial - 14 Days](https://example.com/trial) |
| Join 10,000+ developers building faster with AI Accelerator |
```

### Content Guidelines

#### Badge Text (Row 1)
- Keep it short and urgent: "Limited Time Offer", "Special Deal", "New Launch"
- Creates sense of urgency and exclusivity
- Will display with a gift icon

#### Main Heading (Row 2)  
- Use action-oriented language: "Start", "Get", "Try", "Unlock"
- Keep it concise but compelling (3-6 words ideal)
- This becomes the H1 of the section

#### Description (Row 3)
- Highlight key benefits or remove friction
- Use bullet points separated by " • " for multiple benefits
- Examples: "No credit card required • Cancel anytime"

#### Features List (Row 4)
- Separate each feature with " • " (bullet point)
- Keep each feature to 2-4 words
- Features display with checkmark icons
- Examples: "Unlimited blocks • Priority support • Advanced AI features"

#### CTA Button (Row 5)
- Use standard link format: `[Button Text](URL)`
- Make button text action-oriented and specific
- Include time reference if relevant: "Start Free Trial - 14 Days"
- Button displays with a rocket icon

#### Bottom Text (Row 6)
- Add social proof, statistics, or additional context
- Keep it brief and credible
- Examples: "Join 10,000+ developers", "Trusted by 500+ companies"

## Visual Design Features

### Color Scheme
- **Background**: Dark navy gradient with subtle light effects
- **Text**: White and off-white for high contrast
- **Accent**: Purple/blue gradient for badge and button
- **Icons**: Blue accent color matching the design system

### Interactive Elements
- **CTA Button**: 
  - Hover: Scale up (1.05x) with enhanced shadow and shimmer effect
  - Focus: White outline for accessibility
  - Active: Scale down (0.98x) for feedback
- **Keyboard Navigation**: Full keyboard support with Enter and Space key activation

### Typography
- **Heading**: Uses theme heading font family, bold weight
- **Body**: Uses theme body font family
- **Responsive**: Font sizes adapt to screen size using CSS custom properties

## Responsive Behavior

### Mobile (< 600px)
- Single column layout
- Reduced padding and font sizes
- Features stack vertically and center-align
- Button maintains minimum touch target size (44px)

### Tablet (600px - 899px)
- Increased spacing
- Features display in flexible rows

### Desktop (900px+)
- Maximum visual impact with largest font sizes
- Features display in a single row when possible
- Enhanced hover effects and animations

## Accessibility Features

### WCAG 2.1 AA Compliance
- ✅ **Color Contrast**: High contrast white text on dark background
- ✅ **Keyboard Navigation**: Full keyboard support for interactive elements
- ✅ **Screen Readers**: Proper semantic markup and ARIA labels
- ✅ **Focus Management**: Clear focus indicators
- ✅ **Alternative Text**: Icons marked as decorative with aria-hidden

### Accessibility Enhancements
- Semantic HTML structure (H1 for main heading)
- Descriptive link labels for screen readers
- Support for high contrast mode
- Respects reduced motion preferences
- Proper heading hierarchy

## Performance Optimizations

### Core Web Vitals
- **LCP**: Background uses CSS gradients (no image loading)
- **CLS**: Fixed dimensions prevent layout shift
- **FID**: Efficient event handlers with minimal JavaScript

### Loading Strategy
- CSS-only background effects (no images to load)
- Icons load through existing icon system
- Minimal JavaScript for progressive enhancement

### Mobile Performance
- Touch-optimized interactions
- Reduced animations on mobile
- Efficient CSS transforms for hover effects

## Browser Support

### Modern Browsers
- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

### Graceful Degradation
- Fallback colors for older gradient support
- Basic styling works without CSS Grid support
- Core functionality works without JavaScript

## Best Practices

### Content Strategy
1. **Test your headline**: A/B test different headlines for conversion
2. **Limit features**: 3-4 key features work best
3. **Clear value prop**: Make the benefit immediately obvious
4. **Remove friction**: Address common objections in the description

### Design Consistency
1. **Match brand colors**: Customize CSS custom properties as needed
2. **Icon consistency**: Ensure icons match your design system
3. **Typography harmony**: Verify font sizes work with your content
4. **Spacing rhythm**: Adjust padding if needed for your layout

### Performance Tips
1. **Optimize CTAs**: Make buttons large enough for easy tapping
2. **Test loading**: Verify smooth animations on various devices
3. **Monitor metrics**: Track conversion rates and loading performance
4. **Progressive enhancement**: Ensure core functionality works without JS

## Troubleshooting

### Common Issues
- **Button not appearing**: Check that Row 5 contains a proper link format
- **Features not displaying**: Ensure features are separated by " • " 
- **Styling issues**: Verify CSS custom properties are defined in your theme
- **Icons missing**: Ensure icon system is properly loaded

### Content Validation
- Badge text should be concise (under 20 characters)
- Heading should be compelling but not too long
- Features list should have 2-6 items
- CTA button text should be action-oriented
- All content should be appropriate for your brand voice

This block is designed to maximize conversion while maintaining excellent user experience across all devices and accessibility requirements.

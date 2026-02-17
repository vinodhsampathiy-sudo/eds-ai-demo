# AEM Edge Delivery Services (EDS) Block Generator Framework

This framework provides a comprehensive system for generating production-ready AEM EDS blocks using AI/LLM assistance while maintaining strict adherence to best practices, performance standards, and accessibility requirements.

## 📁 Framework Structure

```
ai-framework/
├── README.md                              # This overview
├── aem-eds-block-generator-system-prompt.md  # Core system prompt & guardrails
├── user-prompt-templates.md               # Template prompts for different use cases
├── complete-generation-prompt.md          # Complete prompt for LLM usage
└── example-usage-demo.md                  # Real examples and expected outputs
```

## 🎯 Purpose

Generate AEM EDS blocks that are:
- ✅ **Performance-optimized** (Core Web Vitals compliant)
- ✅ **Accessibility-compliant** (WCAG 2.1 AA)
- ✅ **Mobile-responsive** (Mobile-first design)
- ✅ **Code-standards compliant** (ESLint + Stylelint)
- ✅ **EDS pattern-conformant** (Following established architecture)
- ✅ **Author-friendly** (Complete documentation included)

## 🚀 Quick Start

### 1. Choose Your Input Type
- **Design Image**: Use Template 1 or 4 for visual designs
- **Figma Design**: Use Template 2 for Figma specifications  
- **Functional Requirements**: Use Template 3 for feature specifications
- **Behavioral Focus**: Use Template 5 for interaction-heavy components

### 2. Use the Complete Generation Prompt
Copy the content from `complete-generation-prompt.md` as your system prompt, then provide your specific requirements using one of the user prompt templates.

### 3. Expected Output
Every generation produces exactly **three files**:
- `{block-name}.js` - JavaScript implementation
- `{block-name}.css` - Responsive styling
- `{block-name}-authoring-guide.md` - Complete documentation

## 📋 Framework Features

### Strict Code Quality Enforcement
- **ESLint (Airbnb base config)** compliance enforced
- **Stylelint (standard config)** compliance enforced  
- **Unix line endings** required
- **Named imports with .js extensions** mandatory
- **JSDoc documentation** required for all functions

### Built-in Best Practices
- **Progressive enhancement** pattern
- **Mobile-first responsive design**
- **CSS custom properties** for theming
- **Semantic HTML** foundation
- **Performance-first** image optimization
- **Accessibility** by default

### Anti-Pattern Prevention
- ❌ Global CSS selectors in blocks
- ❌ JavaScript-dependent core functionality
- ❌ Inline styles or non-semantic HTML
- ❌ Hard-coded dimensions or colors
- ❌ Missing accessibility attributes
- ❌ Non-performant image handling

## 🎨 Design System Integration

The framework automatically integrates with your existing EDS design system:

### CSS Custom Properties Available
```css
/* Colors */
--background-color, --text-color, --link-color, etc.

/* Typography */  
--body-font-family, --heading-font-family
--body-font-size-m, --heading-font-size-xl, etc.

/* Layout */
--nav-height: 64px
```

### Responsive Breakpoints
```css
/* Mobile-first approach */
.block { /* Mobile styles (up to 899px) */ }

@media (width >= 900px) {
  .block { /* Desktop styles */ }
}
```

## 🔧 Component Behavior Standards

When behavior isn't specified, the framework assumes these standards:

| Component Type | Default Behaviors |
|---------------|-------------------|
| **Buttons** | Click/tap activation, keyboard support (Enter/Space), focus indicators |
| **Carousels** | Arrow navigation, dot indicators, swipe support, keyboard controls |
| **Forms** | Real-time validation, error states, loading indicators |
| **Modals** | Focus trapping, ESC to close, backdrop click to close |
| **Images** | Lazy loading, responsive sizing, error states |

## 📱 Mobile Responsive Strategy

All generated blocks follow mobile-first principles:

### Automatic Adaptations
- Horizontal layouts stack vertically on mobile
- Touch targets meet minimum 44px size
- Font scales use existing CSS custom properties
- Complex layouts simplify while maintaining hierarchy
- Swipe gestures added for interactive elements

### Responsive Grid Patterns
```css
/* Mobile: Single column */
.block-container { 
  grid-template-columns: 1fr; 
}

/* Tablet: Two columns */  
@media (width >= 600px) {
  .block-container { 
    grid-template-columns: repeat(2, 1fr); 
  }
}

/* Desktop: Three+ columns */
@media (width >= 900px) {
  .block-container { 
    grid-template-columns: repeat(3, 1fr); 
  }
}
```

## 🎯 Example Use Cases

### Simple Request
```
Create a "testimonial-card" block with customer photo, quote, name, and company. Mobile stacks, desktop shows 2 per row.
```

### Detailed Request
```
Create a "feature-carousel" block based on this Figma design [attach design]. Include auto-rotation every 5 seconds, pause on hover, swipe support, and accessibility compliance. Extract exact colors and spacing from the design.
```

### Image-Based Request
```
Create a block based on this design image [attach image]. Extract all visual styling, make it responsive, and assume standard interactive behaviors for the component type.
```

## 📚 Documentation Generated

Each block includes a comprehensive authoring guide with:

- **Overview**: Purpose and use cases
- **Content Structure**: Required/optional content with examples
- **Authoring Instructions**: Step-by-step content creation guide
- **Styling Options**: Available variations and customizations
- **Accessibility Features**: Built-in accessibility support
- **Performance Notes**: Loading behavior and optimization details
- **Browser Support**: Compatibility information

## 🔍 Quality Assurance

Every generated block is validated against:

✅ **Semantic HTML Foundation**
✅ **Progressive Enhancement**  
✅ **Performance Optimization**
✅ **Accessibility Compliance (WCAG 2.1 AA)**
✅ **Code Quality Standards**
✅ **EDS Pattern Compliance**

## 🚀 Getting Started

1. **Review** the system prompt in `aem-eds-block-generator-system-prompt.md`
2. **Choose** a user prompt template from `user-prompt-templates.md`
3. **Use** the complete prompt from `complete-generation-prompt.md`
4. **Reference** examples in `example-usage-demo.md` for guidance

## 🤝 Contributing

When updating this framework:
- Maintain strict adherence to EDS patterns
- Update examples when adding new capabilities
- Test generated code against existing EDS projects
- Ensure all guardrails remain enforced

---

*This framework ensures consistent, high-quality AEM EDS block generation while maintaining the flexibility to create diverse, custom components based on any design or functional specification.*

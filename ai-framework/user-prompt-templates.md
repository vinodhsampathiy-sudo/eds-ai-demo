# AEM EDS Block Generation - User Prompt Templates

## Template 1: Image-Based Block Generation

```
Create an AEM EDS block based on the attached design image.

**Block Name:** [specify-block-name]

**Design Analysis Required:**
1. Extract all visual elements, spacing, typography, and layout patterns from the image
2. Identify interactive elements and their expected behaviors  
3. Determine responsive breakpoints and mobile adaptations
4. Extract color palette and typography specifications
5. Identify any icons, illustrations, or decorative elements

**Component Behavior:** 
[If not specified, assume standard behaviors based on component type]
- Interactive elements: [describe expected interactions]
- Animation/transitions: [describe any motion requirements]
- Data handling: [describe any dynamic content requirements]
- User feedback: [describe hover, focus, active states]

**Content Structure:**
[Provide examples of the content that will populate this block]
- Text content examples
- Image requirements and specifications  
- Links and navigation elements
- Any variable content or configurations

**Accessibility Requirements:**
- Ensure WCAG 2.1 AA compliance
- Provide proper keyboard navigation
- Include appropriate ARIA labels and roles
- Ensure color contrast ratios meet standards

**Performance Considerations:**
- Optimize for Core Web Vitals
- Implement proper image loading strategies
- Minimize layout shift
- Consider mobile performance implications

Generate: {block-name}.js, {block-name}.css, and {block-name}-authoring-guide.md
```

## Template 2: Figma Design-Based Block Generation

```
Create an AEM EDS block based on the provided Figma design specifications.

**Block Name:** [specify-block-name]
**Figma Link/Screenshot:** [provide-figma-access]

**Design Token Extraction Required:**
1. Extract exact spacing values (margins, padding, gaps)
2. Extract typography specifications (font-size, line-height, font-weight)
3. Extract color values and create CSS custom property mappings
4. Extract border-radius, shadows, and other visual properties
5. Identify component states (default, hover, focus, active, disabled)
6. Extract responsive behavior and breakpoint specifications

**Interactive Specifications:**
- Component states and transitions
- Hover and focus behaviors  
- Click/tap interactions and feedback
- Loading states and error handling
- Animation specifications (duration, easing, triggers)

**Responsive Behavior:**
- Mobile (320px - 899px): [describe mobile adaptations]
- Desktop (900px+): [describe desktop layout]
- Tablet considerations: [if specific tablet behavior needed]
- High-resolution display support

**Content Model:**
[Define the content structure and examples]
```

## Template 3: Functional Specification-Based Block Generation

```
Create an AEM EDS block with the following functional requirements:

**Block Name:** [specify-block-name]
**Primary Purpose:** [describe main function]

**Functional Requirements:**
1. [Primary function/feature]
2. [Secondary function/feature] 
3. [Additional requirements]

**User Interface Requirements:**
- Layout: [grid/flexbox/specific layout needs]
- Visual hierarchy: [heading structure, content organization]
- Interactive elements: [buttons, forms, navigation]
- Visual feedback: [hover states, loading indicators, error states]

**Content Requirements:**
- Required content: [mandatory fields/content]
- Optional content: [optional fields/content]
- Content constraints: [character limits, image specs, etc.]
- Dynamic content: [if content changes based on data]

**Behavioral Requirements:**
- Default state: [how it appears initially]
- User interactions: [click, hover, keyboard navigation]
- Responsive behavior: [mobile vs desktop differences]
- Error handling: [graceful degradation, error messages]
- Loading states: [progressive loading, skeleton screens]

**Technical Constraints:**
- Performance requirements: [loading time, bundle size]
- Browser support: [specific browser requirements]
- Accessibility level: [WCAG compliance level]
- SEO considerations: [structured data, semantic markup]

**Integration Requirements:**
- AEM authoring: [how authors will configure this]
- Content sources: [static content, APIs, etc.]
- Dependencies: [other blocks or systems it integrates with]

Generate: {block-name}.js, {block-name}.css, and {block-name}-authoring-guide.md
```

## Template 4: Style Extraction from Design

```
Extract and implement the visual design system from the attached image/design for an AEM EDS block.

**Block Name:** [specify-block-name]

**Style Analysis Required:**
1. **Typography Scale:**
   - Extract all font sizes, weights, and line heights
   - Map to existing CSS custom properties or create new ones
   - Identify font hierarchy and usage patterns

2. **Color Palette:**
   - Extract all colors used in the design
   - Map to existing CSS custom properties where possible
   - Identify color usage patterns (primary, secondary, accent)
   - Extract any gradients or color variations

3. **Spacing System:**  
   - Measure and extract all spacing values
   - Create consistent spacing scale
   - Identify margin, padding, and gap patterns
   - Document responsive spacing adjustments

4. **Layout Patterns:**
   - Identify grid systems and column structures
   - Extract alignment and distribution patterns
   - Document responsive layout changes
   - Identify container and content width patterns

5. **Visual Properties:**
   - Border radius values and patterns
   - Shadow specifications (box-shadow values)
   - Border styles and weights  
   - Background patterns or textures
   - Icon styles and sizing

6. **Interactive States:**
   - Default/rest state styling
   - Hover state changes
   - Focus state styling (for accessibility)
   - Active/pressed state styling
   - Disabled state styling (if applicable)

**Mobile Responsive Assumptions:**
[If mobile design not provided, create responsive adaptations using these principles:]
- Reduce font sizes using existing mobile breakpoint scales
- Adjust spacing for touch targets (minimum 44px)
- Stack horizontal layouts vertically when needed
- Ensure content remains readable at mobile viewport widths
- Maintain visual hierarchy while adapting for smaller screens

**Implementation Requirements:**
- Use existing CSS custom properties where possible
- Create new custom properties for design-specific values
- Ensure consistency with existing EDS design system
- Maintain semantic HTML structure
- Follow established BEM-like naming conventions

Generate: {block-name}.js, {block-name}.css, and {block-name}-authoring-guide.md
```

## Template 5: Component Behavior Specification

```
Define and implement specific interactive behaviors for an AEM EDS block.

**Block Name:** [specify-block-name]
**Primary Interaction Model:** [click/hover/scroll/form/etc.]

**Interaction Specifications:**

1. **Default Behavior:** 
   [If no specific behavior provided, assume these standards:]
   - Buttons: Click activation, keyboard support (Enter/Space), focus indicators
   - Links: Standard navigation with proper focus management  
   - Forms: Real-time validation, clear error messaging, loading states
   - Media: Progressive loading, error states, accessibility controls
   - Collections: Keyboard navigation, proper ARIA labeling

2. **Custom Behaviors:**
   [Specify any non-standard behaviors needed:]
   - Trigger events: [click/hover/scroll/time-based]
   - Animation specifications: [duration, easing, properties]
   - State management: [what states exist, how they change]
   - Data interactions: [API calls, form submissions, etc.]

3. **Feedback Mechanisms:**
   - Visual feedback: [hover effects, state changes, loading indicators]
   - Audio feedback: [if applicable]
   - Haptic feedback: [mobile considerations]
   - Error feedback: [validation messages, error states]

4. **Accessibility Behaviors:**
   - Keyboard navigation patterns
   - Screen reader announcements  
   - Focus management
   - ARIA state updates

5. **Performance Behaviors:**
   - Lazy loading triggers
   - Progressive enhancement stages
   - Debouncing/throttling for performance
   - Resource management

**Edge Cases & Error Handling:**
- Network connectivity issues
- Content loading failures
- User input validation errors
- Browser capability limitations
- Mobile vs desktop behavior differences

**Integration Behaviors:**
- How this block interacts with other page elements
- Event communication with other blocks
- Global state considerations
- URL/routing implications

Generate: {block-name}.js, {block-name}.css, and {block-name}-authoring-guide.md
```

## Usage Guidelines

1. **Choose the appropriate template** based on your input type:
   - Use Template 1 for static design images
   - Use Template 2 for Figma designs with specifications
   - Use Template 3 for functional requirements
   - Use Template 4 when focusing on visual design extraction
   - Use Template 5 for complex behavioral requirements

2. **Combine templates** when needed - you can use sections from multiple templates for comprehensive specifications.

3. **Be specific** - the more detailed your input, the better the generated block will match your requirements.

4. **Include examples** - provide sample content, similar components, or reference implementations when possible.

5. **Specify constraints** - mention any technical limitations, browser requirements, or performance constraints upfront.

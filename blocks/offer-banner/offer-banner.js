import { decorateIcons } from '../../scripts/aem.js';

/**
 * loads and decorates the offer-banner block
 * @param {Element} block The offer-banner block element
 */
export default function decorate(block) {
  // Ensure the block element itself has the block-level class so CSS (and icon styles)
  // apply to the full-width container and icons.
  block.classList.add('offer-banner');

  const container = document.createElement('div');
  container.className = 'offer-banner-container';

  const rows = [...block.children];
  
  // Expected content structure:
  // Row 1: Badge text (Limited Time Offer)
  // Row 2: Main heading
  // Row 3: Subheading/description
  // Row 4: Features list (pipe-separated)
  // Row 5: CTA button text and link
  // Row 6: Bottom text

  if (rows[0]) {
    const badge = document.createElement('div');
    badge.className = 'offer-banner-badge';
    const badgeIcon = document.createElement('span');
    badgeIcon.className = 'icon icon-gift';
    badgeIcon.setAttribute('aria-hidden', 'true');
    badge.append(badgeIcon, document.createTextNode(rows[0].textContent.trim()));
    container.append(badge);
  }

  if (rows[1]) {
    const heading = document.createElement('h1');
    heading.className = 'offer-banner-heading';
    heading.textContent = rows[1].textContent.trim();
    container.append(heading);
  }

  if (rows[2]) {
    const description = document.createElement('p');
    description.className = 'offer-banner-description';
    description.textContent = rows[2].textContent.trim();
    container.append(description);
  }

  if (rows[3]) {
    const featuresContainer = document.createElement('div');
    featuresContainer.className = 'offer-banner-features';
    
    const featuresText = rows[3].textContent.trim();
    const features = featuresText.split('•').map(f => f.trim()).filter(f => f);
    
    features.forEach(feature => {
      const featureItem = document.createElement('div');
      featureItem.className = 'offer-banner-feature';
      
      const checkIcon = document.createElement('span');
      checkIcon.className = 'icon icon-checkmark';
      checkIcon.setAttribute('aria-hidden', 'true');
      
      const featureText = document.createElement('span');
      featureText.textContent = feature;
      
      featureItem.append(checkIcon, featureText);
      featuresContainer.append(featureItem);
    });
    
    container.append(featuresContainer);
  }

  if (rows[4]) {
    const ctaContainer = document.createElement('div');
    ctaContainer.className = 'offer-banner-cta';
    
    const link = rows[4].querySelector('a');
    const ctaButton = document.createElement('a');
    ctaButton.className = 'offer-banner-button';
    ctaButton.href = link?.href || '#';
    ctaButton.textContent = link?.textContent.trim() || rows[4].textContent.trim();
    ctaButton.setAttribute('aria-label', 'Start your free 14-day trial');
    
    // Add rocket icon to button
    const rocketIcon = document.createElement('span');
    rocketIcon.className = 'icon icon-rocket';
    rocketIcon.setAttribute('aria-hidden', 'true');
    
    ctaButton.prepend(rocketIcon);
    ctaContainer.append(ctaButton);
    container.append(ctaContainer);
  }

  if (rows[5]) {
    const bottomText = document.createElement('p');
    bottomText.className = 'offer-banner-bottom-text';
    bottomText.textContent = rows[5].textContent.trim();
    container.append(bottomText);
  }

  // Clear block and append new content
  block.textContent = '';
  block.append(container);

  // Decorate icons after the container is in the DOM so the icon system can
  // correctly replace icon placeholders with SVGs.
  decorateIcons(block);
}

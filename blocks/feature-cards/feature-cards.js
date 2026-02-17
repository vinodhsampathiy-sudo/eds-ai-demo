import { decorateIcons } from '../../scripts/aem.js';

/**
 * Loads and decorates the feature-cards block
 * @param {Element} block The feature-cards block element
 */
export default function decorate(block) {
  // Extract section heading and subheading if present
  const headingRow = block.querySelector(':scope > div:first-child');
  let sectionHeading = null;
  let sectionSubheading = null;

  if (headingRow && headingRow.children.length === 1) {
    const headingContent = headingRow.textContent.trim();
    if (headingContent && !headingContent.includes('|')) {
      sectionHeading = headingContent;
      headingRow.remove();

      // Check for subheading in second row
      const subheadingRow = block.querySelector(':scope > div:first-child');
      if (subheadingRow && subheadingRow.children.length === 1) {
        const subContent = subheadingRow.textContent.trim();
        if (subContent && !subContent.includes('|')) {
          sectionSubheading = subContent;
          subheadingRow.remove();
        }
      }
    }
  }

  // Create container
  const container = document.createElement('div');
  container.className = 'feature-cards-container';

  // Add section header if present
  if (sectionHeading) {
    const header = document.createElement('div');
    header.className = 'feature-cards-header';

    const h2 = document.createElement('h2');
    h2.className = 'feature-cards-heading';
    h2.textContent = sectionHeading;
    header.append(h2);

    if (sectionSubheading) {
      const subheading = document.createElement('p');
      subheading.className = 'feature-cards-subheading';
      subheading.textContent = sectionSubheading;
      header.append(subheading);
    }

    container.append(header);
  }

  // Create cards grid
  const grid = document.createElement('div');
  grid.className = 'feature-cards-grid';

  // Process each card row
  [...block.children].forEach((row) => {
    const card = document.createElement('div');
    card.className = 'feature-cards-card';

    const cells = [...row.children];

    // Column 1: Icon name
    const iconCell = cells[0];
    if (iconCell && iconCell.textContent.trim()) {
      const iconContainer = document.createElement('div');
      iconContainer.className = 'feature-cards-icon';

      const iconSpan = document.createElement('span');
      iconSpan.className = `icon icon-${iconCell.textContent.trim()}`;
      iconSpan.setAttribute('aria-hidden', 'true');

      iconContainer.append(iconSpan);
      card.append(iconContainer);
    }

    // Column 2: Title
    const titleCell = cells[1];
    if (titleCell) {
      const title = document.createElement('h3');
      title.className = 'feature-cards-title';
      title.textContent = titleCell.textContent.trim();
      card.append(title);
    }

    // Column 3: Description
    const descCell = cells[2];
    if (descCell) {
      const desc = document.createElement('p');
      desc.className = 'feature-cards-description';
      desc.textContent = descCell.textContent.trim();
      card.append(desc);
    }

    // Column 4: Tags (comma or bullet separated)
    const tagsCell = cells[3];
    if (tagsCell && tagsCell.textContent.trim()) {
      const tagsContainer = document.createElement('div');
      tagsContainer.className = 'feature-cards-tags';

      const tagsList = tagsCell.textContent
        .split(/[,•]/)
        .map((t) => t.trim())
        .filter(Boolean);

      tagsList.forEach((tagText) => {
        const tag = document.createElement('span');
        tag.className = 'feature-cards-tag';
        tag.textContent = tagText;
        tagsContainer.append(tag);
      });

      card.append(tagsContainer);
    }

    // Column 5: CTA (optional, makes it featured)
    const ctaCell = cells[4];
    if (ctaCell && ctaCell.textContent.trim()) {
      card.classList.add('featured');

      // Add decorative quote icon for featured card
      const decorativeIcon = document.createElement('div');
      decorativeIcon.className = 'feature-cards-decorative';
      decorativeIcon.innerHTML = '<span class="icon icon-quote" aria-hidden="true"></span>';
      card.append(decorativeIcon);

      const ctaContainer = document.createElement('div');
      ctaContainer.className = 'feature-cards-cta';

      const link = ctaCell.querySelector('a');
      if (link) {
        const ctaButton = document.createElement('a');
        ctaButton.className = 'feature-cards-button';
        ctaButton.href = link.href;
        ctaButton.textContent = link.textContent.trim();
        ctaButton.setAttribute('aria-label', `${link.textContent.trim()} - ${titleCell?.textContent.trim() || 'Learn more'}`);

        // Add arrow icon to button
        const arrowIcon = document.createElement('span');
        arrowIcon.className = 'icon icon-arrow-right';
        arrowIcon.setAttribute('aria-hidden', 'true');
        ctaButton.append(arrowIcon);

        ctaContainer.append(ctaButton);
      } else {
        const ctaButton = document.createElement('button');
        ctaButton.className = 'feature-cards-button';
        ctaButton.textContent = ctaCell.textContent.trim();
        ctaButton.type = 'button';

        const arrowIcon = document.createElement('span');
        arrowIcon.className = 'icon icon-arrow-right';
        arrowIcon.setAttribute('aria-hidden', 'true');
        ctaButton.append(arrowIcon);

        ctaContainer.append(ctaButton);
      }

      card.append(ctaContainer);
    }

    // Make non-featured cards with links clickable
    const cardLink = row.querySelector('a');
    if (cardLink && !card.classList.contains('featured')) {
      card.style.cursor = 'pointer';
      card.setAttribute('role', 'link');
      card.setAttribute('tabindex', '0');
      card.addEventListener('click', () => {
        window.location.href = cardLink.href;
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.location.href = cardLink.href;
        }
      });
    }

    grid.append(card);
  });

  container.append(grid);

  // Clear block and append new content
  block.textContent = '';
  block.append(container);

  // Decorate icons
  decorateIcons(block);
}

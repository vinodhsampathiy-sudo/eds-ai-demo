import { decorateIcons, createOptimizedPicture } from '../../scripts/aem.js';

/**
 * Loads and decorates the feature-carousel block
 * @param {Element} block The feature-carousel block element
 */
export default function decorate(block) {
  // Create slides from block rows
  const slides = [...block.children].map((row) => {
    const slide = document.createElement('div');
    slide.className = 'feature-carousel-slide';

    // Create content column (left side)
    const contentCol = document.createElement('div');
    contentCol.className = 'feature-carousel-content';

    // Badge icon (optional)
    const badgeCell = row.children[0];
    if (badgeCell && badgeCell.textContent.trim()) {
      const badge = document.createElement('div');
      badge.className = 'feature-carousel-badge';
      const badgeIcon = document.createElement('span');
      badgeIcon.className = 'icon icon-bolt';
      badgeIcon.setAttribute('aria-hidden', 'true');
      badge.append(badgeIcon);
      contentCol.append(badge);
    }

    // Title
    const titleCell = row.children[1];
    if (titleCell) {
      const title = document.createElement('h2');
      title.className = 'feature-carousel-title';
      title.textContent = titleCell.textContent.trim();
      contentCol.append(title);
    }

    // Description
    const descCell = row.children[2];
    if (descCell) {
      const desc = document.createElement('p');
      desc.className = 'feature-carousel-desc';
      desc.textContent = descCell.textContent.trim();
      contentCol.append(desc);
    }

    // Feature bullets (0–5)
    const bulletsCell = row.children[3];
    if (bulletsCell && bulletsCell.textContent.trim()) {
      const ul = document.createElement('ul');
      ul.className = 'feature-carousel-bullets';
      bulletsCell.textContent.split('•').map((b) => b.trim()).filter(Boolean).forEach((b) => {
        const li = document.createElement('li');
        const check = document.createElement('span');
        check.className = 'icon icon-checkmark';
        check.setAttribute('aria-hidden', 'true');
        li.append(check, document.createTextNode(` ${b}`));
        ul.append(li);
      });
      contentCol.append(ul);
    }

    slide.append(contentCol);

    // Visual panel (image/illustration) - right side
    const visualCell = row.children[4];
    if (visualCell && visualCell.querySelector('img')) {
      const panel = document.createElement('div');
      panel.className = 'feature-carousel-visual';
      const img = visualCell.querySelector('img');
      const pic = createOptimizedPicture(img.src, img.alt, false, [{ width: '600' }]);
      panel.append(pic);
      slide.append(panel);
    }

    return slide;
  });

  // Carousel structure
  const track = document.createElement('div');
  track.className = 'feature-carousel-track';
  slides.forEach((slide) => track.append(slide));

  // Controls
  const prevBtn = document.createElement('button');
  prevBtn.className = 'feature-carousel-arrow feature-carousel-arrow-prev';
  prevBtn.setAttribute('aria-label', 'Previous slide');
  prevBtn.innerHTML = '<span class="icon icon-arrow-left"></span>';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'feature-carousel-arrow feature-carousel-arrow-next';
  nextBtn.setAttribute('aria-label', 'Next slide');
  nextBtn.innerHTML = '<span class="icon icon-arrow-right"></span>';

  // Pagination
  const dots = document.createElement('div');
  dots.className = 'feature-carousel-dots';

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'feature-carousel-dot';
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dots.append(dot);
  });

  // Compose carousel
  const container = document.createElement('div');
  container.className = 'feature-carousel-container';
  
  const trackWrapper = document.createElement('div');
  trackWrapper.className = 'feature-carousel-track-wrapper';
  trackWrapper.append(track);
  
  container.append(prevBtn, trackWrapper, nextBtn);
  
  block.textContent = '';
  block.append(container, dots);

  // State
  let current = 0;
  const total = slides.length;
  const update = (to) => {
    current = (to + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    [...dots.children].forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
      dot.setAttribute('aria-current', i === current ? 'true' : 'false');
    });
    // Accessibility: focus visible on active slide
    slides.forEach((slide, i) => {
      slide.setAttribute('tabindex', i === current ? '0' : '-1');
      slide.setAttribute('aria-hidden', i !== current ? 'true' : 'false');
    });
  };

  // Event handlers
  prevBtn.onclick = () => update(current - 1);
  nextBtn.onclick = () => update(current + 1);
  [...dots.children].forEach((dot, i) => {
    dot.onclick = () => update(i);
  });

  // Keyboard navigation
  block.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
  });

  // Touch/swipe support
  let startX = 0;
  track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    if (dx > 50) prevBtn.click();
    if (dx < -50) nextBtn.click();
  });

  // Initial state
  update(0);

  // Animate slide transitions
  track.style.transition = 'transform 0.35s cubic-bezier(.4,0,.2,1)';

  // Decorate icons
  decorateIcons(block);
}

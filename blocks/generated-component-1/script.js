import { createOptimizedPicture } from '../../scripts/aem.js';

export default async function decorate(block) {
  const wrapper = document.createElement('div');
  wrapper.className = 'hero-wrapper';

  [...block.children].forEach((row) => {
    const columns = [...row.children];
    const [imageCol, contentCol] = columns;

    const image = imageCol.querySelector('picture') || imageCol.querySelector('img');
    const imageSrc = image ? (image.tagName === 'PICTURE' ? image.querySelector('img').src : image.src) : '';

    if (imageSrc) {
      const bgImage = createOptimizedPicture(imageSrc, '', false, [{ width: 'auto' }]);
      wrapper.style.backgroundImage = `url(${bgImage.src})`;
    }

    const title = contentCol.querySelector('h1') || document.createElement('h1');
    const description = contentCol.querySelector('p') || document.createElement('p');
    const cta = contentCol.querySelector('a') || document.createElement('a');

    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'hero-content';
    contentWrapper.append(title, description, cta);

    wrapper.append(contentWrapper);
  });

  block.textContent = '';
  block.append(wrapper);
}
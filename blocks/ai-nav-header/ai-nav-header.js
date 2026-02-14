export default function decorate(block) {
  // Extract content from the block's children (table rows)
  const rows = [...block.children];
  if (!rows.length) {
    return;
  }

  const [
    logoUrl,
    brandText,
    navLink1,
    navLink2,
    navLink3,
    navLink4,
    signInText,
    ctaButtonText,
  ] = rows[0]?.querySelectorAll('div')?.map((div) => div.textContent.trim()) ?? [];

  // Clear the block's content
  block.innerHTML = '';

  // Create the header element
  const header = document.createElement('header');
  header.className = 'ai-nav-header';

  // Create the container div
  const container = document.createElement('div');
  container.className = 'container';

  // Create the left section
  const leftSection = document.createElement('div');
  leftSection.className = 'left-section';

  const logo = document.createElement('img');
  logo.src = logoUrl ?? '';
  logo.alt = 'AI Accelerator Logo';
  logo.className = 'logo';

  const brand = document.createElement('span');
  brand.className = 'brand-text';
  brand.textContent = brandText ?? '';

  leftSection.append(logo, brand);

  // Create the center section
  const centerSection = document.createElement('div');
  centerSection.className = 'center-section';

  const nav = document.createElement('nav');
  nav.setAttribute('role', 'navigation');

  const navList = document.createElement('ul');
  navList.className = 'nav-list';

  [navLink1, navLink2, navLink3, navLink4].forEach((linkText) => {
    const navItem = document.createElement('li');
    navItem.className = 'nav-item';

    const link = document.createElement('a');
    link.href = '#';
    link.textContent = linkText ?? '';

    navItem.append(link);
    navList.append(navItem);
  });

  nav.append(navList);
  centerSection.append(nav);

  // Create the right section
  const rightSection = document.createElement('div');
  rightSection.className = 'right-section';

  const signInLink = document.createElement('a');
  signInLink.href = '#';
  signInLink.className = 'sign-in';
  signInLink.textContent = signInText ?? '';

  const ctaButton = document.createElement('button');
  ctaButton.className = 'cta-button';
  ctaButton.textContent = ctaButtonText ?? '';

  rightSection.append(signInLink, ctaButton);

  // Append all sections to the container
  container.append(leftSection, centerSection, rightSection);
  header.append(container);

  // Append the header to the block
  block.append(header);
}

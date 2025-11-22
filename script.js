const galleryCards = document.querySelectorAll('.gallery-card');
const lightbox = document.querySelector('[data-lightbox]');
const lightboxImage = document.querySelector('[data-lightbox-image]');
const closeButtons = document.querySelectorAll('[data-close]');

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = src;
  lightboxImage.alt = alt || 'Gallery image';
  lightbox.hidden = false;
  lightboxImage.focus();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.hidden = true;
  lightboxImage.src = '';
}

galleryCards.forEach((card) => {
  card.addEventListener('click', () => {
    const src = card.getAttribute('data-image');
    const alt = card.querySelector('img')?.getAttribute('alt');
    openLightbox(src, alt);
  });
});

closeButtons.forEach((btn) => btn.addEventListener('click', closeLightbox));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeLightbox();
  }
});

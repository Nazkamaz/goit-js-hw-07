import { galleryItems } from './gallery-items.js';

const galleryDivEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map((element) => {
      return `<a class="gallery__item" href="${element.original}">
  <img class="gallery__image" 
  src="${element.preview}" 
  alt="${element.description}" />
</a>`
  })
  .join('');

  galleryDivEl.insertAdjacentHTML("afterbegin", galleryMarkup);

new SimpleLightbox('.gallery a', { captionType: 'attr', captionDelay: 250, captionsData:	'alt'});



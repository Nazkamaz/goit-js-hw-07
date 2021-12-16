import { galleryItems } from "./gallery-items.js";

const galleryDivEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map((element) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`;
  })
  .join("");

galleryDivEl.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryDivEl.addEventListener("click", onClickImage);

function onClickImage(event) {
  event.preventDefault();

  if (event.target.tagName !== "IMG") {
    return;
  }
  const largeImg = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImg}" width="800" height="600">
`);
  instance.show();

  function closeModal(event) {
    if (event.key === "Escape") {
      instance.close();
    }
    galleryDivEl.removeEventListener("keydown", closeModal);
  }

  galleryDivEl.addEventListener("keydown", closeModal);

}

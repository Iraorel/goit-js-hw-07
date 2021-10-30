import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const conteinerGallery = document.querySelector('.gallery');

function createGalleryItems(){
  const markup = conteinerGallery.map( item => 
  `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>`)
.join('');
conteinerGallery.insertAdjacentHTML('beforeend', markup);
};
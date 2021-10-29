import { galleryItems } from './gallery-items.js';
// Change code below this line

const conteiner = document.querySelector('.gallery');
//conteiner.addEventListener('click', onClick);
//function onClick(evt){
   // console.log(evt.target);
//}
const imgGallery = createGalleryItems(galleryItems);

conteiner.insertAdjacentHTML('beforeend', imgGallery);
function createGalleryItems (galleryItems){

    return galleryItems.map( item  =>{
        return 
        `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
})
.join('');

}
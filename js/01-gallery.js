import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const conteiner = document.querySelector('.gallery');
conteiner.addEventListener('click', onClick);
function onClick(evt){
    console.log(evt.target);
}
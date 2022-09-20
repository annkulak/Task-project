import { myCity } from '../city/city_content.js';

class PhotoSlide {
    constructor(city, cityEn, picture) {
        this.city = city;
        this.cityEn = cityEn;
        this.src = picture;
        this.alt = cityEn;
        this.loading = 'lazy';
        this.initPhotoSlide();
    };

    initPhotoSlide() {
        this.element = document.createElement('div');
        this.element.classList.add('picture-container');
        this.initPictureElement();
    };

    initPictureElement() {
        this.pictureElement = document.createElement('img');
        this.pictureElement.classList.add('picture');
        this.pictureElement.src = this.src;
        this.pictureElement.alt = this.alt;
        this.element.append(this.pictureElement);
    };
};

let slideContent = [];
let photoAlbum = [];

function createPhotoAlbum() {
    slideContent = myCity.picture.src;
    photoAlbum = [];
    for (let i = 0; i < slideContent.length; i++) {
        photoAlbum[i] = new PhotoSlide(myCity.nameRU, myCity.nameEn, slideContent[i]);
    };
};

function createPhotoSlide() {
    const sliderBlock = document.querySelector('.photo-slider-block');
    for (let i = 0; i < photoAlbum.length; i++) {
        sliderBlock.appendChild(photoAlbum[i].element);
        photoAlbum[0].element.classList.add('active');
    };
};

export { createPhotoAlbum, createPhotoSlide, photoAlbum };
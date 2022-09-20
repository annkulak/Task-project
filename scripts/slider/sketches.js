import { myCity } from '../city/city_content.js';

class Sketches {
    constructor(city, cityEn, picture) {
        this.city = city;
        this.cityEn = cityEn;
        this.src = picture;
        this.alt = cityEn;
        this.loading = 'lazy';
        this.initSketches();
    };

    initSketches() {
        this.element = document.createElement('div');
        this.element.classList.add('sketches-container');
        this.initSketchesElement();
    };

    initSketchesElement() {
        this.sketchesElement = document.createElement('img');
        this.sketchesElement.classList.add('sketches');
        this.sketchesElement.src = this.src;
        this.sketchesElement.alt = this.alt;
        this.element.append(this.sketchesElement);
    };
};

let sketchContent = [];
let sketchAlbum = [];

function createSketchAlbum() {
    sketchContent = myCity.picture.src;
    sketchAlbum = [];
    for (let i = 0; i < sketchContent.length; i++) {
        sketchAlbum[i] = new Sketches(myCity.nameRU, myCity.nameEn, sketchContent[i]);
    };
};

function createPhotoSketch() {
    const sketchesBlock = document.querySelector('.photo-sketches-container');
    for (let i = 0; i < sketchContent.length; i++) {
        sketchesBlock.appendChild(sketchAlbum[i].element);
        sketchAlbum[0].element.classList.add('active');
        sketchAlbum[i].element.id = `${i}`;
    };
};

export { createSketchAlbum, createPhotoSketch, sketchAlbum };
import { createModalWindow } from '../utilites/modal_window.js';
import { createPhotoSliderInterface } from './slider_interface.js';
import { createPhotoAlbum, createPhotoSlide } from './slides.js';
import { createSketchAlbum, createPhotoSketch } from './sketches.js';
import { photoSliderMove, sketchesActivity } from './slider_flipping.js';

function createPhotoSlider() {
    createModalWindow();
    createPhotoSliderInterface();
    createPhotoAlbum();
    createPhotoSlide();
    createSketchAlbum();
    createPhotoSketch();
    photoSliderMove();
    sketchesActivity();
};

export { createPhotoSlider };
import { photoAlbum } from './slides.js';

let memoryIndexPicture = 0;
let indexPicture = 0;

function photoSliderMove() {
    const sliderButton = document.querySelectorAll('.slider-button');

    sliderButton.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('button-back')) {
                slideBack();
            } else if (button.classList.contains('button-next')) {
                slideNext();
            } else {
                return;
            };
            buttonAnimation();
            photoAnimation();
        });
    });
};

function slideBack() {
    if (indexPicture > 0) {
        memoryIndexPicture = indexPicture;
        indexPicture = --indexPicture;
    };
};

function slideNext() {
    if (indexPicture < photoAlbum.length - 1) {
        memoryIndexPicture = indexPicture;
        indexPicture = ++indexPicture;
    };
};

function buttonAnimation() {
    const btnBack = document.querySelector('.button-back');
    const btnNext = document.querySelector('.button-next');

    if (indexPicture === 0) {
        btnBack.classList.add('invert');
        btnNext.classList.remove('invert');

    } else if (indexPicture === photoAlbum.length - 1) {
        btnNext.classList.add('invert');
        btnBack.classList.remove('invert');

    } else {
        btnBack.classList.remove('invert');
        btnNext.classList.remove('invert');
    };
};

function photoAnimation() {
    const slides = document.querySelectorAll('.picture-container');
    const sketches = document.querySelectorAll('.sketches-container');

    for (let i = 0; i < slides.length; i++) {
        if (memoryIndexPicture === indexPicture) {
            return
        } else if (indexPicture > memoryIndexPicture) {
            slides[memoryIndexPicture].classList.remove('active', 'next-animation', 'back-animation');
            slides[indexPicture].classList.add('active', 'next-animation');

            sketches[memoryIndexPicture].classList.remove('active');
            sketches[indexPicture].classList.add('active');
        } else {
            slides[memoryIndexPicture].classList.remove('active', 'next-animation', 'back-animation');
            slides[indexPicture].classList.add('active', 'back-animation');

            sketches[memoryIndexPicture].classList.remove('active');
            sketches[indexPicture].classList.add('active');
        };
    };
};

function sketchesActivity() {
    const sketches = document.querySelectorAll('.sketches-container');

    sketches.forEach(element => {
        element.addEventListener('click', () => {
            memoryIndexPicture = indexPicture;
            indexPicture = parseInt(element.id);
            buttonAnimation();
            photoAnimation();
        });
    });
};

function cleanSlideIndex() {
    memoryIndexPicture = 0;
    indexPicture = 0;
};

function removeModalWindow() {
    document.querySelector('.modal-window').remove();
    document.querySelector('.modal-window-blackout').remove();
};

export { photoSliderMove, sketchesActivity, removeModalWindow, cleanSlideIndex };
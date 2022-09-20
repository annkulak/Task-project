function createPhotoSliderWrapper() {
    const photoSliderWrapper = document.createElement('div');
    document.querySelector('.photo-slider-addition').appendChild(photoSliderWrapper);
    photoSliderWrapper.classList.add('photo-slider-wrapper');
};

function createSlidesContainer() {
    const photoSliderWrapper = document.querySelector('.photo-slider-wrapper');
    const sliderContainer = document.createElement('div');
    photoSliderWrapper.appendChild(sliderContainer);
    sliderContainer.classList.add('photo-slider-container');

    const sliderButtonBlockBack = document.createElement('div');
    sliderContainer.insertAdjacentElement('afterBegin', sliderButtonBlockBack);
    sliderButtonBlockBack.classList.add('slider-button-block');
    createButtonBack(sliderButtonBlockBack);

    const sliderPhotoBlock = document.createElement('div');
    sliderContainer.appendChild(sliderPhotoBlock);
    sliderPhotoBlock.classList.add('photo-slider-block');

    const sliderButtonBlockNext = document.createElement('div');
    sliderContainer.insertAdjacentElement('beforeEnd', sliderButtonBlockNext);
    sliderButtonBlockNext.classList.add('slider-button-block');
    createButtonNext(sliderButtonBlockNext);
};

function createButtonBack(sliderButtonBlockBack) {
    const sliderButton = document.createElement('button');
    sliderButtonBlockBack.append(sliderButton);
    sliderButton.classList.add('slider-button', 'button-back', 'invert');

    const iconSliderButton = document.createElement('img');
    sliderButton.append(iconSliderButton);
    iconSliderButton.classList.add('button-icon', 'arrow-left');
    iconSliderButton.src = './other/icons/angle-left-solid.svg';
};

function createButtonNext(sliderButtonBlockNext) {
    const sliderButton = document.createElement('button');
    sliderButtonBlockNext.append(sliderButton);
    sliderButton.classList.add('slider-button', 'button-next');

    const iconSliderButton = document.createElement('img');
    sliderButton.append(iconSliderButton);
    iconSliderButton.classList.add('button-icon', 'arrow-right');
    iconSliderButton.src = './other/icons/angle-right-solid.svg';
};

function createSketchesContainer() {
    const photoSliderWrapper = document.querySelector('.photo-slider-wrapper');
    const sketchesContainer = document.createElement('div');
    photoSliderWrapper.appendChild(sketchesContainer);
    sketchesContainer.classList.add('photo-sketches-container');
};

function createPhotoSliderInterface() {
    createPhotoSliderWrapper();
    createSlidesContainer();
    createSketchesContainer();
};

export { createPhotoSliderInterface };
import { pageCatalog } from '../interface/page_catalog.js';
import { removeContent, inactivePhotoCover } from '../utilites/flipping.js';
import { myCity } from './city_content.js';
import { addCityMap } from '../utilites/map_vidget.js';

let pageNumber = 3;
let pageIndex = pageNumber - 1;

function changeMenuDecoration() {
    const menuDecoration = document.querySelector('.navigation-button.choice-navigation-button');
    const choiceMenu = document.getElementById(pageCatalog[pageIndex].id);
    if (menuDecoration) {
        menuDecoration.classList.remove('choice-navigation-button');
    };
    choiceMenu.classList.add('choice-navigation-button');
};

function createInterfaceCitySubPage() {
    const subPage = document.createElement('div');
    document.querySelector('.page-container').append(subPage);
    subPage.classList.add('city-subpage', 'page-content-addition');

    const title = document.createElement('h1');
    subPage.insertAdjacentElement('afterBegin', title);
    title.classList.add('city-subpage-tittle');
    title.innerHTML = myCity.nameRU;

    const buttonBack = document.createElement('button');
    subPage.append(buttonBack);
    buttonBack.classList.add('sub-button-back');
    buttonBack.id = 'sub-button-city-back';
    buttonBack.innerHTML = 'к городам италии';

    const photoContainer = document.createElement('div');
    subPage.append(photoContainer);
    photoContainer.classList.add('city-subpage-photo-container');

    const buttonPS = document.createElement('button');
    subPage.append(buttonPS);
    buttonPS.classList.add('sub-button-back');
    buttonPS.id = 'PhotoSlider';
    buttonPS.innerHTML = 'Показать все';

    const description = document.createElement('div');
    subPage.append(description);
    description.classList.add('city-subpage-description');
    description.innerHTML = myCity.description;

    const map = document.createElement('div');
    subPage.append(map);
    map.classList.add('city-map-vidget');

    const buttonContainer = document.createElement('div');
    subPage.insertAdjacentElement('beforeEnd', buttonContainer);
    buttonContainer.classList.add('city-subpage-button');

    const button = document.createElement('button');
    buttonContainer.insertAdjacentElement('afterBegin', button);
    button.classList.add('button-dark');
    button.id = 'Посмотреть все города';
    button.innerHTML = 'Все города';
};

function createMapCitySubPage() {
    const map = document.createElement('div');
    document.querySelector('.city-map-vidget').append(map);
    map.id = 'city-map';

    addCityMap(myCity.latitude, myCity.longitude, 12);
};

function createCityPhotoBlock(numberOfPhotos) {
    for (let i = 0; i < numberOfPhotos; i++) {
        const photoContainer = document.querySelector('.city-subpage-photo-container');
        const photoBlock = document.createElement('div');
        photoContainer.append(photoBlock);
        photoBlock.classList.add('city-photo-block');

        const photo = document.createElement('img');
        photoBlock.append(photo);
        photo.classList.add('city-photo');
        photo.src = myCity.picture.src[i];
        photo.alt = myCity.nameEn;
    };
};

function createCitySubPage() {
    removeContent();
    inactivePhotoCover();
    changeMenuDecoration();
    createInterfaceCitySubPage();
    createMapCitySubPage();
    createCityPhotoBlock(5);
};

export { createCitySubPage };
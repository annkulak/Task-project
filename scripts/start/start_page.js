import { pageCatalog } from '../interface/page_catalog.js';
import { createVideoBar } from '../video/video_bar.js';
import { createMiniMap } from '../utilites/map_vidget.js';
import { getWeatherVidget } from '../utilites/weather_vidget.js';
import { createCityBar } from '../city/city_bar.js';
import { createExcursionBar } from '../excursion/excursion_bar.js';
import { createApartmentsBar } from '../apartments/apartments_bar.js';

let pageNumber = 1;
let pageIndex = pageNumber - 1;

function changePhotoCover() {
    const photoCover = document.querySelector('.photocover');
    photoCover.src = pageCatalog[pageIndex].src;
    photoCover.alt = pageCatalog[pageIndex].name;
};

function changeMenuDecoration() {
    const menuDecoration = document.querySelector('.navigation-button.choice-navigation-button');
    const choiceMenu = document.getElementById(`${pageCatalog[pageIndex].id}`);
    if (menuDecoration) {
        menuDecoration.classList.remove('choice-navigation-button');
    };
    choiceMenu.classList.add('choice-navigation-button');
};

function createContentContainer() {
    const contentContainer = document.createElement('div');
    document.querySelector('.page-container').insertAdjacentElement('afterBegin', contentContainer);
    contentContainer.classList.add('main-page', 'page-content-addition');
};

function createStartBarContainer() {
    const container = document.createElement('section');
    document.querySelector('.main-page').insertAdjacentElement('afterBegin', container);
    container.classList.add('country-bar', 'video-vidget-addition', 'location-vidget-addition');
};

function createLocationBarInterface() {
    const vidgetsContainer = document.createElement('div');
    document.querySelector('.location-vidget-addition').insertAdjacentElement('beforeEnd', vidgetsContainer);
    vidgetsContainer.classList.add('location-vidget-container');

    const weatherVidget = document.createElement('div');
    vidgetsContainer.insertAdjacentElement('afterBegin', weatherVidget);
    weatherVidget.classList.add('weather-vidget');

    const mapVidget = document.createElement('div');
    vidgetsContainer.append(mapVidget);
    mapVidget.classList.add('mini-map-vidget');
};

function createMiniMapContainer() {
    const map = document.createElement('div');
    document.querySelector('.mini-map-vidget').append(map);
    map.id = 'mini-map';
};

function createLocationBar() {
    createLocationBarInterface();
    getWeatherVidget();
    createMiniMapContainer();
    createMiniMap();
};

function createStartPage() {
    changePhotoCover();
    changeMenuDecoration();
    createContentContainer();
    createStartBarContainer();
    createVideoBar();
    createLocationBar();
    createCityBar();
    createExcursionBar();
    createApartmentsBar();
};

export { createStartPage };
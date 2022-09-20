import { pageCatalog } from '../interface/page_catalog.js';
import { addCityContent, flippingCityContent, moviRestart, changeCityContent } from './city_action.js';
import { addItalyMap, addRouteMap } from '../utilites/map_vidget.js';

let pageNumber = 3;
let pageIndex = pageNumber - 1;

function changePhotoCover() {
    const photoCover = document.querySelector('.photocover');
    photoCover.src = pageCatalog[pageIndex].src;
    photoCover.alt = pageCatalog[pageIndex].name;
};

function changeMenuDecoration() {
    const menuDecoration = document.querySelector('.navigation-button.choice-navigation-button');
    const choiceMenu = document.getElementById(pageCatalog[pageIndex].id);
    if (menuDecoration) {
        menuDecoration.classList.remove('choice-navigation-button');
    };
    choiceMenu.classList.add('choice-navigation-button');
};

function createContentContainer() {
    const contentContainer = document.createElement('div');
    document.querySelector('.page-container').append(contentContainer);
    contentContainer.classList.add('city-page', 'page-content-addition');
};

function createCityPageInterface() {
    changePhotoCover();
    changeMenuDecoration();
    createContentContainer();
};

function createTitlePage() {
    const titlePageContainer = document.createElement('div');
    document.querySelector('.page-content-addition').insertAdjacentElement('afterBegin', titlePageContainer);
    titlePageContainer.classList.add('page-tittle-container');

    const titlePage = document.createElement('h1');
    titlePageContainer.insertAdjacentElement('afterBegin', titlePage);
    titlePage.classList.add('title-page');
    titlePage.innerHTML = pageCatalog[pageIndex].menu;
};

function createCityContainer() {
    const cityBar = document.createElement('div');
    document.querySelector('.page-content-addition').append(cityBar);
    cityBar.classList.add('city-content', 'city-addition');
};

function createButtonBlock() {
    const buttonContainer = document.createElement('div');
    document.querySelector('.page-content-addition').append(buttonContainer);
    buttonContainer.classList.add('button-page-container');

    const buttonPageBack = document.createElement('button');
    buttonContainer.insertAdjacentElement('afterBegin', buttonPageBack);
    buttonPageBack.classList.add('button-dark', 'button-back', 'invert');
    buttonPageBack.innerHTML = 'Вернуться назад';

    const buttonPageNext = document.createElement('button');
    buttonContainer.insertAdjacentElement('beforeEnd', buttonPageNext);
    buttonPageNext.classList.add('button-dark', 'button-next');
    buttonPageNext.innerHTML = 'Показать ещё';
};

function createCityPageContent() {
    createTitlePage();
    createCityContainer();
    createButtonBlock();
};

function createMapsContainer() {
    const mapContainer = document.createElement('div');
    document.querySelector('.page-content-addition').insertAdjacentElement('beforeEnd', mapContainer);
    mapContainer.classList.add('country-map-vidgets');
};

function createItalyMap() {
    const italyMap = document.createElement('div');
    document.querySelector('.country-map-vidgets').append(italyMap);
    italyMap.id = 'italy-map';
};

function createCityPageRouteMap() {
    const map = document.createElement('div');
    document.querySelector('.country-map-vidgets').append(map);
    map.id = 'route-map';

    let latitude = 41.902705;
    let longitude = 12.496176;
    let myZoom = 5;

    addRouteMap(latitude, longitude, myZoom);
    removeRouteMapButtonBlock();
};

function createRouteMapButtonBlock() {
    const buttonContainer = document.createElement('div');
    document.querySelector('.page-content-addition').append(buttonContainer);
    buttonContainer.classList.add('button-map-page-container');

    const buttonRouteMap = document.createElement('button');
    buttonContainer.insertAdjacentElement('afterBegin', buttonRouteMap);
    buttonRouteMap.classList.add('button-dark');
    buttonRouteMap.innerHTML = 'Показать маршрут';
    buttonRouteMap.id = 'Показать маршрут';
};

function removeRouteMapButtonBlock() {
    document.querySelector('.button-map-page-container').remove();
};

function createMapVidget() {
    createMapsContainer();
    createItalyMap();
    addItalyMap();
    createRouteMapButtonBlock();
};

function createCityPage() {
    createCityPageInterface();
    createCityPageContent();
    addCityContent();
    flippingCityContent();
    createMapVidget();
};

export { createCityPage, createCityPageRouteMap, moviRestart, changeCityContent };
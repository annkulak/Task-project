import { cityContent } from './city_content.js';

function createBarContainer() {
    const barContainer = document.createElement('section');
    document.querySelector('.main-page.page-content-addition').append(barContainer);
    barContainer.classList.add('city-bar');
};

function createBarTitle() {
    const titleContainer = document.createElement('div');
    document.querySelector('.city-bar').insertAdjacentElement('afterBegin', titleContainer);
    titleContainer.classList.add('bar-title-container');

    const titleText = document.createElement('h1');
    titleContainer.insertAdjacentElement('afterBegin', titleText);
    titleText.classList.add('bar-title-text');
    titleText.innerHTML = 'Куда пойти';
};

function createBarContent() {
    const contentContainer = document.createElement('div');
    document.querySelector('.city-bar').append(contentContainer);
    contentContainer.classList.add('city-content', 'city-addition');
    addCityBarContent();
};

function addCityBarContent() {
    let cityMoveStart = 0;
    let cityMove = 10;
    for (let i = cityMoveStart; i < cityMoveStart + cityMove; i++) {
        const cityAddition = document.querySelector('.city-content.city-addition');
        cityAddition.append(cityContent[i].element);
    };
};

function createBarButton() {
    const buttonBlock = document.createElement('div');
    document.querySelector('.city-bar').insertAdjacentElement('beforeEnd', buttonBlock);
    buttonBlock.classList.add('bar-button-container');

    const button = document.createElement('button');
    buttonBlock.append(button);
    button.classList.add('button-dark');
    button.id = 'Посмотреть все города';
    button.innerHTML = 'Посмотреть все города';
};

function createCityBar() {
    createBarContainer();
    createBarTitle();
    createBarContent();
    createBarButton();
};

export { createCityBar };
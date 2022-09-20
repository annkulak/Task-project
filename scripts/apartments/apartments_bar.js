import { apartmentsContent } from './apartments_content.js';

function createBarContainer() {
    const barContainer = document.createElement('section');
    document.querySelector('.main-page.page-content-addition').append(barContainer);
    barContainer.classList.add('apartments-bar');
};

function createBarTitle() {
    const titleContainer = document.createElement('div');
    document.querySelector('.apartments-bar').insertAdjacentElement('afterBegin', titleContainer);
    titleContainer.classList.add('bar-title-container');

    const titleText = document.createElement('h1');
    titleContainer.insertAdjacentElement('afterBegin', titleText);
    titleText.classList.add('bar-title-text');
    titleText.innerHTML = 'Рекомендуем апартаменты';
};

function createBarContent() {
    const contentContainer = document.createElement('div');
    document.querySelector('.apartments-bar').append(contentContainer);
    contentContainer.classList.add('apartments-content', 'apartments-addition');
    addApartmentsBarContent();
};

function addApartmentsBarContent() {
    let apartmentsMoveStart = 0;
    let apartmentsMove = 4;
    for (let i = apartmentsMoveStart; i < apartmentsMoveStart + apartmentsMove; i++) {
        const apartmentsAddition = document.querySelector('.apartments-content.apartments-addition');
        apartmentsAddition.append(apartmentsContent[i].element);
    };
};

function createBarButton() {
    const buttonBlock = document.createElement('div');
    document.querySelector('.apartments-bar').insertAdjacentElement('beforeEnd', buttonBlock);
    buttonBlock.classList.add('bar-button-container');

    const button = document.createElement('button');
    buttonBlock.append(button);
    button.classList.add('button-dark');
    button.id = 'Посмотреть все варианты';
    button.innerHTML = 'Посмотреть все варианты';
};

function createApartmentsBar() {
    createBarContainer();
    createBarTitle();
    createBarContent();
    createBarButton();
};

export { createApartmentsBar };
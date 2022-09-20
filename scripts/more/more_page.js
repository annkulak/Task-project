import { pageCatalog } from '../interface/page_catalog.js';

let pageNumber = 6;
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
    contentContainer.classList.add('more-page', 'page-content-addition');
};

function createMorePageInterface() {
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

function createMoreContainer() {
    const excursionBar = document.createElement('div');
    document.querySelector('.page-content-addition').append(excursionBar);
    excursionBar.classList.add('more-content', 'more-addition');
};

function createButtonBlock() {
    const buttonContainer = document.createElement('div');
    document.querySelector('.page-content-addition').insertAdjacentElement('beforeEnd', buttonContainer);
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

function createMorePageContent() {
    createTitlePage();
    createMoreContainer();
    createButtonBlock();
};

function createMorePage() {
    createMorePageInterface();
    createMorePageContent();
    addMoreContent();
    flippingMoreContent();
};

export { createMorePage };
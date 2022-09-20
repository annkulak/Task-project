import { pageCatalog } from '../interface/page_catalog.js';
import { addApartmentsContent, flippingApartmentsContent, moviApartmentsRestart, changeApartmentsContent } from './apartments_action.js';

let pageNumber = 5;
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
    contentContainer.classList.add('apartments-page', 'page-content-addition');
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

function createApartamentsContainer() {
    const apartamentsConatainer = document.createElement('div');
    document.querySelector('.page-content-addition').append(apartamentsConatainer);
    apartamentsConatainer.classList.add('apartments-content', 'apartments-addition');
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

function createApartmentsPageInterface() {
    changePhotoCover();
    changeMenuDecoration();
    createContentContainer();
    createTitlePage();
    createApartamentsContainer();
    createButtonBlock();
};

function createApartmentsPage() {
    createApartmentsPageInterface();
    addApartmentsContent();
    flippingApartmentsContent();
}

export { createApartmentsPage, moviApartmentsRestart, changeApartmentsContent };
import { pageCatalog } from '../interface/page_catalog.js';
import { getVideoContent, flippingVideoContent, moviRestart } from './video_content.js';

let pageNumber = 2;
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
    contentContainer.classList.add('video-page', 'page-content-addition');
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

function createVideoBar() {
    const videoBar = document.createElement('div');
    document.querySelector('.page-content-addition').append(videoBar);
    videoBar.classList.add('video-bar', 'video-addition');
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

function createVideoPageInterface() {
    changePhotoCover();
    changeMenuDecoration();
    createContentContainer();
    createTitlePage();
    createVideoBar();
    createButtonBlock();
};

function createVideoPage() {
    createVideoPageInterface();
    getVideoContent();
    flippingVideoContent();
};

export { createVideoPage, moviRestart };
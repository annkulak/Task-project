import { createHeaderTitle } from './header_title.js';
import { createMenu } from './header_menu.js';
import { createFooter } from './footer.js';

function createWrapper() {
    const wrapper = document.createElement('div');
    document.querySelector('body').insertAdjacentElement('afterBegin', wrapper);
    wrapper.classList.add('wrapper');
};

function createContainer() {
    const interfaceContainer = document.createElement('div');
    document.querySelector('.wrapper').insertAdjacentElement('afterBegin', interfaceContainer);
    interfaceContainer.classList.add('interface', 'dark');
};

function createPhotoCover() {
    const photoCoverBlock = document.createElement('div');
    document.querySelector('.header-container').append(photoCoverBlock);
    photoCoverBlock.classList.add('header-photocover-container');

    const photoCover = document.createElement('img');
    photoCoverBlock.append(photoCover);
    photoCover.classList.add('photocover');
};

function createHeader() {
    const headerContainer = document.createElement('div');
    document.querySelector('.interface').insertAdjacentElement('afterBegin', headerContainer);
    headerContainer.classList.add('header-container');

    createHeaderTitle();
    createPhotoCover();
    createMenu();
};

function createPage() {
    const pageContainer = document.createElement('div');
    document.querySelector('.interface').append(pageContainer);
    pageContainer.classList.add('page-container');
};

function createInterface() {
    createWrapper();
    createContainer();
    createHeader();
    createPage();
    createFooter();
};

export { createInterface };
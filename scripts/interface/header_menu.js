import { pageCatalog } from './page_catalog.js';

function createMenuContainer() {
    const navigationBlock = document.createElement('nav');
    document.querySelector('.header-container').insertAdjacentElement('beforeEnd', navigationBlock);
    navigationBlock.classList.add('header-navigation-container');
};

function createMenuList() {
    const navigationList = document.createElement('ol');
    document.querySelector('.header-navigation-container').insertAdjacentElement('afterBegin', navigationList);
    navigationList.classList.add('navigation-list');
};

function createMenuItems() {
    for (let i = 0; i < pageCatalog.length; i++) {
        const navigationItem = document.createElement('li');
        document.querySelector('.navigation-list').append(navigationItem);
        navigationItem.classList.add('navigation-item');

        const navigationButton = document.createElement('button');
        navigationItem.append(navigationButton);
        navigationButton.id = pageCatalog[i].id;
        navigationButton.classList.add('navigation-button');
        navigationButton.innerHTML = pageCatalog[i].menu;
    };
};

function createMenu() {
    createMenuContainer();
    createMenuList();
    createMenuItems();
};

export { createMenu };
import { usefulLinksCatalog } from './useful_links_catalog.js';

function createFooterContainer() {
    const footerContainer = document.createElement('div');
    document.querySelector('.interface').insertAdjacentElement('beforeEnd', footerContainer);
    footerContainer.classList.add('footer-container');
};

function createUsefulLinksList() {
    const usefulLinksList = document.createElement('ul');
    document.querySelector('.footer-container').insertAdjacentElement('afterBegin', usefulLinksList);
    usefulLinksList.classList.add('useful-links-list');

    for (let i = 0; i < usefulLinksCatalog.length; i++) {
        const usefulLinkItem = document.createElement('li');
        usefulLinksList.append(usefulLinkItem);
        usefulLinkItem.classList.add('useful-links-item');

        const usefulLink = document.createElement('a');
        usefulLinkItem.append(usefulLink);
        usefulLink.href = usefulLinksCatalog[i].link;
        usefulLink.setAttribute('target', '_blank');
        usefulLink.classList.add('useful-link');

        const iconUserfulLink = document.createElement('img');
        usefulLinkItem.append(iconUserfulLink);
        iconUserfulLink.src = usefulLinksCatalog[i].src;
        iconUserfulLink.loading = 'lazy';
        iconUserfulLink.alt = usefulLinksCatalog[i].name;
        iconUserfulLink.classList.add('useful-link-icon');

        if (usefulLinksCatalog[i].text !== '') {
            const textUserfulLink = document.createElement('span');
            usefulLinkItem.append(textUserfulLink);
            textUserfulLink.innerHTML = usefulLinksCatalog[i].text;
            textUserfulLink.style.color = usefulLinksCatalog[i].color;
            textUserfulLink.classList.add('text-useful-link');
        };
    };
};

function createFooterBar() {
    const footerBar = document.createElement('footer');
    document.querySelector('.footer-container').insertAdjacentElement('beforeEnd', footerBar);
    footerBar.classList.add('footer-bar');
    footerBar.innerHTML = '© 2022, Hanna Kulak. Gomel, Belarus';
};

function createFooter() {
    createFooterContainer();
    createUsefulLinksList();
    createFooterBar();
};

export { createFooter };
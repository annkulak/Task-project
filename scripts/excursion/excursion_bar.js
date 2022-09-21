import { motivationCatalog } from './motivation_catalog.js';

function createContainer() {
    const contentContainer = document.createElement('section');
    document.querySelector('.main-page').append(contentContainer);
    contentContainer.classList.add('excursion-bar');
};

function createTitle() {
    const titleContainer = document.createElement('div');
    document.querySelector('.excursion-bar').insertAdjacentElement('afterBegin', titleContainer);
    titleContainer.classList.add('bar-title-container');

    const titleText = document.createElement('h1');
    titleContainer.insertAdjacentElement('afterBegin', titleText);
    titleText.classList.add('bar-title-text');
    titleText.innerHTML = 'Что делать';
};

function createPicture() {
    const pictureContainer = document.createElement('div');
    document.querySelector('.excursion-bar').append(pictureContainer);
    pictureContainer.classList.add('bar-picture-container');

    const pictureTitle = document.createElement('div');
    pictureContainer.insertAdjacentElement('afterBegin', pictureTitle);
    pictureTitle.classList.add('picture-title-text');
    pictureTitle.innerHTML = 'Италия - страна-музей на Средиземном море';

    const pictureSubTitle = document.createElement('div');
    pictureContainer.append(pictureSubTitle);
    pictureSubTitle.classList.add('picture-subtitle-text');
    pictureSubTitle.innerHTML = 'Больше путешествий, больше открытий';

    const buttonBlock = document.createElement('div');
    pictureContainer.append(buttonBlock);
    buttonBlock.classList.add('bar-button-block');

    const button = document.createElement('button');
    buttonBlock.append(button);
    button.classList.add('button-light');
    button.id = 'Найти экскурсию';
    button.innerHTML = button.id;
};

const motivationBlock = [];

function createMotivationQuotes() {
    for (let i = 0; i < motivationCatalog.length; i++) {
        const motivationBlock = document.createElement('div');
        document.querySelector('.bar-motivation-container').append(motivationBlock);
        motivationBlock.classList.add('motivation-block');

        const motivationQuote = document.createElement('span');
        motivationBlock.append(motivationQuote);
        motivationQuote.classList.add('motivation-quote');
        motivationQuote.innerHTML = motivationCatalog[i].quote;

        const motivationLineBlock = document.createElement('div');
        motivationBlock.append(motivationLineBlock);
        motivationLineBlock.classList.add('motivation-line-block');

        const motivationAdvantage = document.createElement('div');
        motivationBlock.append(motivationAdvantage);
        motivationAdvantage.classList.add('motivation-advantage');
        motivationAdvantage.innerHTML = motivationCatalog[i].advantage;
    };
    return motivationBlock;
};

function createMotivation() {
    const motivationContainer = document.createElement('div');
    document.querySelector('.excursion-bar').insertAdjacentElement('beforeEnd', motivationContainer);
    motivationContainer.classList.add('bar-motivation-container');
    createMotivationQuotes();
};

function createExcursionBar() {
    createContainer();
    createTitle();
    createPicture();
    createMotivation();
};

export { createExcursionBar };
function createHeaderTitleContainer() {
    const titleContainer = document.createElement('div');
    document.querySelector('.header-container').insertAdjacentElement('afterBegin', titleContainer);
    titleContainer.classList.add('header-title-container');
};

function createLogoBlock() {
    const logoContainer = document.createElement('div');
    document.querySelector('.header-title-container').insertAdjacentElement('afterBegin', logoContainer);
    logoContainer.classList.add('logo-container');

    const logoText = document.createElement('h1');
    logoContainer.insertAdjacentElement('afterBegin', logoText);
    logoText.classList.add('logo-text');
    logoText.innerHTML = 'Италия для всех';

    const logoImage = document.createElement('div');
    logoContainer.insertAdjacentElement('beforeEnd', logoImage);
    logoImage.classList.add('logo-image');

    const greenBlock = document.createElement('div');
    logoImage.insertAdjacentElement('afterBegin', greenBlock);
    greenBlock.classList.add('green-block');

    const whiteBlock = document.createElement('div');
    logoImage.append(whiteBlock);
    whiteBlock.classList.add('white-block');

    const redBlock = document.createElement('div');
    logoImage.insertAdjacentElement('beforeEnd', redBlock);
    redBlock.classList.add('red-block');
};

function createUserFunctionBlock() {
    const userBlock = document.createElement('div');
    document.querySelector('.header-title-container').append(userBlock);
    userBlock.classList.add('user-block');

    createSearchBlock(userBlock);
    createAboutBlock(userBlock);
    createHelpBlock(userBlock);
};

function createSearchBlock(userBlock) {
    const searchBlock = document.createElement('div');
    userBlock.append(searchBlock);
    searchBlock.classList.add('search-block');

    const search = document.createElement('input');
    searchBlock.append(search);
    search.classList.add('search-input');
};

function createAboutBlock(userBlock) {
    const aboutBlock = document.createElement('div');
    userBlock.append(aboutBlock);
    aboutBlock.classList.add('about-block');

    const buttonAbout = document.createElement('button');
    aboutBlock.append(buttonAbout);
    buttonAbout.classList.add('button-about');
    buttonAbout.innerHTML = 'О проекте';
    buttonAbout.id = 'about-btn';
};

function createHelpBlock(userBlock) {
    const helpBlock = document.createElement('div');
    userBlock.append(helpBlock);
    helpBlock.classList.add('help-block');

    const buttonHelp = document.createElement('button');
    helpBlock.append(buttonHelp);
    buttonHelp.classList.add('button-help');
    buttonHelp.innerHTML = 'Помощь';
    buttonHelp.id = 'help-btn';
};

function createHeaderTitle() {
    createHeaderTitleContainer();
    createLogoBlock();
    createUserFunctionBlock();
};

export { createHeaderTitle };
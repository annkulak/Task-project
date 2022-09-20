function createContainer() {
    const modalWindow = document.createElement('div');
    document.querySelector('.wrapper').insertAdjacentElement('afterBegin', modalWindow);
    modalWindow.classList.add('modal-window');
};

function createButton() {
    const buttonContainer = document.createElement('div');
    document.querySelector('.modal-window').insertAdjacentElement('afterBegin', buttonContainer);
    buttonContainer.classList.add('modal-window-button-container');

    const modalWindowBtn = document.createElement('button');
    buttonContainer.append(modalWindowBtn);
    modalWindowBtn.classList.add('modal-window-button');
    modalWindowBtn.id = 'close-modal';
    modalWindowBtn.innerHTML = '&#128473;';
};

function createContentContainer() {
    const contentContainer = document.createElement('div');
    document.querySelector('.modal-window').insertAdjacentElement('beforeEnd', contentContainer);
    contentContainer.classList.add('modal-window-content-container', 'photo-slider-addition');
};

function createBlackout() {
    const blackout = document.createElement('div');
    document.querySelector('.wrapper').insertAdjacentElement('afterBegin', blackout);
    blackout.classList.add('modal-window-blackout');
};

function createModalWindow() {
    createContainer();
    createButton();
    createContentContainer();
    createBlackout();
};

export { createModalWindow };
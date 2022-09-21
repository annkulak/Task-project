import { apartmentsCatalog } from './apartments_catalog.js';
import { apartmentsContent } from './apartments_content.js';

let apartmentsMove = 12;
var apartmentsMoveStart = 0;
let apartmentsMoveEnd = apartmentsMoveStart + apartmentsMove;
let apartmentsMoveMaximum = apartmentsCatalog.length + 1;

function moviApartmentsRestart() {
    apartmentsMoveStart = 0;
    apartmentsMoveEnd = apartmentsMoveStart + apartmentsMove;
    return;
};

function addApartmentsContent() {
    removeApartmentsContent();
    if (apartmentsMoveEnd < apartmentsMoveMaximum) {
        for (let i = apartmentsMoveStart; i < apartmentsMoveEnd; i++) {
            const apartmentsAddition = document.querySelector('.apartments-content.apartments-addition');
            changeApartmentsContent();
            apartmentsAddition.append(apartmentsContent[i].element);
        };
    } else {
        for (let i = apartmentsMoveStart; i < apartmentsMoveMaximum - 1; i++) {
            const apartmentsAddition = document.querySelector('.apartments-content.apartments-addition');
            apartmentsAddition.classList.add('last-apartments-content');
            apartmentsAddition.append(apartmentsContent[i].element);
        };
    };
};

function changeApartmentsContent() {
    const apartmentsAddition = document.querySelector('.apartments-content.apartments-addition.last-apartments-content');
    if (apartmentsAddition) {
        apartmentsAddition.classList.remove('last-apartments-content');
    };
};

function removeApartmentsContent() {
    const content = document.querySelectorAll('.apartments-content.apartments-addition>article');
    if (content) {
        content.forEach(article => {
            article.remove();
        });
    };
};

function flippingApartmentsContent() {
    const pageButton = document.querySelectorAll('.apartments-page > .button-page-container > .button-dark');

    pageButton.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('button-back')) {
                new Audio('./other/sound/sound-click-3.mp3').play();
                pageBack();
                addApartmentsContent();
                buttonAnimation();
            } else if (button.classList.contains('button-next')) {
                new Audio('./other/sound/sound-click-3.mp3').play();
                pageNext();
                addApartmentsContent();
                buttonAnimation();
            } else {
                return;
            };
        });
    });
};

function pageBack() {
    if (apartmentsMoveStart > 0) {
        apartmentsMoveEnd = apartmentsMoveStart;
        apartmentsMoveStart = apartmentsMoveEnd - apartmentsMove;
    };
};

function pageNext() {
    if (apartmentsMoveEnd < apartmentsMoveMaximum) {
        apartmentsMoveStart = apartmentsMoveEnd;
        apartmentsMoveEnd = apartmentsMoveStart + apartmentsMove;
    };
};

function buttonAnimation() {
    const buttonBack = document.querySelector('.apartments-page > .button-page-container > .button-dark.button-back');
    const buttonNext = document.querySelector('.apartments-page > .button-page-container > .button-dark.button-next');

    if (apartmentsMoveStart === 0) {
        buttonBack.classList.add('invert');
        buttonNext.classList.remove('invert');

    } else if (apartmentsMoveEnd > apartmentsMoveMaximum) {
        buttonNext.classList.add('invert');
        buttonBack.classList.remove('invert');

    } else {
        buttonBack.classList.remove('invert');
        buttonNext.classList.remove('invert');
    };
};

export { addApartmentsContent, flippingApartmentsContent, moviApartmentsRestart, changeApartmentsContent };
import { excursionCatalog } from './excursion_catalog.js';
import { excursionContent } from './excursion_content.js';

let excursionMove = 5;
var excursionMoveStart = 0;
let excursionMoveEnd = excursionMoveStart + excursionMove;
let excursionMoveMaximum = excursionCatalog.length;

function removeExcursionContent() {
    const content = document.querySelectorAll('.excursion-content.excursion-addition>article');
    if (content) {
        content.forEach(article => {
            article.remove();
        });
    };
};

function addExcursionContent() {
    removeExcursionContent();
    if (excursionMoveEnd < excursionCatalog.length) {
        for (let i = excursionMoveStart; i < excursionMoveEnd; i++) {
            const excursionAddition = document.querySelector('.excursion-content.excursion-addition');
            changeExcursionContent();
            excursionAddition.append(excursionContent[i].element);
        };
    } else {
        for (let i = excursionMoveStart; i < excursionMoveMaximum; i++) {
            const excursionAddition = document.querySelector('.excursion-content.excursion-addition');
            excursionAddition.classList.add('last-excursion-content');
            excursionAddition.append(excursionContent[i].element);
        };
    };
};

function changeExcursionContent() {
    const excursionAddition = document.querySelector('.excursion-content.excursion-addition.last-excursion-content');
    if (excursionAddition) {
        excursionAddition.classList.remove('last-excursion-content');
    };
};

function flippingExcursionContent() {
    const pageButton = document.querySelectorAll('.excursion-page > .button-page-container > button');

    pageButton.forEach(button => {
        button.addEventListener('click', () => {
            new Audio('./other/sound/sound-click-3.mp3').play();
            if (button.classList.contains('button-back')) {
                pageBack();
                addExcursionContent();
                buttonAnimation();
                window.scrollTo(0, 0);
            } else if (button.classList.contains('button-next')) {
                pageNext();
                addExcursionContent();
                buttonAnimation();
                window.scrollTo(0, 0);
            } else {
                return;
            };
        });
    });
};

function pageBack() {
    if (excursionMoveStart > 0) {
        excursionMoveEnd = excursionMoveStart;
        excursionMoveStart = excursionMoveEnd - excursionMove;
    };
};

function pageNext() {
    if (excursionMoveEnd < excursionMoveMaximum) {
        excursionMoveStart = excursionMoveEnd;
        excursionMoveEnd = excursionMoveStart + excursionMove;
    };
};

function buttonAnimation() {
    const buttonBack = document.querySelector('.excursion-page > .button-page-container > .button-dark.button-back');
    const buttonNext = document.querySelector('.excursion-page > .button-page-container > .button-dark.button-next');

    if (excursionMoveStart === 0) {
        buttonBack.classList.add('invert');
        buttonNext.classList.remove('invert');

    } else if (excursionMoveEnd > excursionMoveMaximum) {
        buttonNext.classList.add('invert');
        buttonBack.classList.remove('invert');

    } else {
        buttonBack.classList.remove('invert');
        buttonNext.classList.remove('invert');
    };
};

function excursionMoviRestart() {
    excursionMoveStart = 0;
    excursionMoveEnd = excursionMoveStart + excursionMove;
    return;
};

export { addExcursionContent, flippingExcursionContent, excursionMoviRestart, changeExcursionContent };
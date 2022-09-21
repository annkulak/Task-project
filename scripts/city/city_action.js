import { cityCatalog } from './city_catalog.js';
import { cityContent } from './city_content.js';

let cityMove = 25;
var cityMoveStart = 0;
let cityMoveEnd = cityMoveStart + cityMove;
let cityMoveMaximum = cityCatalog.length;

function removeCityContent() {
    const content = document.querySelectorAll('.city-content.city-addition>article');
    if (content) {
        content.forEach(article => {
            article.remove();
        });
    };
};

function addCityContent() {
    removeCityContent();
    if (cityMoveEnd < cityCatalog.length) {
        for (let i = cityMoveStart; i < cityMoveEnd; i++) {
            const cityAddition = document.querySelector('.city-content.city-addition');
            changeCityContent();
            cityAddition.append(cityContent[i].element);
        };
    } else {
        for (let i = cityMoveStart; i < cityMoveMaximum; i++) {
            const cityAddition = document.querySelector('.city-content.city-addition');
            cityAddition.classList.add('last-city-content');
            cityAddition.append(cityContent[i].element);
        };
    };
};

function changeCityContent() {
    const cityAddition = document.querySelector('.city-content.city-addition.last-city-content');
    if (cityAddition) {
        cityAddition.classList.remove('last-city-content');
    };
};

function flippingCityContent() {
    const pageButton = document.querySelectorAll('.city-page > .button-page-container > button');

    pageButton.forEach(button => {
        button.addEventListener('click', () => {
            new Audio('./other/sound/sound-click-3.mp3').play();
            if (button.classList.contains('button-back')) {
                pageBack();
                addCityContent();
                buttonAnimation();
                window.scrollTo(0, 0);
            } else if (button.classList.contains('button-next')) {
                pageNext();
                addCityContent();
                buttonAnimation();
                window.scrollTo(0, 0);
            } else {
                return;
            };
        });
    });
};

function pageBack() {
    if (cityMoveStart > 0) {
        cityMoveEnd = cityMoveStart;
        cityMoveStart = cityMoveEnd - cityMove;
    };
};

function pageNext() {
    if (cityMoveEnd < cityMoveMaximum) {
        cityMoveStart = cityMoveEnd;
        cityMoveEnd = cityMoveStart + cityMove;
    };
};

function buttonAnimation() {
    const buttonBack = document.querySelector('.city-page > .button-page-container > .button-dark.button-back');
    const buttonNext = document.querySelector('.city-page > .button-page-container > .button-dark.button-next');

    if (cityMoveStart === 0) {
        buttonBack.classList.add('invert');
        buttonNext.classList.remove('invert');

    } else if (cityMoveEnd > cityMoveMaximum) {
        buttonNext.classList.add('invert');
        buttonBack.classList.remove('invert');

    } else {
        buttonBack.classList.remove('invert');
        buttonNext.classList.remove('invert');
    };
};

function cityMoviRestart() {
    cityMoveStart = 0;
    cityMoveEnd = cityMoveStart + cityMove;
    return;
};

export { addCityContent, flippingCityContent, changeCityContent, cityMoviRestart };
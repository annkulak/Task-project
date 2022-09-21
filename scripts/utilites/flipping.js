import { createStartPage } from '../start/start_page.js';
import { createVideoPage, moviRestart } from '../video/video_page.js';
import { createCityPage, cityMoviRestart, changeCityContent, createCityPageRouteMap } from '../city/city_page.js';
import { createPhotoSlider } from '../slider/slider.js';
import { removeModalWindow, cleanSlideIndex } from '../slider/slider_flipping.js';
import { createExcursionPage } from '../excursion/excursion_page.js';
import { excursionMoviRestart, changeExcursionContent } from '../excursion/excursion_action.js';
import { createApartmentsPage, moviApartmentsRestart, changeApartmentsContent } from '../apartments/apartments_page.js';
import { createMorePage } from '../more/more_page.js';

function inactivePhotoCover() {
    const photoCover = document.querySelector('.header-photocover-container');
    photoCover.classList.add('inactive');
};

function activePhotoCover() {
    const photoCover = document.querySelector('.header-photocover-container');
    photoCover.classList.remove('inactive');
};

function removeMenuDecoration() {
    const choiceMenu = document.querySelector('.navigation-button.choice-navigation-button');
    if (choiceMenu) {
        choiceMenu.classList.remove('choice-navigation-button');
    };
};

function removeContent() {
    const contentContainer = document.querySelector('.page-content-addition');
    if (contentContainer) {
        contentContainer.remove();
    };
};

function clearPage() {
    activePhotoCover();
    removeMenuDecoration();
    removeContent();
};



function flippingPages() {
    document.addEventListener('click', (event) => {
        switch (event.target.id) {
            case 'main-page':
                new Audio('./other/sound/sound-click-3.mp3').play();
                clearPage();
                createStartPage();
                event.target.classList.add('choice-navigation-button');
                event.target.focus();
                break;

            case 'video-page':
                new Audio('./other/sound/sound-click-3.mp3').play();
                clearPage();
                moviRestart();
                createVideoPage();
                event.target.classList.add('choice-navigation-button');
                event.target.focus();
                break;

            case 'Жизнь по-итальянски':
                new Audio('./other/sound/sound-click-3.mp3').play();
                clearPage();
                moviRestart();
                createVideoPage();
                event.target.classList.add('choice-navigation-button');
                window.scrollTo(0, 0);
                break;

            case 'city-page':
                new Audio('./other/sound/sound-click-3.mp3').play();
                clearPage();
                cityMoviRestart();
                changeCityContent();
                createCityPage();
                event.target.classList.add('choice-navigation-button');
                event.target.focus();
                break;

            case 'Посмотреть все города':
                new Audio('./other/sound/sound-click-3.mp3').play();
                clearPage();
                cityMoviRestart();
                changeCityContent();
                createCityPage();
                event.target.classList.add('choice-navigation-button');
                window.scrollTo(0, 0);
                break;

            case 'sub-button-city-back':
                new Audio('./other/sound/sound-click-3.mp3').play();
                clearPage();
                cityMoviRestart();
                changeCityContent();
                createCityPage();
                event.target.classList.add('choice-navigation-button');
                break;

            case 'excursion-page':
                new Audio('./other/sound/sound-click-3.mp3').play();
                clearPage();
                excursionMoviRestart();
                changeExcursionContent();
                createExcursionPage();
                event.target.classList.add('choice-navigation-button');
                event.target.focus();
                break;

            case 'Найти экскурсию':
                new Audio('./other/sound/sound-click-3.mp3').play();
                clearPage();
                createExcursionPage();
                event.target.classList.add('choice-navigation-button');
                window.scrollTo(0, 0);
                break;

            case 'apartments-page':
                new Audio('./other/sound/sound-click-3.mp3').play();
                clearPage();
                moviApartmentsRestart();
                changeApartmentsContent();
                createApartmentsPage();
                event.target.classList.add('choice-navigation-button');
                event.target.focus();
                break;

            case 'Посмотреть все варианты':
                new Audio('./other/sound/sound-click-3.mp3').play();
                clearPage();
                moviApartmentsRestart();
                changeApartmentsContent();
                createApartmentsPage();
                event.target.classList.add('choice-navigation-button');
                window.scrollTo(0, 0);
                break;

            case 'more-page':
                new Audio('./other/sound/sound-click-3.mp3').play();
                clearPage();
                createMorePage();
                event.target.classList.add('choice-navigation-button');
                event.target.focus();
                break;

            case 'user-comment':
                clearPage();
                createMorePage();
                document.getElementById('more-page').add('choice-navigation-button');
                event.target.focus();
                break;

            case 'Показать маршрут':
                new Audio('./other/sound/sound-click-3.mp3').play();
                createCityPageRouteMap();
                break;

            case 'PhotoSlider':
                new Audio('./other/sound/sound-click-3.mp3').play();
                createPhotoSlider();
                window.scrollTo(0, 0);
                break;

            case 'close-modal':
                new Audio('./other/sound/sound-click-3.mp3').play();
                removeModalWindow();
                cleanSlideIndex();
                window.scrollTo(0, 0);
                break;
        };
    });
};

export { flippingPages, removeContent, inactivePhotoCover };
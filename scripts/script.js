import { createInterface } from './interface/interface.js';
import { createStartPage } from './start/start_page.js';
import { flippingPages } from './utilites/flipping.js';

document.addEventListener('load', performingSiteLoading());

function performingSiteLoading() {
    createInterface();
    createStartPage();
    flippingPages();
};
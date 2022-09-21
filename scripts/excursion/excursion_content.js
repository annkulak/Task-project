import { excursionCatalog } from './excursion_catalog.js';

let myExcursion;
let titleMyExcursion;

class ExcursionBlock {

    constructor(title, subtitle, guid, city, time, price, currently, picture, description) {
        this.title = title;
        this.subtitle = subtitle;
        this.guid = guid;
        this.city = city;
        this.time = time;
        this.price = price;
        this.currently = currently;
        this.picture = picture;
        this.description = description;
        this.init();
    }

    init() {
        this.element = document.createElement('article');
        this.element.classList.add('excursion-container');
        this.element.title = this.title;
        this.element.id = this.title;
        this.initPictureExcursionElement();
        this.initTextExcursionElement();
    }

    initPictureExcursionElement() {
        this.pictureExcursionElement = document.createElement('div');
        this.pictureExcursionElement.classList.add('excursion-picture-block');
        this.element.insertAdjacentElement('afterBegin', this.pictureExcursionElement);
        this.initPictureExcursion();
        this.initTitlePictureExcursion();
    }

    initPictureExcursion() {
        this.pictureExcursion = document.createElement('img');
        this.pictureExcursion.classList.add('excursion-picture');
        this.pictureExcursion.loading = 'lazy';
        this.pictureExcursion.src = this.picture.src[0];
        this.pictureExcursion.alt = this.city;
        this.pictureExcursionElement.insertAdjacentElement('afterBegin', this.pictureExcursion);
    }

    initTitlePictureExcursion() {
        this.titlePictureExcursion = document.createElement('div');
        this.titlePictureExcursion.classList.add('title-excursion-picture');
        this.pictureExcursionElement.insertAdjacentElement('beforeEnd', this.titlePictureExcursion);

        this.cityExcursion = document.createElement('div');
        this.cityExcursion.classList.add('excursion-city');
        this.titlePictureExcursion.insertAdjacentElement('afterBegin', this.cityExcursion);
        this.cityExcursion.innerHTML = this.city;

        this.infoExcursion = document.createElement('div');
        this.infoExcursion.classList.add('excursion-information-block');
        this.titlePictureExcursion.insertAdjacentElement('beforeEnd', this.infoExcursion);

        this.timeExcursion = document.createElement('div');
        this.timeExcursion.classList.add('excursion-time');
        this.infoExcursion.insertAdjacentElement('afterBegin', this.timeExcursion);
        this.timeExcursion.innerHTML = this.time;

        this.priceExcursion = document.createElement('div');
        this.priceExcursion.classList.add('excursion-price');
        this.infoExcursion.insertAdjacentElement('beforeEnd', this.priceExcursion);
        this.priceExcursion.innerHTML = `${this.price} ${this.currently}`;
    }

    initTextExcursionElement() {
        this.textExcursionElement = document.createElement('div');
        this.textExcursionElement.classList.add('excursion-text-container');
        this.element.insertAdjacentElement('beforeEnd', this.textExcursionElement);

        this.guidExcursion = document.createElement('div');
        this.guidExcursion.classList.add('excursion-guid-block');
        this.textExcursionElement.insertAdjacentElement('afterBegin', this.guidExcursion);

        this.iconGuidExcursion = document.createElement('img');
        this.iconGuidExcursion.classList.add('excursion-guid-icon');
        this.iconGuidExcursion.loading = 'lazy';
        this.iconGuidExcursion.src = `./other/icons/icon-user.png`;
        this.iconGuidExcursion.alt = `guid`;
        this.guidExcursion.insertAdjacentElement('afterBegin', this.iconGuidExcursion);

        this.nameGuidExcursion = document.createElement('div');
        this.nameGuidExcursion.classList.add('excursion-guid-name');
        this.guidExcursion.insertAdjacentElement('beforeEnd', this.nameGuidExcursion);
        this.nameGuidExcursion.innerHTML = this.guid;

        this.titleExcursion = document.createElement('div');
        this.titleExcursion.classList.add('excursion-title');
        this.textExcursionElement.append(this.titleExcursion);
        this.titleExcursion.innerHTML = this.title;

        this.subTitleExcursion = document.createElement('div');
        this.subTitleExcursion.classList.add('excursion-subtitle');
        this.textExcursionElement.append(this.subTitleExcursion);
        this.subTitleExcursion.innerHTML = this.subtitle;

        this.lineExcursion = document.createElement('div');
        this.lineExcursion.classList.add('excursion-line');
        this.textExcursionElement.append(this.lineExcursion);

        this.descriptionExcursion = document.createElement('div');
        this.descriptionExcursion.classList.add('excursion-description');
        this.textExcursionElement.append(this.descriptionExcursion);
        this.descriptionExcursion.innerHTML = this.description;

        this.buttonForm = document.createElement('button');
        this.buttonForm.classList.add('button-excursion-form');
        this.textExcursionElement.append(this.buttonForm);
        this.buttonForm.innerHTML = `Оставить отзыв`;
        this.buttonForm.id = `user-comment`;
    }

    excursionClick() {
        this.element.addEventListener('click', () => {
            new Audio('./other/sound/sound-click-3.mp3').play();
            myExcursion = this.name;
            getMyExcursion();
            window.scrollTo(0, 0);
        });
    };
};

const excursionContent = [];

(function createExcursionContent() {
    for (let i = 0; i < excursionCatalog.length; i++) {
        excursionContent[i] = new ExcursionBlock(excursionCatalog[i].title, excursionCatalog[i].subtitle, excursionCatalog[i].guid, excursionCatalog[i].city,
            excursionCatalog[i].time, excursionCatalog[i].price, excursionCatalog[i].currently, excursionCatalog[i].picture, excursionCatalog[i].description);
        excursionContent[i].excursionClick();
    };
    return excursionContent;
})();

function getMyExcursion() {
    myExcursion = excursionCatalog.find(item => item.title == titleMyExcursion);
};

export { excursionContent, myExcursion, titleMyExcursion };
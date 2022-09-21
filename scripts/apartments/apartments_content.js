import { apartmentsCatalog } from './apartments_catalog.js';

class ApartmentBlock {

    constructor(cityRU, cityEn, price, currency, picture, description) {
        this.city = cityRU;
        this.cityEn = cityEn;
        this.price = price;
        this.currency = currency;
        this.picture = picture;
        this.description = description;
        this.init();
    }

    init() {
        this.element = document.createElement('article');
        this.element.classList.add('apartment-container');
        this.element.id = this.cityEn;
        this.element.city = this.cityRu;
        this.initLinkApartmentElement();
        this.initPictureApartmentElement();
        this.initTitleApartmentElement();
    }

    initLinkApartmentElement() {
        this.linkApartmentElement = document.createElement('a');
        this.linkApartmentElement.href = this.description;
        this.linkApartmentElement.classList.add('apart-link');
        this.linkApartmentElement.setAttribute('target', '_blank');
        this.element.insertAdjacentElement('afterBegin', this.linkApartmentElement);
    }

    initPictureApartmentElement() {
        this.pictureApartmentElement = document.createElement('img');
        this.pictureApartmentElement.classList.add('apartment-picture');
        this.pictureApartmentElement.loading = 'lazy';
        this.pictureApartmentElement.src = this.picture.src[0];
        this.pictureApartmentElement.alt = this.cityEn;
        this.element.insertAdjacentElement('beforeEnd', this.pictureApartmentElement);
    }

    initTitleApartmentElement() {
        this.titleApartmentElement = document.createElement('div');
        this.titleApartmentElement.classList.add('title-apartment-block');
        this.element.insertAdjacentElement('beforeEnd', this.titleApartmentElement);

        this.nameApartmentElement = document.createElement('h1');
        this.nameApartmentElement.classList.add('apartment-city-name');
        this.titleApartmentElement.insertAdjacentElement('afterBegin', this.nameApartmentElement);
        this.nameApartmentElement.innerHTML = this.city;

        this.peopleApartmentElement = document.createElement('div');
        this.peopleApartmentElement.classList.add('apartment-price');
        this.titleApartmentElement.insertAdjacentElement('beforeEnd', this.peopleApartmentElement);
        this.peopleApartmentElement.innerHTML = `${this.price} ${this.currency} ночь`;
    }
};

const apartmentsContent = [];

(function createApartmentsContent() {
    for (let i = 0; i < apartmentsCatalog.length; i++) {
        apartmentsContent[i] = new ApartmentBlock(apartmentsCatalog[i].cityRU, apartmentsCatalog[i].cityEn, apartmentsCatalog[i].price,
            apartmentsCatalog[i].currency, apartmentsCatalog[i].picture, apartmentsCatalog[i].description);
    };
    return apartmentsContent;
})();

export { apartmentsContent };
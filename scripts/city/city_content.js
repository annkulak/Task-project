import { cityCatalog } from './city_catalog.js';
import { createCitySubPage } from './city_subpage.js';

let myCity;
let nameMyCity;

class CityBlock {

    constructor(nameRU, nameEn, latitude, longitude, people, picture, description) {
        this.name = nameRU;
        this.nameEn = nameEn;
        this.latitude = latitude;
        this.longitude = longitude;
        this.people = people;
        this.picture = picture;
        this.description = description;
        this.init();
    }

    init() {
        this.element = document.createElement('article');
        this.element.classList.add('city-container');
        this.element.id = this.nameEn;
        this.element.name = this.name;
        this.element.description = this.description;
        this.initPictureCityElement();
        this.initTitleCityElement();
    }

    initPictureCityElement() {
        this.pictureCityElement = document.createElement('img');
        this.pictureCityElement.classList.add('city-picture');
        this.pictureCityElement.loading = 'lazy';
        this.pictureCityElement.src = this.picture.src[0];
        this.pictureCityElement.alt = this.nameEn;
        this.element.insertAdjacentElement('afterBegin', this.pictureCityElement);
    }

    initTitleCityElement() {
        this.titleCityElement = document.createElement('div');
        this.titleCityElement.classList.add('title-city-block');
        this.element.insertAdjacentElement('beforeEnd', this.titleCityElement);

        this.nameCityElement = document.createElement('h1');
        this.nameCityElement.classList.add('city-name');
        this.titleCityElement.insertAdjacentElement('afterBegin', this.nameCityElement);
        this.nameCityElement.innerHTML = this.name;

        this.peopleCityElement = document.createElement('div');
        this.peopleCityElement.classList.add('city-people');
        this.titleCityElement.insertAdjacentElement('beforeEnd', this.peopleCityElement);
        this.peopleCityElement.innerHTML = this.people;
    }

    cityClick() {
        this.element.addEventListener('click', () => {
            new Audio('./other/sound/sound-click-3.mp3').play();
            nameMyCity = this.name;
            getMyCity();
            createCitySubPage();
            window.scrollTo(0, 0);
        });
    };
};

const cityContent = [];

(function createCityContent() {
    for (let i = 0; i < cityCatalog.length; i++) {
        cityContent[i] = new CityBlock(cityCatalog[i].nameRU, cityCatalog[i].nameEn, cityCatalog[i].latitude, cityCatalog[i].longitude, cityCatalog[i].people, cityCatalog[i].picture, cityCatalog[i].description);
        cityContent[i].cityClick();
    };
    return cityContent;
})();

function getMyCity() {
    myCity = cityCatalog.find(item => item.nameRU == nameMyCity);
};

export { cityContent, myCity };
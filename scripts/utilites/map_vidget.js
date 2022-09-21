function createMiniMap() {

    let center = [41.902705, 12.496176];
    let zoom = 4;
    let type = 'yandex#hybrid';

    function init() {
        let map = new ymaps.Map('mini-map', {
            center: center,
            zoom: zoom,
            type: type
        }, {
            searchControlProvider: 'yandex#search'
        });

        map.controls.remove('geolocationControl');
        map.controls.remove('searchControl');
        map.controls.remove('trafficControl');
        map.controls.remove('typeSelector');
        map.controls.remove('zoomControl');
        map.controls.remove('rulerControl');

        let placemark = new ymaps.Placemark(center, {}, {
            iconLayout: 'default#image',
            iconImageHref: './other/icons/icon-location-2.png',
            iconImageSize: [20, 20],
            iconImageOffset: [-10, -20]
        });

        map.geoObjects.add(placemark);
    };

    ymaps.ready(init);
};

function addItalyMap() {

    let center = [41.902705, 12.496176];
    let zoom = 5;
    let type = 'yandex#hybrid';

    function init() {
        let map = new ymaps.Map('italy-map', {
            center: center,
            zoom: zoom,
            type: type
        }, {
            searchControlProvider: 'yandex#search'
        });

        map.controls.remove('trafficControl');
        map.behaviors.disable(['scrollZoom']);

        let placemark = new ymaps.Placemark(center, {}, {
            iconLayout: 'default#image',
            iconImageHref: './other/icons/icon-location-2.png',
            iconImageSize: [20, 20],
            iconImageOffset: [-10, -20]
        });

        map.geoObjects.add(placemark);
    };

    ymaps.ready(init);
};

function addRouteMap(latitude, longitude, myZoom, myType) {

    let center = [latitude, longitude];
    let zoom = myZoom;
    let type = myType;

    ymaps.ready(function () {
        let map = new ymaps.Map('route-map', {
            center: center,
            zoom: zoom,
            type: type,
            controls: ['routePanelControl']
        }, {
            searchControlProvider: 'yandex#search'
        });

        map.behaviors.disable(['scrollZoom']);

        let control = map.controls.get('routePanelControl');
        let city = 'Рим';

        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        function success(pos) {
            const crd = pos.coords;
            let locationText = null;
            let reverseGeocoder = ymaps.geocode([crd.latitude, crd.longitude]);

            reverseGeocoder.then(function (res) {
                locationText = res.geoObjects.get(0).properties.get('text');

                control.routePanel.state.set({
                    type: 'auto',
                    fromEnabled: true,
                    from: locationText,
                    toEnabled: true,
                    to: `${city}, делле Терме ди Дьоклециано, 33`,
                });
            });

            control.routePanel.options.set({
                types: {
                    auto: true,
                    masstransit: true,
                    pedestrian: true,
                    taxi: true
                },
                autofocus: false,
            });
        };

        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        };

        navigator.geolocation.getCurrentPosition(success, error, options);
    });
};

function addCityMap(latitudeMyCity, longitudeMyCity, myZoom) {

    let center = [latitudeMyCity, longitudeMyCity];
    let zoom = myZoom;
    var myMap;

    ymaps.ready(init);

    function init() {

        myMap = new ymaps.Map('city-map', {
            center: center,
            zoom: zoom,
        }, {
            searchControlProvider: 'yandex#search'
        });

        myMap.controls.remove('trafficControl');
        myMap.behaviors.disable(['scrollZoom']);

        let placemark = new ymaps.Placemark(center, {}, {
            iconLayout: 'default#image',
            iconImageHref: './other/icons/icon-location-2.png',
            iconImageSize: [20, 20],
            iconImageOffset: [-10, -20]
        });

        myMap.geoObjects.add(placemark);
    };
};

export { createMiniMap, addItalyMap, addCityMap, addRouteMap };
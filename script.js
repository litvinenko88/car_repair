ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [45.0448, 41.9691], // Координаты Ставрополя
        zoom: 15,
        controls: ['zoomControl', 'fullscreenControl']
    });

    // Поиск точного адреса
    ymaps.geocode('Ставрополь, 4-я Промышленная улица, 4а').then(function (res) {
        var firstGeoObject = res.geoObjects.get(0);
        var coords = firstGeoObject.geometry.getCoordinates();
        
        // Создание метки
        var myPlacemark = new ymaps.Placemark(coords, {
            balloonContent: '<strong>СТО - Ремонт рулевых реек</strong><br>г. Ставрополь, ул. 4-я Промышленная 4а<br>Тел: 8-988-747-46-54'
        }, {
            preset: 'islands#redDotIcon'
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.setCenter(coords, 16);
    });

    // Добавление анимации при скролле
    window.addEventListener('scroll', function() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const cardVisible = 150;
            
            if (cardTop < window.innerHeight - cardVisible) {
                card.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }
        });
    });
});
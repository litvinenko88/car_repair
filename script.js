ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [45.0448, 41.9691],
        zoom: 15,
        controls: ['zoomControl', 'fullscreenControl']
    });

    ymaps.geocode('Ставрополь, 4-я Промышленная улица, 4а').then(function (res) {
        var firstGeoObject = res.geoObjects.get(0);
        var coords = firstGeoObject.geometry.getCoordinates();
        
        var myPlacemark = new ymaps.Placemark(coords, {
            balloonContent: '<div style="padding: 10px; font-family: Arial, sans-serif;"><strong style="color: #404040;">СТО - Ремонт рулевых реек</strong><br><br>📍 г. Ставрополь, ул. 4-я Промышленная 4а<br>📞 <a href="tel:+79887474654" style="color: #ffcc00; text-decoration: none;">8-988-747-46-54</a><br>🕒 ПН-СБ 09:00 - 19:00</div>'
        }, {
            preset: 'islands#yellowDotIcon'
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.setCenter(coords, 16);
    });

    // Плавная анимация при загрузке
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.contact-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});
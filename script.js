ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [45.061169, 41.913164],
        zoom: 15,
        controls: ['zoomControl', 'fullscreenControl']
    });

    var coords = [45.061169, 41.913164];
        
        var myPlacemark = new ymaps.Placemark(coords, {
            balloonContent: '<div style="padding: 15px; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif; max-width: 300px;"><div style="background: #ffcc00; padding: 10px; border-radius: 8px; margin-bottom: 10px; text-align: center;"><strong style="color: #404040; font-size: 16px;">СТО - Ремонт рулевых реек</strong></div><div style="color: #404040; line-height: 1.5;"><div style="margin: 8px 0; display: flex; align-items: center;"><span style="margin-right: 8px;">📍</span><span>г. Ставрополь, ул. 4-я Промышленная 4а бокс 20</span></div><div style="margin: 8px 0; display: flex; align-items: center;"><span style="margin-right: 8px;">📞</span><a href="tel:+79887473654" style="color: #404040; text-decoration: none; font-weight: 600;">8-988-747-36-54</a></div><div style="margin: 8px 0; display: flex; align-items: center;"><span style="margin-right: 8px;">🕒</span><span>ПН-СБ 09:00 - 19:00</span></div></div></div>',
            hintContent: 'СТО - Ремонт рулевых реек и насосов ГУР'
        }, {
            preset: 'islands#redAutoIcon',
            iconColor: '#ffcc00'
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.setCenter(coords, 16);
        myPlacemark.balloon.open();

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

function toggleWarrantyDetails() {
    const details = document.getElementById('warrantyDetails');
    const button = document.querySelector('.warranty-toggle');
    
    if (details.classList.contains('open')) {
        details.classList.remove('open');
        button.textContent = 'Подробнее';
    } else {
        details.classList.add('open');
        button.textContent = 'Скрыть';
    }
}
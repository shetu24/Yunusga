var
    _MAP_IMAGE_HREF = 'img/map-balloon.png',
    _MAP_IMAGE_SIZE = [37, 55],
    _MAP_IMAGE_OFFSET = [-18, -55],
    _MAP_CENTER = [55.737147, 37.532834];

// карта на странице контакты
;(function(){
    var map = 'map-site';

    if(!$.exists('#' + map)) {
        return;
    }

    ymaps.ready(function(){
        var myMap = new ymaps.Map(map, {
            center: _MAP_CENTER,
            zoom: 15.5
        });

        var marker = new ymaps.Placemark(
            _MAP_CENTER,
            {
                iconContent: '',
                hintContent: '',
                balloonContentHeader: '',
                balloonContentBody: 'Адрес: г Москва, ул Поклонная д 4, м Парк Победы'  
            },
            {
                iconLayout: 'default#image',
                iconImageHref: _MAP_IMAGE_HREF,
                iconImageSize: _MAP_IMAGE_SIZE,
                iconImageOffset: _MAP_IMAGE_OFFSET,
            }
        );

        // Добавляет метку на карту
        myMap.geoObjects.add(marker);
    });

})();

// карта на странице компании/мастера
;(function(){
    var map = 'map-company';

    if(!$.exists('#' + map)) {
        return;
    }

    ymaps.ready(function(){
        var myMap = new ymaps.Map(map, {
            center: _MAP_CENTER,
            zoom: 15.5
        });

        var myCollection = new ymaps.GeoObjectCollection();

        var mapPoints = $('#' + map).data('map-points');
        var mapBounds = [];

        if(!mapPoints) {
            return;
        }

        mapPoints = JSON.parse(mapPoints.replace(/'/g,'"'));

        var render = function () {
            var self = this;

            mapBounds.push(self.latLan);            

            var marker = new ymaps.Placemark(
                self.latLan,
                {
                    iconContent: '',
                    hintContent: '',
                    balloonContentHeader: '',
                    balloonContentBody: self.balloonContentBody  
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: _MAP_IMAGE_HREF,
                    iconImageSize: _MAP_IMAGE_SIZE,
                    iconImageOffset: _MAP_IMAGE_OFFSET,
  
                }
              );

            // Добавляет метку на карту
            myCollection.add(marker) 
        };

        $.each(mapPoints, render);
        
        // Добавляем коллекцию на карту.
        myMap.geoObjects.add(myCollection);

        myMap.setBounds(myCollection.getBounds(), {
            checkZoomRange:true,
            useMapMargin: true,
            zoomMargin: 3,
        }).then(function () {
            if (myMap.getZoom() > 6) {
                myMap.setZoom(6);
            }   
        });

    });

})();

// карта во всплывающем окне
;(function(){
    var map = 'modal-map';

    if(!$.exists('#' + map)) {
        return;
    }

    var modalMap = $('[data-remodal-id="modal-map"]').remodal();

    ymaps.ready(function(){
        // кастомная разметка балуна
        var myBalloonLayout = ymaps.templateLayoutFactory.createClass([
            '<div class="b-map-balloon">',
                '<div class="b-map-balloon__items">',
                    '<div class="b-map-balloon__close"></div>',
                    '$[properties.balloonContent]',
                '</div>',
            '</div>'
        ].join(''),
        {
            /*Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.*/
            build: function () {
                this.constructor.superclass.build.call(this);

                this._$element = $('.b-map-balloon', this.getParentElement());
        
                this.applyElementOffset();
        
                this._$element
                    .find('.b-map-balloon__close')
                    .on('click', $.proxy(this.onCloseClick, this));
        
            },
            
            onSublayoutSizeChange: function () {
                MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);
        
                if(!this._isElement(this._element)) {
                    return;
                }
        
                this.applyElementOffset();
                this.events.fire('boundschange');
            },
        
            /*Удаляет содержимое макета из DOM.*/
            clear: function () {
                this._$element.find('.close')
                    .off('click');
        
                this.constructor.superclass.clear.call(this);
            },            
        
            /*Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.*/
            applyElementOffset: function () {
                this._$element.css({
                    left: -186, 
                    top: -(this._$element[0].offsetHeight + 20) // 10 - высота ножки контента балуна
                });
            },
        
            /* Закрывает балун при клике на крестик, кидая событие "userclose" на макете. */
            onCloseClick: function (e) {
                e.preventDefault();
                this.events.fire('userclose');
            },
        
            getClientBoundingRect: function () {
                var left =  this._$element.position().left,
                    top =  this._$element.position().top;
        
                return [
                    [left, top], [
                        left +  this._$element[0].offsetWidth,
                        top +  this._$element[0].offsetHeight + 20 // 10 - высота ножки контента балуна
                    ]
                ];
            },
            /**
             * Используется для автопозиционирования (balloonAutoPan).
             * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
             * @function
             * @name getClientBounds
             * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
             */
            getShape: function () {
                if(!this._isElement(this._$element)) {
                    return MyBalloonLayout.superclass.getShape.call(this);
                }

                var position = this._$element.position();

                return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                    [position.left, position.top], [
                        position.left + this._$element[0].offsetWidth,
                        position.top + this._$element[0].offsetHeight
                    ]
                ]));
            },
        
            /* Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).*/
            _isElement: function (element) {
                return element && element[0];
            }
        });
        var myMap = new ymaps.Map(map, {
            center: _MAP_CENTER,
            zoom: 15.5
        });

        var myCollection = new ymaps.GeoObjectCollection();

        // точки на карте
        var mapPoints = $('#' + map).find('.b-modal-map__point');

        if(!$.exists(mapPoints)) {
            return;
        }

        var render = function () {
            var self = $(this);
            console.log(self);
            var coords         = self.data('coords'),
                hintContent    = self.find('.b-catalogue-thumb__title').text(),
                balloonContent = self.html();

            var marker = new ymaps.Placemark(coords, {
                    balloonHeader  : '',
                    balloonContent : balloonContent,
                    hintContent    : hintContent
                },
                {
                    iconImageHref   : _MAP_IMAGE_HREF,
                    iconImageSize   : _MAP_IMAGE_SIZE,
                    iconImageOffset : _MAP_IMAGE_OFFSET,
                    iconLayout      : 'default#image',
                    coord           : coords,
                    balloonLayout   : myBalloonLayout
                }
            );

            // Добавляет метку в коллекцию
            myCollection.add(marker);
        };

        $.each(mapPoints, render);

        // Добавляем коллекцию на карту.
        myMap.geoObjects.add(myCollection);

        $('.b-catalogue__map').on('click', function(event){
            event.preventDefault();
            modalMap.open();
        });

        $(document).on('opening', modalMap, function(){
            setTimeout(function(){
                myMap.container.fitToViewport();
                myMap.setBounds(myCollection.getBounds());
            },200);
        });

    }); // ymaps.ready

})();


// карта на странице редактирования профиля
;(function(){
    var map = 'profile-address-map';

    if(!$.exists('#' + map)) {
        return;
    }

    ymaps.ready(function(){
        var myMap = new ymaps.Map(map, {
            center: _MAP_CENTER,
            zoom: 15.5
        });

        var marker = new ymaps.Placemark(
            _MAP_CENTER,
            {
                iconContent: '',
                hintContent: '',
                balloonContentHeader: '',
                balloonContentBody: 'Адрес: г Москва, ул Поклонная д 4, м Парк Победы'  
            },
            {
                iconLayout: 'default#image',
                iconImageHref: _MAP_IMAGE_HREF,
                iconImageSize: _MAP_IMAGE_SIZE,
                iconImageOffset: _MAP_IMAGE_OFFSET,
            }
        );

        // Добавляет метку на карту
        myMap.geoObjects.add(marker);
    });

})();
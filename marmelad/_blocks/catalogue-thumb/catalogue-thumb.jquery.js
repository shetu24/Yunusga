$('.b-catalogue-thumb__favorite-add').on('click', function(event){
    event.preventDefault();
    $(this).toggleClass('active');
});

;(function(){
    var companyCard = $('.b-catalogue-card--company:not(.b-catalogue-card--without-address) .b-catalogue-thumb--detailed');

    if(!$.exists(companyCard)) {
        return;
    }

    var turnUp = function () {
        var contacts = companyCard.find('.b-catalogue-thumb__aside--contacts');
        var indent = -1 * (companyCard.find('.b-catalogue-thumb__content').outerHeight() - 2);

        if(window.matchMedia('(max-width: 880px)').matches) {
            indent = 'auto';
        }

        contacts.css('margin-top', indent); 
    };

    turnUp();
    $(window).on('load resize', turnUp);

})();


$('.b-catalogue-thumb__address-bookmark').on('click', function(event){
    event.preventDefault();
    var indx = $(this).data('tab-index');
    var parent = $(this).closest('.b-catalogue-thumb');
    if($(this).hasClass('active')) {
        return;
    }
    $('.b-catalogue-thumb__address-bookmark', parent).removeClass('active');
    $(this).addClass('active');
    $('.b-catalogue-thumb__contact', parent)
        .removeClass('active')
        .hide()
        .filter('[data-tab-index="' + indx + '"]')
        .fadeIn();
});

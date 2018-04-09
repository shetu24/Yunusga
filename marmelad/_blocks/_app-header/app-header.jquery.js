;(function(){
    var headerHome = $('.app--home .app-header');

    if (!$.exists(headerHome)) {
        return;
    }

    var offsetTop = headerHome.outerHeight();

    var fixHeader = function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= offsetTop) {
            headerHome.addClass('app-header--fixed');
            setTimeout(function(){
                headerHome.addClass('app-header--fixed_show');
            });
        } else {
            headerHome.removeClass('app-header--fixed app-header--fixed_show');
        }
    };

    $(window).on('scroll', fixHeader).trigger('scroll');
})();
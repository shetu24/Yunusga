var button = $(".b-benefits__button > a"),
    tab = $(".b-benefits__tab");

button.on("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
});

button.on("mouseover", function() {
    var i = $(this).data("rel");
    $(this).hasClass("active") || (button.removeClass("active"),
    $(this).addClass("active"),
    tab.hide(),
    $('div[data-tab="' + i + '"]').fadeIn("fast"))
});

$(".js-main-question").on("click", function() {
    $(this).parent().toggleClass("active")
});

$('.b-brands__more a').on('click', function(event){
	event.preventDefault();
	$(this).toggleClass('active');
	$('.b-brands__hidden').toggle();
});
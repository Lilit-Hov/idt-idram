$(document).ready(function(){

// collapsed menu
    $('header .toggle-button').on('click', function () {
        var header = $('header');
        header.toggleClass('collapsed-header');
    });

// stories slider
    $('.story-list').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: '<button class="btn btn-link slick-next slick-arrow" aria-label="Next" type="button"><i class="icon-arrow-right"></i></button>',
        prevArrow: '<button class="btn btn-link slick-prev slick-arrow" aria-label="Previous" type="button"><i class="icon-arrow-left"></i></button>'
    });
});
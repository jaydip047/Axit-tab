// <----------------- Mobile-Menu -------------->   
    document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu("#menu", {
            "offCanvas": {
                "position": "right-front"
            },
            "theme": "black"
        });
    }
);

//  <----------------- Sticky-Header -------------->
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('.header-section').addClass("sticky");
    }
    else {
        $('.header-section').removeClass("sticky");
    }
});


// <-----------------Animate-Slider-------------->
var owl = $('.banner-section .owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    autoplay: true,
    animateOut: 'animate__fadeOut',
    animateIn: 'animate__fadeIn',
    autoplayTimeout: 3000,
    dots: false,
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})

//<------------------Tab-Selection--------------->
$('#tabs-nav li:first-child').addClass('active');
$('.tab-contant').hide();
$('.tab-contant:first').show();
$('#tabs-nav li').click(function () {
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-contant').hide();
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});

// <-----------------Dots - Slider-------------->
$('.second-section .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        640: {
            items: 2,
        },
        980: {
            items: 3,
        },
        1024: {
            items: 3,
        }
    }
})
// <----------------- Mobile-Menu -------------->




/*======================== Accordian ========================== */
$(function () {
    $('.accordian-title').click(function (j) {

        var dropDown = $(this).closest('.accordian-content').find('.accordian-panel');
        $(this).closest('.accordian').find('.accordian-panel').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordian').find('.accordian-title.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });
});


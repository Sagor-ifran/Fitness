$(function () {

    "use strict";

    //======menu fix js======
    if ($('.main_menu').offset() != undefined) {
        var navoff = $('.main_menu').offset().top;
        $(window).scroll(function () {
            var scrolling = $(this).scrollTop();

            if (scrolling > navoff) {
                $('.main_menu').addClass('menu_fix');
            } else {
                $('.main_menu').removeClass('menu_fix');
            }
        });
    }


    // nice select js
    $('.select_js').niceSelect();


    //=======venobox js=========
    $('.venobox').venobox();


    //banner slider
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,
        fade: true,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    dots: false
                }
            }
        ]
    });


    //program slider
    $('.program_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    // machin slider
    $('.machin_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,
        fade: true,
    });


    // testimonial slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.slider-nav',
        nextArrow: '<i class="fal fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="fal fa-angle-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
    });


    // blog slider
    $('.blog_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="fal fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="fal fa-angle-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    // banner 2 slider
    $('.banner_2_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        fade: false,
        nextArrow: '<i class="fal fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="fal fa-angle-left prevArrow"></i>',


        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]




    });


    // programe 2 slider
    $('.programe_2_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    // product  slider
    $('.product_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    // testimonial 2  slider
    $('.testimonial_2_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: true,
        nextArrow: '<i class="fal fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="fal fa-angle-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });


    // banner 3 slider
    $('.banner_3_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,
        fade: true,

        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    });


    // program 4 slider
    $('.program_4_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,
        fade: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });



    // testimonial 3 slide
    $('.slider-for2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
        arrows: false,
        dots: true,
        asNavFor: '.slider-nav2',

        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    });

    $('.slider-nav2').slick({
        slidesToShow: 3,
        asNavFor: '.slider-for2',
        autoplaySpeed: 3000,
        autoplay: true,
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
    });


    // blog 3  slider
    $('.blog_3_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        nextArrow: '<i class="fal fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="fal fa-angle-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });


    // counter js
    $('.count').countUp();


    //gallery slider
    $('.gallery_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    //program slider
    $('.gallery_slider_2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    // barfiller js
    $(document).ready(function () {
        $('#bar1').barfiller({});
        $('#bar2').barfiller({});
        $('#bar3').barfiller({});
        $('#bar4').barfiller({});
    });


    //=======select2====== 
    $(document).ready(function () {
        $('.select_2').select2();
    });



    // sticky sidebar 
    $(".sticky_sidebar").stickit({
        top: 80,
    })


    // product_details slider
    $('.slider-forFive').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.slider-navFive',
        nextArrow: '<i class="fal fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="fal fa-angle-left prevArrow"></i>',
    });

    $('.slider-navFive').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-forFive',
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 0,
    });




    // releted_product  slider
    $('.releted_product').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: true,
        nextArrow: '<i class="fal fa-angle-right nextArrow"></i>',
        prevArrow: '<i class="fal fa-angle-left prevArrow"></i>',

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });















    //WOW js
    new WOW().init();




    //=======SMALL DEVICE MENU ICON======
    $(".navbar-toggler").on("click", function () {
        $(".navbar-toggler").toggleClass("show");
    });




});
$('.owl-carousel').owlCarousel({
    // one time 4 items shown in screen 
    items: 4,
    // loop true means grid moving infinite if given false then it run only 1 time 
    loop: true,
    // dont want to show previous and next button 
    nav: false,

    autoplay: true,
    autoplayTimeout: 2000,
    // when you hover on any element the auto play will be stop 
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive:{
        // when breakpoint (screen-size) is 0 to 600 then 2 item shown in a screen 
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})
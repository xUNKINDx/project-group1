new Swiper('.swiper', {
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    // },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: true
    }
});


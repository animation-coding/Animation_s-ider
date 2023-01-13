var swiper = new Swiper(".slide-content", {
    slidesPerView: 3.35,
    spaceBetween: 0,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 10,
        stretch: -0.1,
        depth: 100,
        modifier: 2.8,
        slideShadows: false,
    },

    breakpoints: {
        280: {
            slidesPerView: 1.2,
            coverflowEffect:
            {
                stretch: -10,
            }
        },
        340: {
            slidesPerView: 1.3,
            coverflowEffect:
            {
                stretch: -0.2,
            }

        },


        450: {
            slidesPerView: 2.45,
            coverflowEffect:
            {
                stretch: -1,
            }
        },
        640: {
            slidesPerView: 2.5,
            coverflowEffect:
            {
                stretch: -3,
            }
        },
        768: {
            slidesPerView: 3.3,
            coverflowEffect:
            {
                stretch: -0.4,
            }
        },
        1024: {
            slidesPerView: 3.35,
            coverflowEffect:
            {
                stretch: -0.1,
            }
        },
        1400: {
            slidesPerView: 4,
            coverflowEffect:
            {
                stretch: -0.4,
            }
        },
        1600: {
            slidesPerView: 4,
            coverflowEffect:
            {
                stretch: -0.4,
            }
        },
    }

});
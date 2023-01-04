let myCarousel = document.querySelector('#сarousel')
let carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: false,
    keyboard:false,
    pause: 'hover',
    ride: 'carousel',
   })

//    AOS.init({
//     duration: 1200
//    });
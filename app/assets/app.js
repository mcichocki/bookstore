import $ from 'jquery';
import '@popperjs/core';

window.jQuery = $;
window.$ = $;
global.$ = $;

import './styles/app.scss';
import 'bootstrap';
import 'owl.carousel';

// import '@fortawesome/fontawesome-free/js/fontawesome';
// import '@fortawesome/fontawesome-free/js/solid';

// start the Stimulus application
// import './bootstrap';

$(function() {
    $(".owl-carousel").owlCarousel({
        items:6,
        loop:true,
        margin:30,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:false,

    });
});
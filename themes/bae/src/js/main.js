import styles from './../css/main.css';

global.jQuery = require("jquery");
const $ = jQuery;
// require('modaal/dist/js/modaal');

// $('.article-link').modaal({
//   type: 'iframe'
// });

$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("main").offset().top
    }, 1500);
});

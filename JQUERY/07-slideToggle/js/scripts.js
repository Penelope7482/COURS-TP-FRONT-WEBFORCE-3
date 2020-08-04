// $.noConflict();
// jQuery(document).ready(($) => {

//     $('.bouton').on('click', () => {
//         console.log('.bouton');
//         if ($('.bouton').text() == '-') {
//             $('.bouton').text('+',);
//         }
//         else {
//             $('.bouton').text('-');
//         };
//         $('ul').slideToggle(1000);
//     });
//     });

//correction

$.noConflict();
jQuery(document).ready(($) => {

    $('.bouton').on('click', (e) => {
        $(e.currentTarget).next().slideToggle();
        const plusMoins = $(e.currentTarget).text() == '+' ? '-' : '+';
        $(e.currentTarget).text(plusMoins);

    });
});





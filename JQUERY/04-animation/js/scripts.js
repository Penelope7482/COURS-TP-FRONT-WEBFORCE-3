$.noConflict();
jQuery(document).ready(($) => {

    //     $('div').eq(0)
    //     .animate({
    //         'height' : '+=100px'}, 
    //         {   duration: 1000,
    //             easing: 'swing',
    //             complete: () => {
    //                 $('div').eq(0).animate({
    //                     'width' : '+=100px'}, 1000);
    //                 }
    //             });

    //     $('div').eq(1)
    //     .animate({
    //         'width' : '+=100px'}, 
    //         {   duration: 1000,
    //             easing: 'swing',
    //             queue: false })
                
    //    .animate({
    //         'height' : '+=100px'}, 1000);

//correction 

$('div:first') 
    .animate({width: "+=100px"}, 1000)
    .delay(2000)
    .animate({height: "+=100px"}, 1000);

$('div:last')
.animate({width: "+=100px"}, {duration: 1000, queue: false})
.animate({height: "+=100px"}, 1000);


});


// $.noConflict();
// jQuery(document).ready(($) => {


//     $('img').wrap('<div class="bloc"></div>');
   
//     $('.bloc').slice(0, 3).wrapAll('<div class="slide"></div>');
//     $('.bloc').slice(3, 6).wrapAll('<div class="slide"></div>');
   
//     $('.slide').wrapAll('<div class="container"></div>');
// });

//correction

$.noConflict();
jQuery(document).ready(($) => {


    $('img').wrap('<div class="bloc"></div>');
   
    $('.bloc').each((i,e) => {
        if(i%3==0) 
        $(".bloc")
        .slice(i, i+3)  
        .wrapAll('<div class="slide"></div>');
    });
    
    $(".slide").wrapAll('<div class="container"></div>');

});
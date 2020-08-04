$.noConflict();

jQuery(document).ready(($) => {

    //fadeIn(); fadeOut(); fadeToggle();  
    // $('button').on('click', () => {
    //    console.log($('.enfant').fadeOut(5000));
    //    });

    //en rajoutant display: none dans css
    //    $('button').on('click', () => {
    //     $('.enfant').fadeIn(5000);
    //    });

    //    $('button').on('click', () => {
    //     $('.enfant').fadeToggle(5000);
    //    });

    //.slideup()/.slideDown()/.slideToggle()
    // $('button').on('click', () => {
    //     console.log( $('.enfant').slideUp(2000));
    //    });
    //en rajoutant display: none dans css
    //    $('button').on('click', () => {
    //     console.log( $('.enfant').slideDown(2000));
    //    });
    //.slideToggle
    //    $('button').on('click', () => {
    //     console.log( $('.enfant').slideToggle(2000));
    //    });

    //.show()/.hide()/.toggle()

    // $('button').on('click', () => {
    //     console.log($('.enfant').show(2000));
    // });
    // $('button').on('click', () => {
    //     console.log($('.enfant').hide(2000));
    // });
    //    $('button').on('click', () => {
    //     console.log( $('.enfant').toggle(2000));
    //    });


    // $('ul').on('click', () => {
    //   console.log( 
    //      $('ul').slideToggle(2000, () => {
    //          $('button').slideToggle(0)
    //         })
    //     )}      
        
        
    
	// $('.menu').on('click', (e) => {

	// 	if ($(e.currentTarget).next().css('display') == 'none') {
	// 		$('.cache').not(slideToggle(1000);
	// 		$(e.currentTarget).next().css('display', 'block');
	// 	} else {
	// 		$('.cache').slideToggle(1000);
	// 	};
    // });
    
 $('.menu').on('click', (e) => {
        $('.cache').not(($(e.currentTarget)).next()).slideUp(1000);
         $(e.currentTarget).next().slideToggle(1000)
     
     });
});




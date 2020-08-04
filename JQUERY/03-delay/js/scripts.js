// $.noConflict();
// jQuery(document).ready(($) => {

// 	$('div').eq(0).on('click', () => {
// 		$('div').eq(0).css('background', 'red');
// 		setTimeout(() => {$('div').eq(1).trigger('click')}, 1000);	
// 	});

// 	$('div').eq(1).on('click', () => {
// 		$('div').eq(1).css('background', 'blue');
// 			setTimeout(() => {$('div').eq(2).trigger('click')}, 1000);
// 	});


// 	$('div').eq(2).on('click', () => {
// 		$('div').eq(2).css('background', 'yellow')
// 	});


// });

//correction: 

$.noConflict();
jQuery(document).ready(($) => {

	$('.block').eq(0).on('click', e => {
		$(e.currentTarget).css('background', 'red');
		setTimeout(() => {$(e.currentTarget).next().trigger('click')}, 1000);		
	});

	$('.block').eq(1).on('click', (e) => {
		$(e.currentTarget).css('background', 'blue');
			setTimeout(() => {$(e.currentTarget).next().trigger('click')}, 1000);
	});

	$('.block').eq(2).on('click', (e) => {
		$(e.currentTarget).css('background', 'yellow')
	});
});
$.noConflict();
jQuery(document).ready(($) => {

	// let nombre = 0;

	// $('.menu').on('click', (e) => {

	// 	console.log(e);
	// 	console.log(e.currentTarget);
	// 	nombre++;
	// 	if (nombre == 3) { $('.menu').off('click') };

	// 	if (nombre % 2) {
	// 		$('.cache').css('display', 'block');
	// 	}
	// 	else {
	// 		$('.cache').css('display', 'none');
	// 	};

	// });

	// $('.menu').on('click', (e) => {
	// 	$(e.currentTarget).css('color', 'red');
	// 	});



	$('.menu').on('click', (e) => {


		if ($(e.currentTarget).next().css('display') == 'none') {
			$('.cache').css('display', 'none');
			$(e.currentTarget).next().css('display', 'block');
		} else {
			$('.cache').css('display', 'none');
		};
		
	});
	});


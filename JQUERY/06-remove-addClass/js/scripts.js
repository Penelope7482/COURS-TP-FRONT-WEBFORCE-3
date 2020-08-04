$.noConflict();

jQuery(document).ready(($) => {

    $('button')
    .eq(0)
    .on('click', () => {
        $('p')
        .addClass('fantome');
    });

    $('button')
    .eq(1)
    .on('click', () => {
        $('p')
        .removeClass('fantome');
    });

    $('button')
    .eq(2)
    .on('click', () => {
        $('p')
        .toggleClass('fantome');
    });
});


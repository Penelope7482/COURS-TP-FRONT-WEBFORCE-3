$grid = $('.grid');

$grid.isotope({

    itemSelector: '.element-item',
    layoutMode: 'masonry',  
    getSortData: {
        prix: '.prix parseInt',
    },

});


$(".filtre").on("click", (e) => {
    const filtre = $(e.currentTarget).data("filter");
    $grid.isotope({ filter: filtre });
  });

// $('#filters').on( 'click', 'button', function() {
//     console.log('test');
//     var filterValue = $( this ).attr('data-filter');
   
//     $grid.isotope({ filter: filterValue });
//   });

//   $('#sorts').on( 'click', 'button', function() {
//     var sortByValue = $(this).attr('data-sort-by');
//     $grid.isotope({ sortBy: sortByValue });
//   });

  $(".sortBy").on( 'click', (e) => {
  const sortByValue = $(e.currentTarget).attr('data-sort-by');
    $grid.isotope({ sortBy: sortByValue });
  });
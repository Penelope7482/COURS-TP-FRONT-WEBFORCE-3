$.noConflict();
jQuery(document).ready(($) => {


    $('.clone').on('click', () => {

        $('.mouton').eq(0)
        .clone()
        .appendTo('.bergerie');

    });


    $('.surprise').on('click', () => {

        $('<p>Oups</p>').appendTo('.mouton') ;
        $('<img src="img/chat.jpg">').appendTo('.bergerie');
        $('<img src="img/mouton_back.jpg">').replaceAll('.imgMouton');
        $('<a href="index.html"><button class="surprise">recharger la page</button></a>').replaceAll('.surprise');
    });


    // $(".clone").on("click", () => {
    //     $(".mouton:first").clone().appendTo(".bergerie");
    //   });
      
    //   $(".surprise").on("click", () => {
    //     $('<img src="img/chat.jpg" alt="chat">').appendTo(".bergerie");
    //     $("<p>Oups!</p>").insertAfter(".mouton img");
    //     $(".surprise").replaceWith('<a href="index.html">Recharger la page</a>');
    //   });

}); 


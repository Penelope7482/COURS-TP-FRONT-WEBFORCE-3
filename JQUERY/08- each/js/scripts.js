const paris = [
    {
        equipe1: 'A',
        equipe2: 'B',
        gagnant: 'A'
    },
    {
        equipe1: 'C',
        equipe2: 'D',
        gagnant: 'D'
    },
    {
        equipe1: 'E',
        equipe2: 'F',
        gagnant: 'E'
    },
    {
        equipe1: 'G',
        equipe2: 'H',
        gagnant: 'G'
    },
    {
        equipe1: 'I',
        equipe2: 'J',
        gagnant: 'I'
    },
    {
        equipe1: 'K',
        equipe2: 'L',
        gagnant: 'K'
    },
    {
        equipe1: 'M',
        equipe2: 'N',
        gagnant: 'N'
    },
    {
        equipe1: 'O',
        equipe2: 'P',
        gagnant: 'P'
    },
    {
        equipe1: 'Q',
        equipe2: 'R',
        gagnant: 'Q'
    },
    {
        equipe1: 'S',
        equipe2: 'T',
        gagnant: 'T'
    },

];

$.noConflict();
jQuery(document).ready(($) => {


    for (let i = 0; i < paris.length; i++) {

        const para = $('ul').append(`<li>
                        <h2 class="match"> Match n° ${i}</h2>
                        <p>Equipe 1: ${paris[i].equipe1}</p>                        
                        <p>Equipe 2: ${paris[i].equipe2}</p>
                        <p>Le gagnant est: ${paris[i].gagnant}</p>
                     </li>`);

        $('ul').append(para);
    };


    // Correction
// $.each(paris, (i, e) => {
  //   $("li").eq(i).html(
  //   <h2>Match n°${i}</h2>
  //   <p>Équipe 1: ${e.equipe1}</p>
  //   <p>Équipe 2: ${e.equipe2}</p>
  //   <p>Le gagnant est: ${e.gagnant}</p>);
  // });

//   $.each(paris, (i, e) => {
//     const match = $("<li></li>").html(
//     <h2>Match n°${i}</h2>
//     <p>Équipe 1: ${e.equipe1}</p>
//     <p>Équipe 2: ${e.equipe2}</p>
//     <p>Le gagnant est: ${e.gagnant}</p>);
//     $("ul").append(match);
//   });


});





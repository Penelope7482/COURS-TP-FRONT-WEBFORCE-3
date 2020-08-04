

$.noConflict();
jQuery(document).ready(($) => {
    const p = $('p').text();

    console.log(p.length);

    const pMinus = p.replace(p, p.toLowerCase());

    console.log(pMinus);

    const pMinusSansCaract =  pMinus.replace(/\,|\;|\.|\?|\!/g, ' ');
   
    console.log( pMinusSansCaract);

    const decoupage= pMinusSansCaract.split(' ');
let count = 0;
$.each(decoupage, (i,e) => {
        console.log(i);
        console.log(e);
    if (e=="in") count++;
    });
    console.log(count);

//correction: 
//   const lettres= $('p').text().length;
//   console.log(lettres);

//   const nouveauTexte = $('p')
//         .text()
//         .toLowerCase()
//         .replace(/\,|\;|\.|\?|\!/g, ' ')

// const tableauTexte = nouveauTexte.split(" ");
// let count= 0;
// $.each(tableauTexte, (i,e) => {
//     if(e== "in") count ++;
// });

// console.log(count) ;  

});





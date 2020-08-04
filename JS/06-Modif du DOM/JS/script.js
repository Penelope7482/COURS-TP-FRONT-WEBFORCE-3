// test1
// document.write('texte');

//ciblage: 
// document.getElementById('para2').innerText= 'texte à insérer';

// insertion texte dans un paragraphe
// console.log(document.getElementById('para2'));
// document.getElementById('para2').innerText=document.getElementById('para2').innerText + ' texte à insérer';

// Possibilité écriture: avec utilisation de constante pour optimiser

const para = document.getElementById('para2');
para.innerText= para.innerText + 'Texte à insérer';

// en ES6
para.innerText = `${para.innerText} Texte à insérer`;

//mettre le mot 'texte'en gras

para.innerHTML = `${para.innerText} <b>Texte</b> à insérer`;

//getElementsbyClassName -> renvoi un tableau
document.getElementsByClassName('rouge')[0].innerText='texte à insérer';
document.getElementsByClassName('rouge')[1].innerText='texte à insérer';

//getElementsbyTagName -> renvoi un tableau


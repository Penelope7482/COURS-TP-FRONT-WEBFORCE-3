document.querySelector('h1').addEventListener('click', (e) => console.log(e));

document.querySelector('h1').addEventListener('click', monClick);

//externalisation de la fonction:
// function monClick(e){
//     console.log(e);
// }

// et si on externalise les fonctions, plus facile à lire/écrire: 
const monClick = (e) => console.log(e);
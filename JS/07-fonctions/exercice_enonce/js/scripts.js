// const affichage = (a) =>  document.getElementById('fruit').src = a;

// equivalent à :
// function affichage(a) {
//     document.getElementById('fruit').src = a;
// }

const affichage = (fruit) =>  document.getElementById('fruit').src = `./img/${fruit}.jpg`;


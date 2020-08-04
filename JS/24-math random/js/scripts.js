
const couleur = () => Math.floor(Math.random()*(256+1));

const main = document.querySelector('main');

main.style.backgroundColor = `rgb(${couleur()},${couleur()},${couleur()})`;

// console.log(body.style.backgroundColor);
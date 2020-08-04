const img = document.querySelector('img');
const titre = document.querySelector('h1');

img.addEventListener('transitionend', (e) => {
    console.log(e);
    titre.style.color = 'blue';
})
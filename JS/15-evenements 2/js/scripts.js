// console.log( document.querySelector('div').classList);
const popup = document.getElementById('popup');
const main = document.getElementById('main');
let leaveEventCount = 0;

main.addEventListener('mouseleave', () =>  popup.classList.add('d-flex'));
main.addEventListener('mouseenter', function disparaître() {
        
    console.log(leaveEventCount);
     popup.classList.remove('d-flex');    
    if (leaveEventCount++ > 2) {
        main.removeEventListener('mouseleave', () =>  popup.classList.add('d-flex'));
}});


// Correction: 
// const popup = document.getElementById('popup');
// const main = document.getElementById('main');

// let counter = 0;

// const sortie =() => popup.style.display='block';

// main.addEventListener('mouseleave', sortie);

// main.addEventListener('mouseenter', () => {
//         popup.style.display ='none';
//         if (counter++ > 3) main.removeEventListener('mouseleave', sortie);
// });
//
// Correction sans le compteur: 
// const popup = document.getElementById("popup");
// const main = document.getElementById("main");

// main.addEventListener("mouseleave", () => {
//   popup.style.display = "block";
// });
// main.addEventListener("mouseenter", () => {
//   popup.style.display = "none";
// });




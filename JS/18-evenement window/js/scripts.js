console.log(window.scrollY);
console.log(window.scrollX);

const newDiv = document.querySelector('div');


// function scroll(){

//     if(window.scrollY < 150){
        
//         newDiv.style.right= '-100px';
//     } else {
//         newDiv.style.right='0px';

//     }
// }

window.onscroll = () => { newDiv.style.right = (window.scrollY > 150)? '0px' : '-100px'};
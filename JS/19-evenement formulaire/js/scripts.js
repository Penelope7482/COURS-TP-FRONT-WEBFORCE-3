// const form = document.getElementById('formulaire');
// const input = document.getElementsByTagName('input');
// console.log(form);

// c = input.length-1;
// console.log(c);

// form.onsubmit = (e) => {
//    e.preventDefault();
//     // console.log(e);
//     for (let i = 0; i < c ; i++) {
//         if (input[i].value.length < 4) {
//         
//               alert('!! remplir correctement les champs');
//         } 
//         else { console.log(e);}
//     }
// }

// for (let i in input){
//     if (input[i])
// }

// 1ère correction:

// const form = document.querySelector('form');
// const inputs = document.getElementsByClassName('inputText');

// form.onsubmit= (e) => {
//     e.preventDefault();
//     for( let input of inputs) {
//         // console.log(input.value.length);
//         if (input.value.length < 3 ) {
//                 alert('!!remplir les champs avec au moins 3 caract');
//         }
//     }
// }

//2ème correction:

const form = document.querySelector('form');
const inputs = document.getElementsByTagName('input');
 inputs[0].onchange = (e) => {
     console.log(e);        
    }
form.onsubmit = (e) => {
   
    const errors = [];
    for (let input of inputs) {
        // console.log(input.value.length);
        if (input.value.length < 3 && input.getAttribute('type') == "text") {
            errors.push(input.getAttribute('data-error'));

        }
    }
    if (errors.length > 0) {
        e.preventDefault();
        alert(`${errors.toString()} doit avoir au moins 3 caractères`);
    }
}
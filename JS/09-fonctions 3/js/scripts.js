//déclaration variable
const nombreParagraphe = document.getElementsByTagName('p');

//en ternaire

nombreParagraphe.length <= 3 ? alert('Moins de 3') : alert('Plus de 3'); 

nombreParagraphe[0].innerText.length > 150 ? alert('Le paragraphe fait plus de 150 caractères') : alert('Le paragraphe fait moins de 150 caractères');


//en mode classique: 

if (nombreParagraphe.length <= 3) {
    alert('Moins de 3');
} else {
    alert('Plus de 3'); 
}


if(nombreParagraphe[0].innerText.length > 150) {
    
    alert('Le premier paragraphe fait plus de 150 caractères');
} else {
  
    alert('Le premier paragraphe fait moins de 150 caractères');
}


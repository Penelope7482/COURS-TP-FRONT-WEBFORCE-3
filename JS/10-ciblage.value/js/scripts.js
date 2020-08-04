const para = document.getElementById('verification');

function lirePrix() {

    let prix = document.getElementById('monPrix').value;


    if (prix < 5) {
        para.innerText = `On avait dit au minimum 5€`;
    } else if (prix >= 5 && prix <= 10) {
        para.innerText = `Merci et bonne lecture!`;
    } else {
        para.innerText = `Waow! Merci pour ta générosité`;
    }
}



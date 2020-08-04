const dateduJour = new Date();
// console.log(dateduJour);
// const jour = dateduJour.getDate();
// console.log(jour);
// const mois = dateduJour.getMonth()+1;
// console.log(mois);
// const annee = dateduJour.getFullYear();
// console.log(annee);

const para = document.getElementsByTagName('p')[0];

// if (jour < 10 && mois < 10){
// para.innerHTML = `Nous sommes le 0${jour}/0${mois}/${annee}`;
// }else if (jour >= 10 && mois < 10){
//     para.innerHTML = `Nous sommes le ${jour}/0${mois}/${annee}`;
// }else if (jour < 10 && mois > 10) {
//     para.innerHTML = `Nous sommes le 0${jour}/${mois}/${annee}`;
// } else {
//     para.innerHTML = `Nous sommes le ${jour}/${mois}/${annee}`;
// }

const jour = (dateduJour.getDate() >9 ? dateduJour.getDate(): "0" + dateduJour.getDate());
const mois = (dateduJour.getMonth()+1 >9 ? dateduJour.getMonth()+1: "0" + (dateduJour.getMonth()+1));
const annee = (dateduJour.getFullYear() >9 ? dateduJour.getFullYear(): "0" + dateduJour.getFullYear());

para.innerHTML = `Nous sommes le ${jour}/${mois}/${annee}`;

const nombre = 4.232;
const arrondi = nombre.toFixed(2);

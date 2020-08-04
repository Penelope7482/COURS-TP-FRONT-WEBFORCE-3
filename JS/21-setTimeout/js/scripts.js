const para = document.getElementsByTagName('p');
// console.log(para);

// const changeText = () => { para[0].innerText ='Je change...'} ;
// const contenu = () => { para[0].innerText = 'mon contenu...';} ;
// const encore = () => { para[0].innerText = 'comme je veux...';} ;
// setTimeout(changeText, 1000);
// setTimeout(contenu, 2000);
// setTimeout(encore, 3000);

const texte = ['Bonjour...', 'Je change..', 'mon contenu...', 'comme je veux...', ];


for (let i=0; i<texte.length; i++) {
    setTimeout(changeText = () => { para[0].innerText = texte[i] }, 1000*i);
  
};



//Correction avec répétition de la phrase à l'infinie
// const titre = document.getElementsByTagName("h1")[0];

// const textes = [
//   "je change …",
//   "mon contenu …",
//   "comme je veux …",
//   "bonjour ...",
// ];

// function infini() {
//   for (let i = 0; i < textes.length; i++) {
//     const temps = (i + 1) * 1000;
//     setTimeout(() => {
//       titre.innerText = textes[i];
//     }, temps);

//   }
//   setTimeout(() => {
//     infini();
//   }, textes.length * 1000);
// }

// infini();

const nouvelleFigure = document.createElement('div');
const conteneur = document.getElementById('main')
conteneur.appendChild(nouvelleFigure);

nouvelleFigure.style.cssText = "width:100px; height:100px; background:blue; position:absolute; top:50%; left:50%; transform: translate(-50%, -50%); z-index:300";
nouvelleFigure.setAttribute('class', 'figure');

const figure = document.querySelectorAll('div');

for (let i=0; i<figure.length; i++ ) {


document.addEventListener('keydown', e => {
    if (e.keyCode == 83) {
        figure[i].style.borderRadius = '50%';
    }
    else {
        figure[i].style.borderRadius = '0%';
    }
});

document.addEventListener('keyup', () => {

    figure[i].style.borderRadius = '0%';
});
}

// correction possible: 
// const div = document.createElement("div");
// const body = document.querySelector("body");
// div.style.cssText = "width: 100px; height: 100px; background: white;";
// body.style.cssText =
//   "min-height: 100vh; display: flex; justify-content: center; align-items: center;  background: black;";

// body.appendChild(div);

// document.addEventListener("keydown", (e) => {
//   if (e.keyCode == 83) {
//     div.style.borderRadius = "50%";
//   }
// });
// document.addEventListener("keyup", (e) => {
//   if (e.keyCode == 83) {
//     div.style.borderRadius = "0%";
//   }
// });


// const touche = (e) => {
//   div.style.borderRadius =
//     e.keyCode == 83 && e.type == "keydown" ? "50%" : "0%";
// };
// document.addEventListener("keydown", touche);
// document.addEventListener("keyup", touche);
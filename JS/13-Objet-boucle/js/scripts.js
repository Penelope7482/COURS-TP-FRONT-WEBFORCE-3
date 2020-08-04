const tourisme = [
        {
                ville: 'Lyon',
                site: 'https://www.lyon.fr/',
                gastronomie: 'quenelles',
                expression: 'gones'
        },
        {
                ville: 'Marseille',
                site: 'https://www.marseille.fr/',
                gastronomie: 'bouillabaisse',
                expression: 'fada'
        },
        {
                ville: 'Bordeaux',
                site: 'https://bordeaux.fr/',
                gastronomie: 'canelé',
                expression: 'gavé'
        }
];

// test1: affichage d'une div dans main
// document.getElementsByTagName('main')[0].innerHTML=`<a href="https://marseille.fr/"><div><h2>Marseille</h2><ul><li>bouillabaisse</li><li>fada</li></ul></a>`

//test2: affichage d'une deuxième div à la suite
// document.getElementsByTagName('main')[0].innerHTML=document.getElementsByTagName('main')[0].innerHTML+`<a href="https://marseille.fr/"><div><h2>Marseille</h2><ul><li>bouillabaisse</li><li>fada</li></ul></a>`

//test3: récup les données du tableau
// for (let j in tourisme) {
//   console.log(tourisme[j]);
//    console.log(tourisme[j].ville);
// }

//test4: afficher les données des objets
// for (let caract in city) {
//         //  console.log(city[caract]);
//         //  console.log(city);               
// }

for (let city of tourisme) {
        // document.querySelector('main').innerHTML = document.querySelector('main').innerHTML +
        // `<a href="${city.site}">
        //         <div>
        //                 <h2>${city.ville}</h2>
        //                 <ul>
        //                    <li>${city.gastronomie}</li>
        //                    <li>${city.expression}</li>
        //                 </ul>
        //         </div>
        // </a>`

        document.querySelector('main').innerHTML += 
        `<a href="${city.site}">
                <div>
                        <h2>${city.ville}</h2>
                        <ul>
                           <li>${city.gastronomie}</li>
                           <li>${city.expression}</li>
                        </ul>
                </div>
        </a>`
}








var drake = dragula({
    copy: true
});

td = document.getElementsByClassName('td');
// console.log(td);
// console.log(document.getElementsByClassName('td')[0]);

for (let i in td) {

    // console.log(td[i]);

    drake.containers.push(td[i]);

};
const tableau = [td[0], td[1], td[2], right];
/*Pour drag and drop + copy*/
var drake = dragula(tableau, { copy: true, revertOnSpill: false, copySortSource: true });
/*Pour effacer d'un conteneur*/
var exemple = dragula([td[0]], { removeOnSpill: true });

/*Non terminé : Pour superposer un drag and drop si un emplacement est déjà plein et supprimer l'élément précédent / ou superposer le dernier élément dragué: fonction à écrire*/

drake.on('drop', function (el, target, source, sibling) {
    console.log('tada');
    console.log(el);
    console.log(target);
    console.log(source);
    console.log(sibling);
    document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow';
});

/*Pour ajouter une action lors d'un évènement*/
// exemple1
exemple.on('drag', function (el, target, source, sibling) {
    document.getElementsByTagName('body')[0].style.backgroundColor = '#28a0ef';
});
// exemple2
exemple.on('dragend', function (el) {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
});



//ex medium.com
// let one = document.querySelector('#container1')
// let two =  document.querySelector('#container2')

// var drake = dragula([ one, two ], {copy: true})

// drake.on('drag', function(el,source) {
//   document.getElementsByTagName('body')[0].style.backgroundColor = '#28a0ef';
// })
// drake.on('drop', function(el, target){
//     el.style.border = '5px dashed white';
//   el.innerText = "Drag MEEEE :)"
//     document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
// })
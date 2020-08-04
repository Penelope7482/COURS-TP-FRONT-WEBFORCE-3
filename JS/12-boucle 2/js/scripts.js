// const test = document.getElementsByTagName('img')[0].src="img/1.jpg";
// console.log(test);

// console.log(photo);


// const photo = document.getElementsByTagName('img');

// for (let i=0; i<photo.length; i++) {

//         photo[i].src=`img/${i+1}.jpg`;
//         photo[i].style.opacity=0.15 * (i+1);
// }

const photo = [...document.getElementsByTagName('img')];
console.log(photo);
for (let i in photo) {
        const j = +i + 1;
        //ou const j = parseInt(i) + 1
        photo[i].src = `./img/${j}.jpg`;
        photo[i].style.opacity = 0.15 * j;
}
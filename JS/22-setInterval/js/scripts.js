let i = 9;
const para = document.getElementsByTagName('p')[0];
const repetition = setInterval(decompte = () => {
    para.innerText = i;
    //  console.log(i);
    if (i == -1) {
        para.innerText = 'Boum c\'est la fête!';
        clearInterval(repetition);
    }
    i--;
}, 1000);


//correction
// const para = document.getElementsByTagName('p');
// let i = partseInt(titre.innerText);
// const repetition = setInterval(() => {
//     i--;
//     if (i == 0) {
//         para[0].innerText = 'Boum c\'est la fête!';
//         clearInterval(repetition);
//     }
//     else {
//         para[0].innerText = 'i';
//     }}, 1000);
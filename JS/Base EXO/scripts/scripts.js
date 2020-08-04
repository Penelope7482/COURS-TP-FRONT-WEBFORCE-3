const texte = 'De nombreuses inexactitudes ont été rapportées au sujet d\'Al Capone dans les journaux, les magazines, les livres et les films. La plus fréquente est que, à l\'instar des gangsters de l\'époque, il est né en Italie, ce qui est complètement faux. Ce véritable tsar du crime était un produit local, "made in America".'
const div1=document.getElementsByTagName('div')[1];
const para = document.getElementsByTagName('p');

document.getElementById('image').src="./img/alcapone.jpg";

document.getElementById('cacher').style.display='none';

div1.style.backgroundColor='black';
div1.style.color='white';
div1.style.fontStyle='italic';
// équivalent à: 
// div1.style.cssText="background-color: black; color: white; font-style: italic";

document.getElementsByTagName('h2')[0].style.textDecoration='underline';


para[0].innerText=texte;
para[1].innerText=texte;
para[2].innerText=texte;




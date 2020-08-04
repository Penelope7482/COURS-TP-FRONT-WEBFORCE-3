const table = ['valeur1' , 'valeur2', 'valeur3'] ;

const para = document.getElementsByTagName('p');

// const paras = [...document.getElementsByTagName('p')];

const paras = [...para];


for (let i in table) {
	console.log(table[i]) ;
}			

for (let i in para) {
        console.log(i);
}

for (let i in paras) {
        console.log(i);
}





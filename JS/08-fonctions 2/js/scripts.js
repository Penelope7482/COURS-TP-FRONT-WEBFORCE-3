const personne = [
    {
        prenom: 'maria',
        anneeNaissance: '1980'
    },
    {
        prenom: 'Antoine',
        anneeNaissance: '2000'
    },
    {
        prenom: 'Rob',
        anneeNaissance: '1990'
    }
]

for (i = 0; i < personne.length; i++) {
    const identity = (a, b) => `<p>Cette année, ${a} a ${2020 - b} ans.</p>`;
    document.getElementsByClassName('center')[0].innerHTML = document.getElementsByClassName('center')[0].innerHTML + identity(personne[i].prenom, personne[i].anneeNaissance);
}


// const identity = (a) =>  document.getElementsByTagName('p')[a].innerText = `Cette année, ${personne[a].prenom} a ${2020 - personne[a].anneeNaissance} ans.`

//ou

// const identity = (a, b, c) => document.getElementsByTagName('p')[c].innerText = ` Cette année, ${a} a ${2020 - b} ans.`;

//  identity('Maria', 1980, 0);
//  identity('Antoine', 2000, 1);
// identity('Rob', 1990, 2);

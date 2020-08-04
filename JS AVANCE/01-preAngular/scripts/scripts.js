const courses = [
        {produit: 'stylo', prix:2, quantite :5},
        {produit: 'imprimante', prix:200, quantite :1},
        {produit: 'cutter', prix:2.5, quantite :2},
        {produit: 'feuilles', prix:10, quantite :1},
];


const produits = courses.map((course) => course.produit);
console.log(produits);

const totalCommande = courses.reduce((cumul, course) => cumul + course.prix*course.quantite, 0);
console.log(totalCommande);

const sup10 = courses.filter((course) => course.prix >= 10);
console.log(sup10);

const totalParProduit = [];
const prodTotal = courses.map ((course) => {
    return {nom: course.produit, total: course.prix*course.quantite};
    });

console.log(prodTotal);

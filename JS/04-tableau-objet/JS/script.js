const classe =[
    {nom:'Sylvain', rangée:'droite', ligne:1},
    {nom:'Jonathan', rangée:'droite', ligne:2},
    {nom:'Jean', rangée:'gauche', ligne:2},
    {nom:'Pénélope', rangée:'gauche', ligne:1},
 ];

 console.log(`${classe[2].nom} est assis à ${classe[2].rangée}, ligne ${classe[2].ligne}`);

 for (let i=0; i < classe.length; i++) {
     console.log(`${classe[i].nom} est assis à ${classe[i].rangée}, ligne ${classe[i].ligne}`);
 }
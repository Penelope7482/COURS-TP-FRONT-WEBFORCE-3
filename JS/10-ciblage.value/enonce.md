En HTML, créez la structure suivante :

p : ‘Je sors un nouveau livre vendu à prix libre (min 5€):’
input (number) id: ‘monPrix’
span : €
bouton : ‘Payer’
p vide id: ’verification’

En javaScript, et à l’aide d’une condition : 

Si le prix qu’à inscrit l’utilisateur est strictement inférieur à 5 :
Message à afficher dans p#verification : ’ On avait dit au minimum 5€ :)’

Si le prix qu’à inscrit l’utilisateur est égale ou supérieur à 5 et inférieur ou égal à 10 :
Message à afficher dans p#verification : ’ Merci et bonne lecture!’

Si le prix qu’à inscrit l’utilisateur est strictement supérieur à 10 :
Message à afficher dans p#verification : ’ Waow! Merci pour ta générosité!’

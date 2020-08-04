const monMessage = prompt ('Quelle est votre boisson préférée?', 'Café, Thé, Bière, Vin, Cocktail') ;

let text;

switch(monMessage) {
	case 'Café', 'cafe', 'Cafe', 'café':
        text = 'Rien ne remplace un bon café!' ;     
	break ;
	case 'Thé', 'the' : 
        text = 'Un thé bien chaud à l\'anglaise' ;
        
	break ;
	case 'Bière' : 
        text = 'Très bon choise, mails il faut des toilettes pas loin' ;
        
	break ;
	case 'Vin' : 
        text = 'Blanc sur rouge rien  ne bouge, sinon tout fout l\'camp' ;
        
	break ;
	case 'Cocktail' : 
        text = 'C\'est assez vaste comme réponse' ;        
	break ;
	
	default :
        text = 'C\'est bien aussi.. Mais c\'est quoi en fait' ;        
    }
    alert (text);
    
    

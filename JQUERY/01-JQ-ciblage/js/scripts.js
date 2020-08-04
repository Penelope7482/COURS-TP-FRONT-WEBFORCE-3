window.addEventListener('load',  () => {
	if(window.jQuery){
		alert('Le script est chargé ') ;
	}else {
		alert(' Problème avec le script ') ;
	}
}) ;

// 2.
// Utilisez «  children », « find », « next », « prev », « parent », « eq »

// Pour permettre les résultats suivants :
// 1. Le texte du paragraphe de section doit être de couleur rouge, mais pas celui de aside (children)
// 2. Tout les h2 de section doivent avoir une marge de 50px de tout les côtés (find)
// 3. Le paragraphe suivant celui qui a la class «  test » ne doit pas être affiché (next)
// 4. Le paragraphe précédent celui qui a la class «  test » doit être souligné (prev)
// 5. Le formulaire doit avoir un fond gris, mais sans l’appeler lui directement (parent)
// 6. Le premier input du formulaire doit avoir un fond rouge (eq)
$.noConflict();
jQuery(document).ready(($) => {
$('section').children('p').css('color', 'red');
$('section').find('h2').css('margin', '50px');
$('.test').next().css('display', 'none');
$('.test').prev().css('text-decoration', 'underline');
$('fieldset').parent().css('background-color', 'grey');
$('input').eq(0).css('background-color', 'red');
});


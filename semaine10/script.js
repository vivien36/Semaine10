$gingerman = document.getElementById("gingerman");
$affichage = document.getElementById("affichage");
$multiplicateur = document.getElementById("multiplicateur");
$autoclick = document.getElementById("autoclick");
$info = document.getElementById("info");
$info2 = document.getElementById("info2");
$info3 = document.getElementById("info3");
$info4 = document.getElementById("info4");
$info5 = document.getElementById("info5");
$info6 = document.getElementById("info6");
$tresor = document.getElementById("tresor");
$ami = document.getElementById("ami");
$bonus = document.getElementById("bonus");
$nourriture = document.getElementById("nourriture");

affichageGobelin = 2000;    
affichage =1;
multi=1;
multiAuto=1;
nbrAmi=0;
faim=500;
$affichage.innerHTML = "Nombre de clic : " + affichage ;
$info.innerHTML ="Gingerman vient de se faire dérober son trésor et kidnapper ses amis. Cliquez dessus pour augmenter votre score et rattraper ce gobelin.";
$info2.innerHTML = "Nombre d'ami(s): " + nbrAmi+"/6";
var tresor = document.getElementById("tresor");

var elmt = document.getElementById("gingerman");
tresor.style.display = "none";
nourriture.style.display = "none";

/*BARRE CENTRALE POUR LA ROUTE*/
function route() {
	if (affichageGobelin - affichage <1900 && affichageGobelin - affichage >1700){
		$('#mini1').animate({
			marginLeft: '10%'
	});
}
	else if (affichageGobelin - affichage <=1700 && affichageGobelin - affichage >1500){
		$('#mini1').animate({
			marginLeft: '20%'
	});
}
	
	else if (affichageGobelin - affichage <=1500 && affichageGobelin - affichage >1300){
		$('#mini1').animate({
			marginLeft: '30%'
	});
}
	else if (affichageGobelin - affichage <=1300 && affichageGobelin - affichage >1000){
		$('#mini1').animate({
			marginLeft: '40%'
	});
}
	else if (affichageGobelin - affichage <=1000 && affichageGobelin - affichage >600){
		$('#mini1').animate({
			marginLeft: '50%'
	});
}
	else if (affichageGobelin - affichage <=600 && affichageGobelin - affichage >300){
		$('#mini1').animate({
			marginLeft: '60%'
	});
}
	else if (affichageGobelin - affichage <=300 && affichageGobelin - affichage >100){
		$('#mini1').animate({
			marginLeft: '70%'
	});
}
	else if (affichageGobelin - affichage <=100 && affichageGobelin - affichage >10){
		$('#mini1').animate({
			marginLeft: '80%'
	});
}
	else if (affichageGobelin - affichage <=10){
		$('#minitresor').animate({
            opacity: '1',
            height: '50px'
});
		
		$('#mini2').animate({
            opacity: '0',
            height: '0px'
});
		$('#mini1').animate({
			marginLeft: '90%'
	});
	
}
	
	}
/*APPARITION DU GOBELIN*/
function apparitionGobelin() {
	$info4.innerHTML = "Et comme si voler ton trésor n'était pas suffisant,j'ai aussi fait prisonnier tout tes amis !.Si tu veux me rattraper il va falloir cliquer...";
	$info6.innerHTML = "Facile ? sauf que cette banane de codeur n'à pas fait attention et m'à laissé 2000 clic d'avance. MUAH AH AH !!!";
	clicautogob();
	clicgob();
	$('#textGob').fadeIn("slow");
	$(document).ready(function(){
	$('#figure7').animate({
            paddingLeft: '0px',
            opacity: '1',
            height: '200px'
});
});
}
setTimeout(apparitionGobelin, 2000);

/*CONDITION D'AFFICHAGE DES AMIS*/
function afficherFigure(){ 
	if ( affichage >= 200 && nbrAmi ==0){
		nbrAmi+=1;
		affichage = affichage - 200;
		$('#figure1').fadeIn("slow");
		$('#nourriture').fadeIn("slow");
		$info3.innerHTML = "Un clone de Gingerman...L'avantage c'est qu'il clique tout seul,autant en profiter.Maintenant que Gingerman à délivré un ami,il va falloir le nourrir...";
		$info6.innerHTML = "Tu ne retrouvera jamais les autres.";
		setInterval(clic, 1000);
		setInterval(manger, 1000);
		info2();
	}else if ( affichage >= 200 && nbrAmi ==1){
		nbrAmi+=1;
		affichage = affichage - 200;
		$('#figure2').fadeIn("slow");
		$info3.innerHTML = "Le lutin va vous donner un petit coup de pouce";
		setInterval(clic, 1000);
		info2();
	}else if ( affichage >= 200 && nbrAmi ==2){
		nbrAmi+=1;
		affichage = affichage - 200;
		$('#figure3').fadeIn("slow");
		$info3.innerHTML = "Tux est de la partie,ça va cliquer !";
		$info6.innerHTML = "De toute façon j'en pouvait plus d'entendre se pingouin jaboter.";
		setInterval(clic, 1000);
		info2();
	}else if ( affichage >= 200 && nbrAmi ==3){
		nbrAmi+=1;
		affichage = affichage - 200;
		$('#figure4').fadeIn("slow");
		$info3.innerHTML = "Vous avez délivré le mouton cliqueur...";
		$info6.innerHTML = "Oh non,pas le mouton cliqueur,je voulais le tondre pour me faire un pull.";
		setInterval(clic, 1000);
		info2();	
	}else if ( affichage >= 200 && nbrAmi ==4){
		nbrAmi+=1;
		affichage = affichage - 200;
		$('#figure5').fadeIn("slow");
		$info3.innerHTML = "Casper le gentil fantome,il peine à cliquer mais ça lui fait plaisir...";
		setInterval(clic, 1000);
		info2();
	}else if ( affichage >= 200 && nbrAmi ==5){
		nbrAmi+=1;
		affichage = affichage - 200;
		$('#figure6').fadeIn("slow");
		$info3.innerHTML = "Un poisson hysterique radioactif ! Le dernier ami de Gingerman est délivré.";
		$info6.innerHTML = "NON !!! Tu viens de délivrer le dernier de tes amis !."
		setInterval(clic, 1000);
		info2();
	}else if ( nbrAmi == 6 ){
		$info3.innerHTML = "Tout les amis de Gingerman sont présent.";
	}else{
		$info3.innerHTML = "Vous n'avez pas assez de clic.";
	}
	
}
/*CACHER LE TRESOR TANT QUE LE NOMBRE DE CLIC N'EST PAS SUFFISANT*/
function afficherCacher(){
	if (affichage >= 100 && affichage <150) {
		$info.innerHTML = "Déja 100 clic et je ne vois toujours pas ce gobelin.";
		$info4.innerHTML = "Tu peux toujours cliquer,ça ne changera pas le sort que je reserve à tes amis.";
	}else if (affichage >= 500 && affichage <700) {
		$info.innerHTML = "Mais ou est passé ce gobelin ?";
		$info4.innerHTML ="Tu ne me rattrapera jamais à ce rythme,il faut que je te donne quelques clic ?";
	}else if (affichage >= affichageGobelin && nbrAmi ==6) {
		$info.innerHTML = "Bravo! Vous venez d'aider Gingerman à retrouver son trèsor et tout ses amis. Vous avez arrêté ce gobelin. FELICITATION !";
		$info4.innerHTML ="Ok,tu as gagné...J'abandonne...Mais je reviendrais plus fort la prochaine fois !";
	}else if (affichage >= affichageGobelin) {
		$info.innerHTML = "Bravo! Vous venez d'aider Gingerman à retrouver son trèsor mais il lui manque encore des amis...";
		$info4.innerHTML = "Tu m'à eu et tu as repris ton trèsor, mais tu n'as délivré que "+ nbrAmi +"ami(s)";
	}else{
		tresor.style.display = "none";
	}
}
/*AFFICHAGE DU NOMBRE D'AMIS RETROUVE*/
function info2() {
	$info2.innerHTML = "Nombre d'ami(s): " + nbrAmi+"/6";
}

/*AFFICHAGE DU NOMBRE DE CLIC*/
function score(){
	 $affichage.innerHTML = "Nombre de clic : " + Math.round(affichage);

}
/*GINGERMAN DEVIENT PLUS PETIT QUAND IL EST CLIQUE*/
function mouseDown() {
    elmt.style.height = "117px";
}

function mouseUp() {
    elmt.style.height = "120px";
}
/*CALCUL DES POINTS PAR CLIC*/
function clic() {
    affichage = affichage + multi;
	score();
	afficherCacher();
}
/*COMPTEUR DU GOBLIN*/
function clicgob(){
	if (affichage >= affichageGobelin){
		$('#tresor').fadeIn("slow");
		affichageGobelin = 0;
	}else{
	affichageGobelin=affichageGobelin + 6 + (nbrAmi * 2);
	$info5.innerHTML = "Nombre de clic: " + affichageGobelin;
	route();
	}
}
function clicautogob(){
	setInterval(clicgob, 1000);



}


/*MESSAGES ET COLORATION DU BOUTON "AJOUTER 50 BISCUITS"*/
function manger(){
	afficherBiscuit();	
	if (faim >= 500) {
		faim=500;
		
	}else if (faim >= 200) {
		affichage = affichage;
		nourriture.style.borderColor = "green";
	}else if (faim <200 && faim >=100 && affichage >=0){
		affichage= (affichage -(0.5*nbrAmi));
		$info3.innerHTML = "Vos amis clique moins vite pour éconnomiser les biscuits !";
		nourriture.style.borderColor = "orange";
	}else if(faim <100 && faim >=0 && affichage >=0){
		affichage= (affichage -(1*nbrAmi));
		$info3.innerHTML = "Vos amis arrêtent de cliquer,donnez leur des biscuits !";
		$info6.innerHTML = "Faudrait peut être penser à les nourrir !";
		nourriture.style.borderColor = "red";
	}else if (faim<0){
		affichage= (affichage -(1*nbrAmi));	
		$info3.innerHTML = "Vos amis ont très faim !";
		$info6.innerHTML = "C'est comme ca que tu t'occupe de tes amis !";
		nourriture.style.borderColor = "red";
		faim=0;
	}	
}
/*AJOUT DE 50 BISCUITS*/
function nourrir(){
	if (faim <= 450) {
		faim = faim + 50;
		$info3.innerHTML = "50 biscuits ont été ajouté."
	}else{
		$info3.innerHTML = "Le stock de biscuits risque de déborder."
}
}
/*FONCTIONNEMENT DU MULTIPLICATEUR*/
function incrementer() {
	if (affichage >= prix()) {
		affichage = affichage-prix();
		multi = multi + 1;
		score();
		afficherMultiplicateur();
		$info3.innerHTML = "Multiplicateur X" + multi + " activé !" ;
	}else {
		$info3.innerHTML = "Vous n'avez pas assez de clic";
	}
	
}
/*MAJORATION DU PRIX DES BONUS*/
function prix() {
	return 10 * multi * multi;
}

function prixAuto() {
	return 50 * multiAuto * multiAuto;
}
/*AFFICHAGE DANS LES BOUTONS*/
function afficherMultiplicateur(){
	$multiplicateur.innerHTML = "Multiplicateur X" + multi + " prix du prochain :" + prix() ;
}

function afficherClickAuto(){
	$autoclick.innerHTML = "Click Auto X" + multiAuto + " prix du prochain :" + prixAuto() ;
}
function afficherBiscuit(){
	$nourriture.innerHTML = "Ajouter 50 biscuits : " + faim+"/500";
	faim = faim - 1 * nbrAmi;
}
/*FONCTION POUR LE CLICK AUTO*/
function auto() {
	if (affichage >= prixAuto()) {
		affichage = affichage-prixAuto();
		multiAuto = multiAuto +1;
		setInterval(clic, 500);
		afficherClickAuto();
		afficherCacher()
		$info3.innerHTML = "Click Auto X" + multiAuto + " activé !";
		
	}else {
		$info3.innerHTML = "Vous n'avez pas assez de clic";
	}
}
/*FONCTION POUR LE BOUTON "TENTER SA CHANCE"*/
function hazard(){
	if (Math.round(Math.random() * 100)< 25 && Math.round(Math.random() * 100)>= 0 && affichageGobelin !== 0){
		affichageGobelin = affichageGobelin + 200;
		$info3.innerHTML = "Le gobelin remporte 200 clic ";/**/
		$info6.innerHTML = "La chance me sourit, allez Ginger,clic ! ";
		score();
		afficherCacher();
	}else if (Math.round(Math.random() * 100)< 25 && Math.round(Math.random() * 100)>= 0 && affichageGobelin == 0){
		affichage = affichage * 0.7;
		$info3.innerHTML = "Vous avez perdu "+Math.round((affichage/0.7)-affichage)+" clic" ;
		score();
		afficherCacher();	
	}else if (Math.round(Math.random() * 100)>= 25&& Math.round(Math.random() * 100)<=50){
		affichage = affichage * 0.9;
		$info3.innerHTML = "Vous avez perdu "+Math.round((affichage/0.9)-affichage)+" clic" ;
		score();
		afficherCacher();	
	
	}else if (Math.round(Math.random() * 100)>= 55){
		affichage = affichage * 1.3;
		$info3.innerHTML = "Vous avez gagné "+(Math.abs(Math.round ((affichage/1.3)-affichage))) +" clic";
		score();
		afficherCacher();
	}else{
		affichage = affichage + 500;
		$info3.innerHTML = "Vous avez gagné 500 clic";
		score();
		afficherCacher();
	}
}

/*ACTIVATION DES BOUTONS*/
$nourriture.onclick = nourrir;
$bonus.onclick = hazard;
$ami.onclick = afficherFigure;
$autoclick.onclick = auto;
$gingerman.onclick = clic;
$multiplicateur.onclick = incrementer;
afficherMultiplicateur();
afficherClickAuto();



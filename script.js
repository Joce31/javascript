// je suis un commentaire
/* je
suis
un 
commentaire
sur
un 
bloc
*/
// et ici j'affiche la console du navigateur//
console.log ("hello world!");

// variables
//decalaration
let variable;
const maVar="ma constante"; /* pas d'incrementation sur const car invariable*/


//assignation
variable=2;
console.log(variable);
console.log(maVar);

// re-assignation
variable=10;
console.log(variable);
//maVar="ma  nouvelle constante";
console.log(maVar);

// les types de données
/* les types primitif :
        + number (int, float)
        +string( "chaines de caracteres")
        +boleen (true or false)
        +undefined
        +null

    les types non-primitifs:
        +object
        +array ( tableau)
        +fonction
*/

/*let varUndef;
console.log(varUndef); //retourne undefined car variable declarer mais vide
console.log(varUndefdeux);// retourne une erreur car variable non decalré*/

//concatenation !  elle se fait avec des +
//let concat = varundef + maVar;
//console.log(concat);

varUndef=20;
varUndef = " bonjour tout le monde !";

console.log(varUndef);

let varNom="lebon";
let varAge=38;
let varBienvenue="Bonjour jocelyn " + varNom + " tu as " + varAge +" ans aujourd’hui, c’est la fiesta !";

console.log(varBienvenue);

// calcul number

/*addition: +
soustraction : -
division : /
multiplication : *
modulo : %
*/

let operation = 8/2; // resultat 4
let a = 8;
let b = 2 ;
console.log(a/b);

//les strings
let string="hello world !";
string[0];
console.log(string[0]); // comme pour les tableaux on demande la lettre 0 de la phrase donc le "h"
console.log(string.length); // va afficher le nombre de lettres , la longueur de ma string

let phrase = "\"salut joce \" me repond-il"; // l'antislash est un caractere d'echappement :

phrase = '"salut joce" me repond-il"'; // sinon utiliser les apostrophes : '

phrase = `"salut joce
me repond-il"`; // utilisation des backtick ( altgr+7) pour faire des templates string (passage a la ligne)

console.log(phrase);

let nombre = 20;
let phraseDeux = `bonjour, j'ai ${nombre} ans`// en utilisant les backtick, on peut blinder une variable, introduire une variable dans la chaine de caratere a la place de la concatenation

console.log(phraseDeux);

// fonctions interessantes sur les strings
/*
    +concat() concatener 2 string
    +repalce() remplacer des caracateres par d'autres
    +slice() extraire une partie de la string
    +substring() extraire aussi une partie de la string
    +split() decouper une string en plusieurs string
    +trim()  supprimer les esapces au debut et la fin de la string
    +parseInt() convertir la string en nombre
*/

/*1) Aller se renseigner sur la fonction concat() 
2) créer 2 variables avec dans chacune une string
3) utiliser concat() pour afficher les 2 variables dans une même string*/
var string1="hello";
var string2=" joce";
var string3=string1.concat("",string2);
console.log(string3);

/*1) Aller se renseigner sur replace()
2) créer une variable phrase : "Je suis une phrase que je vais modifier."
3) remplacer le mot "modifier" par "utiliser".
4) afficher la nouvelle phrase*/
var string1= " Je suis une phrase que je vais modifier. ";
var string2= string1.replace( "modifier", "utiliser");
console.log(string2);

/*1) Aller se renseigner sur slice()
2) créer une variable : "Je suis une phrase que je vais modifier."
3) utiliser slice() pour récupérer "Je suis une phrase"
4) afficher cette nouvelle string*/
string1=" Je suis une phrase que je vais modifier. ";  // si les nombres sont inversé ca renverra un vide
string2=string1.slice(0,19);
console.log(string2);

/*1) Aller se renseigner sur substring()
2) créer une variable : "Je suis une phrase que je vais modifier."
3) utiliser substring() pour récupérer "Je suis une phrase"
4) afficher cette nouvelle string*/
string1=  " Je suis une phrase que je vais modifier. "; // la difference avec slice c'est qu'il va remettre dans l'ordre les chiffres mais lui ne prend pas les nombres negatifs
string2= string1.substring(0,19);
console.log(string2);

/*1) Aller se renseigner sur split()
2) créer une variable : "Je suis une phrase que je vais modifier."
3) utiliser split() pour découper la phrase à chaque espace
4) afficher le tableau contenant chaque strin*/
string1=  " Je suis une phrase que je vais modifier. "
string2= string1.split(" ", 8 ); // il prend la phrase comme un tableau et va prendre les elements jusqu'a 8 par ex
console.log(string2);

/*1) Aller se renseigner sur trim()
2) créer une variable : "     Je suis une phrase que je vais modifier.      "
3) afficher la phrase en enlevant les espaces de début et de fin*/
string1=  " Je suis une phrase que je vais modifier. "
string2= string1.trim();
console.log(string2);

string1= "Je suis une phrase que je vais modifier .";
num = parseInt(string1);
console.log(num);

//pas necessaire de declarer les variables avec "let"car ce sont les memes tout au long de lexrecice.


/*
maPhrase = "100000";
console.log(maPhrase);
console.log(typeof maPhrase);
resultat = parseInt(maPhrase);
console.log(resultat);
console.log(typeof resultat);*/


// les tableaux
//decalaration

let tab = new Array("chat","chien","perroquet","poisson");
console.log(tab);

let newTab = ["voiture","moto","avion","bateau"];
console.log(newTab);

//Acces a une valeur
console.log(tab[1]);
//retourne chien

tab[1]="hamster";
console.log(tab[1]);

//ajouter une valeur
tab.push("tortue"); // ajoute a la fin du tableau 
console.log(tab);

tab.unshift("requin"); // ajoute au debut
console.log(tab);

//supprimer une valeur
newTab.pop();// supprimer la derniere valeur du tableau
console.log(newTab);

newTab.shift();//supprimer la veleur du debut
console.log(newTab);

// les fonctions
// decalaration 
function nomFunction(param1,param2){
    //instruction de la fonction
    let result = param1 * param2;
    return result; // une fois que la fonction arrive au retrun c'est FINI
}
console.log(nomFunction(3,4)); //affiche 12

function maFunction(param1 = 5 , param2 = 5){
    let result = param1 * param2;
    return result;
}
console.log(maFunction());// affiche la multiplication de 5*5
console.log(maFunction(2,5)); // affiche 10 et ne prends plus les valeurs par default

// portée des variables (scop)

let maVariabledeux;
function manewFunction(param1,param2){
    let result = param1* param2;
    let maVariabledeux
}



/*Créer 2 variables
•    nom
•    prénom 
Créer un tableau phrase et on y ajoute
•    Le nom 
•    Le prénom
•    Les initiales
Afficher le tableau dans la console le nom le prénom et les initiales*/
let Nom = "lebon";
let Prenom = "joce";
let newPhrase = [];
newPhrase.push("lebon");
newPhrase.push("joce");
newPhrase.push("lebon"[0]+"."+"joce"[0]);

console.log(newPhrase);

let Nom1 = "lebon";
let Prenom1 = "joce";
let newPhrase1 = [ Nom1,Prenom1,Nom1[0]+ ","+ Prenom1[0]];

console.log(newPhrase1);


/*Créer 2 variables 
    noteA
    noteB
Créer une fonction qui va calculer la moyenne et qui retourne le résultat
Afficher le résultat dans un console.log*/

let noteA=4;
let noteB=5.

function maMoyenne(note1,note2){
    return (note1 + note2) /2
}
let resultat = maMoyenne (noteA,noteB); // OU JUSTE CONSOLE.LOG(maMoyenne);
console.log(resultat);


// methode reduce();

let note1 = 8;
let note2 = 9;
const notes = [note1, note2];
/*
const calculateAverage = (notes) => {
  return notes.reduce(function(acc, curr) {acc + curr}) / notes.length;
};

const average = calculateAverage(notes);

console.log("La moyenne est : " + average);

*/
let tabNote = [10,13,20];

function moyenneReduce(tab) {
  return notes.reduce(function(acc, curr) {
    return acc + curr;
  }) / tab.length;
}

const average = moyenneReduce(tabNote);

console.log("La moyenne est : " + average);



//TABLEAu : METHODE MAP() et FILTER()
//map() : applique une fonction à chaque élément d'un tableau, et rtetourne un nouveau tableau

let tabOrigin = [1,2,3,4];
let tabOriginDeux = [5,6,7,8];
let tabResult = tabOrigin.map((caseTab)=>caseTab+20);
console.log(tabResult);

//autre manière d'écrire
tabResult = tabOrigin.map(function(caseTab){
    if(caseTab%2==0){
        return caseTab+=20;
    }
    return caseTab;
});

console.log(tabResult);

//filter() : permet de filtrer un tableau pour ne conserver que certaine valeur
tabResult = tabOrigin.filter(x => x%2==0);
console.log(tabResult);

//Concaténer 2 tabeaux sur lequel on fait filter()
tabResult = tabOrigin.filter(x => x%2==0).concat(tabOriginDeux.filter(x => x%2==0));
console.log(tabResult);

tabResult = tabOrigin.concat(tabOriginDeux).filter(x => x%2==0);
console.log(tabResult);

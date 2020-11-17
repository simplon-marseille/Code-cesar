//Code césar - cryptographie
//Créez une fonction qui prend en paramètre une chaine de caractère.
//Cette fonction doit renvoyer une chaine cryptée.
//Crytpage : décaler chaque lettre un cran vers la droite.
//
//ex: chaine non cryptée : simplon
//    chaine cryptée : tjnqmpo
//
//    Vous devez crypter dataNonCrypte1 et dataNonCrypte2
//courage ! :)
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const dataNonCrypte1 = "simplon";
const dataNonCrypte2 = "zoo"; //la lettre 'z' deviendra un 'a';

//Tableau qui contiendra les éléments cryptés
const cryptedTab = [];
let cryptedLetter = '';

const dataCrypted = (data) => {
    //conversion de la chaine de caractères en tableau
    const stringToTab = data.split("");
    //Je parcours chaque élément de mon nouveau tableau. Chaque élément correspond à une lettre de ma chaine de caractères.
    stringToTab.forEach((letter) => {
        //je check si la lettre est 'z'
        if(letter === 'z'){
            cryptedLetter = 'a';
        }else{
            //je trouve l'indice de chaque lettre dans mon tableau 'alphabet'. 'indexOfLetter' contiendra un entier.
            let indexOfLetter = alphabet.indexOf(letter);
            //j'ajoute 1 à cet entier pour trouver la caractère suivant.
            cryptedLetter = alphabet[indexOfLetter + 1];
        }
        //Je stocke la lettre cryptée dans un nouveau tableau
        cryptedTab.push(cryptedLetter);
    });
    //Je convertis mon tableau en chaine de caractères que je retourne
    return cryptedTab.join('');
};

//J'exécute ma fonction et j'affiche le résultat.
console.log(dataCrypted(dataNonCrypte1));
//console.log(dataCrypted(dataNonCrypte2));


//A l'inverse,  pour décrypter une chaine cryptée, il convient coder une fonction qui décrypte une chaine caractère sur le même principe.
//Il faut trouver l'indice du caractère crypter et décaller de 1 vers la gauche.

//L'application est bien sûr perfectible:
// - automatisation des décalage de lettre en fonction de la clé de 
//chiffrement 
// - gestion des espaces si lon veut passer les phrases entières en paramètre de la fonction.
// - gestion des caractères spéciaux (.,:;, etc...)


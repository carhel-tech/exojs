/* Créez une fonction qui renvoie le nombre detrue valeurs présentes dans un tableau. En javascript

Exemples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0 */

function countTrue(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === true) {
        count++;
      }
    }
    return count;
  }


 /* Votre fonction recevra deux fonctions, fet g, qui ne prennent aucun paramètre. Votre fonction doit les appeler et renvoyer une chaîne qui indique quelle fonction a renvoyé le plus grand nombre. En javascript.

Si f renvoie le plus grand nombre, renvoie la chaîne f.
Si g renvoie le plus grand nombre, renvoie la chaîne g.
Si les fonctions renvoient le même nombre, renvoie la chaîne neither.
Exemples
whichIsLarger(() => 5, () => 10) ➞ "g"

whichIsLarger(() => 25,  () => 25) ➞ "neither"

whichIsLarger(() => 505050, () => 5050) ➞ "f" */

function whichIsLarger(f, g) {
    const resultF = f();
    const resultG = g();
  
    if (resultF > resultG) {
      return "f";
    } else if (resultG > resultF) {
      return "g";
    } else {
      return "neither";
    }
  }


//   L'heure a un format : heures:minutes . Les heures et les minutes ont deux chiffres, comme 09:00.

// Créez une expression rationnelle pour trouver l'heure dans la chaîne : Breakfast at 09:00 in the room 123:456. Dans cette tâche, il n'est pas encore nécessaire de vérifier l'exactitude de l'heure, donc 25:99 peut également être un résultat valide. L'expression régulière ne doit pas correspondre à 123:456.

// Remarques
// La solution se trouve dans l' onglet Ressources .

const regex = /\b\d{2}:\d{2}\b/g;


/*
Les promesses ne sont que des objets qui contiennent le résultat d'opérations asynchrones. Alors, quand en utilisez-vous un ? Lorsque vous souhaitez contrôler le résultat d'une opération asynchrone. Tout ce que vous avez à faire est d'envelopper la fonction asynchrone avec un constructeur de promesse.

Le constructeur de promesse vous demande de passer une fonction appelée l' exécuteur qui prend deux paramètres, resolve et rejet . Les deux sont des fonctions que vous utilisez pour transmettre ou rejeter une valeur qui est généralement le résultat de l'opération asynchrone. Voici un exemple de promesse simple :

let promise = new Promise( (resolve, reject) => {
  setTimeout(( ) => {
     resolve("edabit")
  }, 1000)
})
setTimeoutest une API de navigateur très couramment utilisée dans les didacticiels pour représenter les opérations asynchrones . Après 1000 ms, nous appelons la fonction de rappel setTimeout()et transmettons une chaîne "edabit" à la fonction de résolution.

Créez une promesse simple et transmettez à la fonction de résolution une valeur de chaîne de votre choix. Utilisez la setTimeoutfonction comme opération asynchrone. Votre setTimeout()fonction ne doit pas dépasser 1000 ms. Stockez la promesse dans une variable nommée promise.

Remarques
Consultez l' onglet Ressources pour plus d'informations sur les promesses.*/

et promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
  
  promise.then((result) => {
    console.log(result); 
  });


 /* L' opération de décalage vers la gauche est similaire à la multiplication par des puissances de deux .

Exemple de calcul utilisant l'opérateur de décalage vers la gauche ( <<) :

10 << 3 = 10 * 2^3 = 10 * 8 = 80
-32 << 2 = -32 * 2^2 = -32 * 4 = -128
5 << 2 = 5 * 2^2 = 5 * 4 = 20
Écrivez une fonction qui imite (sans l'utilisation de << ) l'opérateur de décalage vers la gauche et renvoie le résultat à partir des deux entiers donnés.

Exemples
shiftToLeft(5, 2) ➞ 20

shiftToLeft(10, 3) ➞ 80

shiftToLeft(-32, 2) ➞ -128

shiftToLeft(-6, 5) ➞ -192

shiftToLeft(12, 4) ➞ 192

shiftToLeft(46, 6) ➞ 2944
Remarques
Il n'y aura pas de valeurs négatives pour le deuxième paramètre y.
Ce défi ressemble plus à la recréation de l' opération de décalage à gauche , ainsi, l'utilisation de l'opérateur directement est interdite .
Alternativement, vous pouvez résoudre ce défi via la récursivité.
Une version récursive de ce défi peut être trouvée via ce lien .*/

function shiftToLeft(x, y) {
    return x * Math.pow(2, y);
  }


 /* Créez une fonction qui prend un nombre comme argument. Additionnez tous les nombres de 1 au nombre que vous avez passé à la fonction. Par exemple, si l'entrée est 4, votre fonction doit renvoyer 10 car 1 + 2 + 3 + 4 = 10.

Exemples
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300
Remarques
Attendez-vous à tout nombre positif entre 1 et 1000.*/


function addUp(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }

  /*Créez une fonction qui prend un tableau de nombres et retourne "Boom!"si le chiffre 7 apparaît dans le tableau. Sinon, retournez "there is no 7 in the array".

Exemples
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.
Remarques
N / A*/

function sevenBoom(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].toString().includes("7")) {
        return "Boom!";
      }
    }
    return "there is no 7 in the array";
  }

  /* Le réveillon de Noël approche à grands pas, alors naturellement nous devons préparer du lait et des biscuits pour le Père Noël ! Créez une fonction qui accepte un Dateobjet et retourne truesi c'est la veille de Noël (24 décembre) et falseautrement. Gardez à l'esprit que le mois de JavaScript Dateest basé sur 0, ce qui signifie que décembre est le 11e mois tandis que janvier est 0.

Exemples
timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true
Remarques
Les dates sont basées sur zéro (voir ressources).
Tous les cas de test contiennent des dates valides.*/

function timeForMilkAndCookies(date) {
    const month = date.getMonth();
    const day = date.getDate();
    return month === 11 && day === 24;
  }

  

 /* Si vous avez terminé cette série RegEx de I à XXII, vous avez été exposé à toute la documentation de MDN sur les caractères spéciaux des expressions régulières . Vous pouvez consulter mes collections sous Basic Reg Ex dans mon profil si vous en avez manqué. Cette prochaine partie de la série est d'aider à solidifier ce que vous avez appris. Afin de gagner du temps, je vais rechercher sur le Web des exercices d'expression régulière à publier ici.

Vous pouvez tester une chaîne vide comme ceci :

"".length === 0 ➞ true
Utilisez une expression régulière pour tester une chaîne vide.

const REGEXP = /your solution/
REGEXP.test("") ➞ true
Remarques
Vous pouvez trouver la solution dans l' onglet Ressources .*/

const REGEXP = /^$/;
REGEXP.test("");


/*Écrivez une fonction redundantqui accepte une chaîne stret renvoie une fonction qui renvoie str.

Exemples
const f1 = redundant("apple")
f1() ➞ "apple"

const f2 = redundant("pear")
f2() ➞ "pear"

const f3 = redundant("")
f3() ➞ ""
Remarques
Votre fonction doit renvoyer une fonction , pas une chaîne.*/

function redundant(str) {
    return function() {
      return str;
    };
  }

  
  /*Dans un jeu de société, une pièce peut avancer de 1 à 6 tuiles en fonction du nombre obtenu sur un dé à six faces. Si vous avancez votre pièce sur la même tuile que la pièce d'un autre joueur, vous gagnez tous les deux un bonus.

Pouvez-vous atteindre le numéro de tuile de votre ami au prochain lancer ? Créez une fonction qui prend votre position aet celle de votre ami bet renvoie une représentation booléenne indiquant s'il est possible de gagner un bonus sur n'importe quel jet de dé.

Exemples
possibleBonus(3, 7) ➞ true

possibleBonus(1, 9) ➞ false

possibleBonus(5, 3) ➞ false
Remarques
Vous ne pouvez pas reculer (c'est pourquoi l'exemple #3 ne fonctionne pas).
Si vous êtes déjà sur la même tuile, retournez false, car vous vous éloigneriez.
Attendez-vous uniquement à des entrées entières positives.*/

function possibleBonus(a, b) {
    if (a === b) {
      return false; 
    } else if (b - a <= 6 && b - a > 0) {
      return true; 
    } else {
      return false;
    }
  }



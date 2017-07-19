// Utilisation de la notion de context avec let
// let i = 0;
//
// if(1 == 1) {
//     let j = 1;
//
//     console.log("i => ", i);
//     i++;
// }

// const add = function(a, b) {
//     let k = 1;
//
//     return a + b + k;
// };

// console.log("i => ", i);
// console.log("fonction add => ", add(1, 1));
// console.log(j); <== Créer une erreur
// console.log(k); <== Créer une erreur

// Affectation des constantes sur des tableau objet...
// let n = 0;
// const array = [];
//
// array.push(10);
// array.push(20);
// array.push(30);
//
// array.forEach(function(el) {
//     let b = 0;
//     n++;
// });
// //
// console.log(n);
// console.log(b); <= Créer une erreur

// const NAME = "Bibi";
//
// console.log(NAME);
//
// const setConst = function() {
//     const LOG = "debug";
// };
//
// setConst();

// console.log(LOG); <= Créer une erreur

// const NAME = "Bobo"; <= Créer une erreur car déjà déclaré

/**
 * Utiliser la fonction .map sur le tableau passé en paramètre
 * pour retourner un nouveau tableau avec les valeurs multipliées par 2
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable
 * 
  */

// const multiplyByTwo = (array) => {}
const multiplyByTwo = array => array.map(i => i * 2);

const array1 = [1, 2, 3];
// const multiplyByTwo = array.map(i => i*2);
console.log(multiplyByTwo(array1));

/**
 * Utiliser la fonction .filter sur le tableau passé en paramètre
 * retourne un nouveau tableau avec uniquement les nom qui commencent par la lettre "A"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

//const filterNameStartByA = (array) => {}
const filterNameStartByA = array => array.filter(i => i.startsWith("A"));

const array2 = ["Albert", "Arthur", "Benoit"];
//const filterNameStartByA = array2.filter(i => i.charAt(0).toUpperCase() === 'A');
console.log(filterNameStartByA(array2));

/**
 * Utiliser la fonction .reduce sur le tableau passé en paramètre
 * retourne la somme des valeurs du tableau
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

//const sum = (array) => {}
const sum = array => array.reduce((acc, i) => acc + i, 0)

const array3 = [1, 2, 3];
console.log(sum(array3));


/**
 * Utiliser la fonction .find sur le tableau passé en paramètre
 * retourne l'utilisateur qui a l'id passé en 2e paramètre
 * 
 * exemple d'entrée:
 * [
 *  {id: 1, name: 'John'},
 *  {id: 2, name: 'Doe'},
 *  {id: 3, name: 'Foo'},
 *  {id: 4, name: 'Bar'},
 * ], 3
 * retour attendu: "Foo"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const findUserById = (array, id) => array.find(i => i.id === id)?.name ?? null;
const testArray4 = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Doe'},
  {id: 3, name: 'Foo'},
  {id: 4, name: 'Bar'},
 ];
console.log(findUserById(testArray4, 3))


module.exports = {multiplyByTwo, filterNameStartByA, sum, findUserById};
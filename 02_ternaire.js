
/**
 * retourne la valeur la plus grande des deux paramètres
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */
function ternaire(a , b) {
    const ret = a >= b ? a : b;
    return ret;  
}

console.log(ternaire(1, 2));

module.exports = ternaire;

/**
 * utilisez l'opérateur de chaine ?. pour accéder au nom du groupe auquel appartient l'utilisateur
 * Attention, l'utilisateur peut ne pas avoir de groupe (null)
 * renvoi undefined si l'utilisateur n'a pas de groupe
 * 
 * exemple : 
 * {
 *  name: "John",
 *    group: {
 *      name: "admin"
 *    }
 *  }
 * 
 * doit renvoyer "admin"
 * 
 */

const getGroupName = (obj) => {
    const {name, ...grp} = obj;
    return grp.group.name;
}

const testobj = {
    name: "John",
    group: {
      name: "admin"}
    };

console.log(getGroupName(testobj));

module.exports = {getGroupName};
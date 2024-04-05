
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => {
    console.log("start");
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            console.log("fin");
            resolve();
        }, 2000);
    });
}

sleep();

module.exports = {sleep};
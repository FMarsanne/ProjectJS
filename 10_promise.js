
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = (ltime) => {
    console.log("start");
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            console.log("fin");
            resolve();
        }, ltime);
    });
}

sleep(200);

module.exports = {sleep};
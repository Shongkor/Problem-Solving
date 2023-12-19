/**
 * @param {number} millis
 * @return {Promise}
 */
// let t = Date.now()
// sleep(100).then(resolve => setTimeout(resolve, 100)) // 100

async function sleep(millis) {
    
    return await new Promise((resolve)=> setTimeout(resolve, millis));
}
const res =   sleep(100)
console.log(res);

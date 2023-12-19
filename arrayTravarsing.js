/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
    
for(let item of arr){
    if (Array.isArray(item)) {
        yield*  inorderTraversal(item)
       } else {
           yield item
       }
}
    
};
const gen = inorderTraversal([1, [2, 3],4])
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

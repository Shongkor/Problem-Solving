/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    const _arr = [];
    let subArray = []
    arr.forEach((item, index)=>{
       
        if(subArray.length<size){
            subArray.push(item)
        }else if(subArray.length == size){
            _arr.push(subArray);
            subArray = [];
            subArray.push(item)
        }
        
        
       
    })
    if(subArray.length){
        _arr.push(subArray);
    }
    return _arr;
};
console.log(chunk([1,2,3,4,5],2));
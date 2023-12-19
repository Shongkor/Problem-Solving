Array.prototype.last = function() {
    if(arr.length){
        const lastElement=  arr.slice(-1)
        return lastElement[0]
    }else{
        return -1;
    }
};


  const arr = [null, {}, 3];
 console.log( arr.last()); 

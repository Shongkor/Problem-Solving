/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        if(!functions.length){
            return x;
        }
        let lastElement = functions.reverse();
            let y;
        lastElement.forEach((singleFn,index)=>{
            if(index>0){
                y=singleFn(y)
            }else{
                y = lastElement[0](x)
            }
        })
        return y
    }
};
const fn = compose([])

console.log(fn(4));
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
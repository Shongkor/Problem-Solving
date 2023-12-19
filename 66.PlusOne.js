/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let sum = 0
   
    let i = digits.length-1 ;
    digits.forEach((digit,index) =>{
        let element = digits[i];
        sum = sum + ( element * (10 ** index))
        i--;
        
    })
    // for (let index = 0; index < digits.length-1 ; index++) {
    //     const element = digits[i];
    //     sum = sum + ( element * (10 ** index))
    //     i--;
        
    // }
    sum = sum +1 ;
    const result = String(sum)
    .split('')
    .map(Number);
    
    return result
};

console.log(plusOne([1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
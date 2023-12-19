/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res= [];
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        filteredElement = nums.filter(value => element === value)
        if(filteredElement.length === 1){
             res = filteredElement;
             return res[0];
        }
        
    }
    return res[0];
};

console.log(singleNumber([1]));
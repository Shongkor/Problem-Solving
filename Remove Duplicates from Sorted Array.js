/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const result = [];

    nums.forEach(element => {
        if(result[result.length - 1] != element){
            result.push(element)
        }
    });

    return result;
};

console.log(removeDuplicates([1,1,2]));
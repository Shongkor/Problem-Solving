/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    // nums.forEach((element, index) => {
    //     if(element >= target){
    //         res = index
    //         return res;
    //     }
    // });
    // return res;

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if(element >= target){
            return  index;
        }
    }
    return nums.length
};

console.log(searchInsert([1,3,5,6],2));
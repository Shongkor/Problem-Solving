 /**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    
    const filteredarray = nums.filter(item => item !==  val)
    const actualLength = nums.length;
    const FilteredArrayLength = filteredarray.length;
    
    for (let i = 0; i < actualLength; i++) {
        if(i<FilteredArrayLength){
            nums[i] = filteredarray[i]
            
        }
        else{
            nums[i] = "_";
        };

    
    }
    
    return FilteredArrayLength, nums;
    
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2));
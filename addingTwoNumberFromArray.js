/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let res = [];
    nums.forEach((number, index, arr) => {

        for(item=index+1; item<arr.length; item++){
            if(number + arr[item]===target){
                res.push(index)
                res.push(item);
                return res;
            }
        
            
        }
        return res;
    }

    )
    return res;
};
console.log(twoSum([3,2,4], 6));
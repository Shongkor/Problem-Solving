/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // for (let index = 0; index < n+m; index++) {
    //     if (nums1[index] != 0) {
    //         nums2.push(nums1[index])
    //         nums2.sort();
    //     }

    // }
    // nums1 = nums2;
    // return nums1

    if(nums2){
        nums2.forEach(element => {
            for (let index = 0; index < n+m; index++) {
                if (nums1[index] === 0) {
                 return   nums1[index] = element
                }
            }
        });
       return nums1.sort((a, b) => a - b)
    }
};
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));
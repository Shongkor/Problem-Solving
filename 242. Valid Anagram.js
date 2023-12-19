/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sArray = s.split('').sort().join('');
    const tArray =t.split('').sort().join('');
    return sArray === tArray;
    // if(sArray.length === tArray.length){
    //     for (let index = 0; index < sArray.length; index++) {
    //        let res =true;
    //         const element = sArray[index];
    //         for (let i = 0; i < tArray.length; i++) {
    //             const item = tArray[i];
    //             if(item != element) {
    //                 return false;
    //             }
    //         }
            
            
    //     }
        
    // }
    // return true;
};
 console.log(isAnagram("anagram","nagaram"));
// isAnagram("anagram","nagaram")

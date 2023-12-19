/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   const array = s.trim().split(' ')
   console.log(array);
   return array[array.length-1].length
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    let min = prices[0];

    for (let index = 1; index < prices.length; index++) {
        let element = prices[index];
        if(min > element){
            min = element;
        }else{
            profit = Math.max(profit, element-min);
        } 
    }
    
    
    return profit;

};
console.log(maxProfit([7,6,4,3]));
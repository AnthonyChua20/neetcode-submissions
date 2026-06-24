class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1;
        let maxP = 0;
        while (r < prices.length) {
            if (prices[r] > prices[l]) {
                let profit = prices[r] - prices[l];
                console.log(profit);
                maxP = Math.max(maxP, profit);
            } else if (prices[l] > prices[r]) {
                l = r;
            }
            r++;
        }
         return maxP;
    }
}

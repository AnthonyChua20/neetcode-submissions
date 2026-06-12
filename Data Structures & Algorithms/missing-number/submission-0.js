class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let sumNum = nums.length;
        let xorr = sumNum;
        for(let i =0;i<sumNum;i++){
            xorr ^= i ^ nums[i];
        }
        return xorr
    }
}

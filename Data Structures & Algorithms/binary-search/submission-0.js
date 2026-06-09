class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        /*Binary Search
        Take the length of a array divde it by 2 also known as the mid point
        Start from the mid point.
        IF your target number is smaller than the current number its looking at,
        Right - 1;
         */
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (nums[mid] > target) {
                r = mid - 1;
            } else if (nums[mid] < target) {
                l = mid + 1;
            }else{
                return mid;
            }
        }
        return -1;
    }
}

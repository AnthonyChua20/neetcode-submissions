class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let check = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
        let left = 0;
        let right = check.length - 1;
        while (left < right) {
            if (check[left] !== check[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}

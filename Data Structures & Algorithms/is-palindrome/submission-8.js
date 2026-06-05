class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let check = s.toLowerCase().replace(/[^a-z0-9]/gi, "");

        // You can just use 'check' here instead of repeating the cleaning process!
        return check.split("").reverse().join("") === check;
    }
}

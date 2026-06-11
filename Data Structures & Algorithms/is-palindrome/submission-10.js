class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let check = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
        return check.split("").reverse().join("") === check;
    }
}

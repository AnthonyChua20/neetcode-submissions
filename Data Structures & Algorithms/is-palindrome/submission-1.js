class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
     let check = s.toLowerCase().replace(/[^a-z0-9]/gi, '');

        return s.toLowerCase().replace(/[^a-z0-9]/gi, '').split("").reverse().join("") === check
        
    }
}

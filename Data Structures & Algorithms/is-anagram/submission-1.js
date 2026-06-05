class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       let split = s.split('').sort().join('');
        let tsplit = t.split('').sort().join('');
        return split == tsplit;
    }
}

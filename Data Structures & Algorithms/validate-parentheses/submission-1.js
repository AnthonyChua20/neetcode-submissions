class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let pairs = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        for (let i = 0; i < s.length; i++) {
            let first = s[i];

            if (pairs[s[i]]) {
                if (stack[stack.length - 1] != pairs[s[i]]) {
                    return false;
                }
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }
        return stack.length === 0;
    }
}

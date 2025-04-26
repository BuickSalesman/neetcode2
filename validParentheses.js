class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    let stack = [];
    let charSet = { ")": "(", "}": "{", "]": "[" };

    for (const c of s) {
      if (c in charSet) {
        if (stack.length && stack[stack.length - 1] === charSet[c]) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        stack.push(c);
      }
    }
    return stack.length === 0;
  }
}

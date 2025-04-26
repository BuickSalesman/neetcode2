class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        matchingChar = {")": "(", "}": "{", "]": "["}

        for c in s:
            if c in matchingChar:
                if stack and stack[-1] == matchingChar[c]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(c)

        return True if not stack else False

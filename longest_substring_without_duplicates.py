class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l = 0
        seen = {}
        res = 0

        for r in range(len(s)):
            if s[r] in seen:
                l = max(seen[s[r]] + 1, l)
            seen[s[r]] = r
            res = max(res, r - l + 1)
        return res

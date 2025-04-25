class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        l = 0
        res = 0
        max_f = 0
        char_set = {}

        for r in range(len(s)):
            char_set[s[r]] = char_set.get(s[r], 0) + 1
            max_f = max(max_f, char_set[s[r]])

            if (r - l + 1) - max_f > k:
                char_set[s[l]] -= 1
                l += 1
            res = max(res, (r - l + 1))
        return res

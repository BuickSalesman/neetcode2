class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = {}
        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord('a')] += 1
            fingerprint = tuple(count)
            if fingerprint not in res:
                res[fingerprint] = []
            res[fingerprint].append(s)
        return list(res.values())

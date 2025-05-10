class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda pair: pair[1])
        lastEnd = intervals[0][1]
        res = 0

        for i in range(1, len(intervals)):
            if lastEnd > intervals[i][0]:
                res += 1
            else:
                lastEnd = intervals[i][1]

        return res

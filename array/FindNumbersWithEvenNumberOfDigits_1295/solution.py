class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        all = 0
        for i in nums:
            if len(str(i)) % 2 == 0:
                all += 1
                
        return all
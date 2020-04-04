class Solution:
    def decompressRLElist(self, nums: List[int]) -> List[int]:
        res = []
        for i, j in zip(nums[::2], nums[1::2]):
            res += [j] * i
        return res
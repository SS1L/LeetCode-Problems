class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        value = dict()
        for i, element in enumerate(nums):
            comp = target - element
            if comp in value:
                return [value[comp], i]
            value[element] = i
        return []
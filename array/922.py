class Solution:
    def sortArrayByParityII(self, A: List[int]) -> List[int]:
        res = [None] * len(A)
        res[::2] = [x for x in A if x % 2 == 0]
        res[1::2] = [x for x in A if x % 2 != 0]
        return res
class Solution:
    def judgeCircle(self, moves: str) -> bool:
        move = list(moves)
        if move.count('U') == move.count('D') and move.count('R') == move.count('L'):
            return True
        else:
            return False
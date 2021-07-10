/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function(n) {
    const newN = Array.from(String(n), Number);
    const digit = newN.reduce((sum, current) => sum * current);
    const sumNum = newN.reduce((sum, current) => sum + current);
    return digit - sumNum;
};
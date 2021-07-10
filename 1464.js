/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxValue = 0;
    let chekedValue = 0;
    for (let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            chekedValue = (nums[i] - 1)*(nums[j] -1 )
            if (maxValue < chekedValue) {
                maxValue = chekedValue
            }
        }
    }
    return maxValue;
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let newNums = [];
    for (let i = 0; i < nums.length; i += 2) {
    let j = nums[i];
        while(j) {
            newNums.push(nums[i + 1]);
            j--;
        }
    }
    return newNums;
};
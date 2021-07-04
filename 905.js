/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let paird = [];
    let nonPaird = [];
    for (let i = 0; i < nums.length; i++){ 
        if (nums[i] % 2 === 0 ) {
            paird.push(nums[i])
        } else {
        nonPaird.push(nums[i])
        }
    }
    return paird.concat(nonPaird)
};
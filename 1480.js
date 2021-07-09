/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var tmp = 0
    for (var i=0; i<nums.length; i++) {
        tmp = tmp + nums[i]
       nums.splice(i,1,tmp)   
    }
    return nums
};
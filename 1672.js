/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    var maxWealth = 0;
    var result = 0;
    for (var i=0; i < accounts.length; i++){
        maxWealth = accounts[i].reduce((sum, current) => sum + current, 0);
        if (maxWealth > result)  result = maxWealth;
    }
    return result 
};
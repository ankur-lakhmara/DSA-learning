let accounts = [
  [1, 2, 3],
  [3, 2, 1],
];
var maximumWealth = function (accounts) {
  let wealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    if (sum > wealth) {
      wealth = sum;
    }
  }
  return wealth;
};
console.log(maximumWealth(accounts));

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6

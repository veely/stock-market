var maxProfit = function(stock) {
  var profit = 0;
  for (let i = 0 ; i < stock.length - 1 ; i++) {
    if (i + 1 < stock.length && stock[i] < stock[i + 1]) {
      for (let j = i + 1 ; j < stock.length ; j++ ) {
        let diff = stock[j] - stock[i];
        if (diff > profit) {
          profit = diff;
        }
      }
    }
  }
  console.log(profit);
};

maxProfit([45, 24, 35, 31, 40, 38, 11]);
// Runtime: 85ms    Beats: 88.14%    Memory: 52.1MB    Beats: 17.43%


const maxProfit = function(prices) {
    let minBuyPrice = prices[0];
    let max = 0;

	for(let i = 1; i < prices.length; i++) {
		const sellPrice = prices[i];
		const profit = sellPrice-minBuyPrice;
		max = Math.max(max, profit)
		minBuyPrice=Math.min(minBuyPrice, prices[i]);
	}
	return max;
};
// call this twice. BTC to USD prices and ETH to USD at those times
// if crypto to crypto then use ETH for that
// organize arrays by sorting, then iterating from index i until diff
// of arr[i] + arr[i+x] = the candle length that GDAX allows, then
// make that an array pairing and push into correct array
// Should be a get technically but easier as post to handle sending all
// the data back
function getGDAXData(arrayOfTimes, pair) {
	// GET /products/<product-id>/candles
	let current = 0;
	let minimalTimes = Array.from(arrayOfTimes)
		.sort().reduce((acc, elem) => {
			if (diff in minutes >=350) {
				current = new one;
				acc.push(elem)
			}
			return acc;
		}, arrayOfTimes[0])
	axios.post("/api/gdax-prices", {
		pair: pair,
		times: minimalTimes
	})
}

getMarketDailyAverage() {

}
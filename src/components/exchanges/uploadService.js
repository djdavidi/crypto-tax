// handle different csv headers and formats
// have a config file for each one
// handle timezones
// at end show calculated and losses gains etc, compared to actual balances in each account
// have them in a queue strucutre, with object of price bought at, dollar price whatever and type of coin
// then if there isnt enough of the last one when you sell, use the next

// have to account for exchange fees though?

// Let upload all
// let say which is sent to which so i know cost basis of that
// Then find that deposit or close to it and apply
 // that cost basis to that value


function parseCSV(){
	// give it best attemtp?
	// i.e if field is buy/bought map to buy
	// if field is date/time/date time map to date
}

function splitIntoExchanges() {
	
}

function handleWithdrawals() {
	
}
// call this twice. BTC to USD prices and ETH to USD at those times
// if crypto to crypto then use ETH for that
// organize arrays by sorting, then iterating from index i until diff
// of arr[i] + arr[i+x] = the candle length that GDAX allows, then
// make that an array pairing and push into correct array
function getGDAXdata() {
	// GET /products/<product-id>/candles
}

function get() {
	
}

function handleXLSX() {

}





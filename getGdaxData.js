// call api and write to csv
// Need to throttle to three per second
// const cryptos = ["BTC", "ETH", "LTC"]
const cryptos = ["ETH"]
// Need to be ISO Dates
const moment = require("moment")
const axios = require("axios")
const fs = require("fs")
// Unix Values
const startOfLastYear = 1483228800
const endOfLastYear = 1514764799
// ISO looks like this:: 2017-12-31T23:59:59Z

// 350 candles max, times one minute granularity(60)
const maxCandles = 350

function main() {
	let start = moment(startOfLastYear)
	cryptos.forEach(crypto => {
		getGDAXData(start, crypto)
	})
}


// compare using moment
// vs UNIX, adding 21000 and doing new Date(unix).toiso

// Returns array of:
// time bucket start time
// low lowest price during the bucket interval
// high highest price during the bucket interval
// open opening price (first trade) in the bucket interval
// close closing price (last trade) in the bucket interval
// volume volume of trading activity during the bucket interval
function getGDAXData(start, crypto){
	let end = moment(start).add(maxCandles, "minutes")

	axios.get(`https://api.gdax.com/products/BTC-USD/candles?
		start=${start.toISOString()}&end=${end.toISOString()}&granularity=60`)
	.then(res => writeToCSV(res, crypto))
	.then(res => getGDAXData(end, crypto))
	.catch(err => console.log("ERR: ", err))
}

function writeToCSV(res, crypto) {
	// UNIX time
	// use appendFile, stream, keep it open
	// or write stream
	// write iso time and 
	return
}

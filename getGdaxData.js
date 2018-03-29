// call api and write to csv
// Need to throttle to three per second
// const cryptos = ["BTC", "ETH", "LTC"]
const cryptos = ["BTC"]
// Need to be ISO Dates
const moment = require("moment")
const axios = require("axios")
const fs = require("fs")
// Unix Values
const writeStream = fs.createWriteStream("./eth.csv")
const startOfLastYear = 1483228800
const endOfLastYear = 1514764799
// ISO looks like this:: 2017-12-31T23:59:59Z

// 300 candles max, times one minute granularity(60)
const maxCandles = 300

const incrementVal = 18000;

function main() {
	console.log()
	// setCSVHeader()
	console.log("here")
	cryptos.forEach(crypto => {
		getGDAXData(startOfLastYear, crypto, true)
	})
}

function setCSVHeader() {
	writeStream.write("Time, Price, Crypto\n")
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
function getGDAXData(start, crypto, thing){
	if (!thing) return
	if (start === endOfLastYear) {
		return finishedGetData(crypto)
	}
	let end = start + incrementVal
	// need to ensure that last
	if (end >= endOfLastYear) {
		end = endOfLastYear
	}
	console.log("HERE")

	let startIso = moment.unix(start).toISOString()
	console.log("ENF", end)
	let endIso = moment.unix(end).toISOString()
	console.log("STart", startIso)
	console.log("endIso", endIso)
	let url = "https://api.gdax.com/products/"+crypto +"-USD/candles?"+
		"start="+startIso+"&end="+endIso+"&granularity=60"
	axios.get(url)
	.then(res => writeToCSV(res, crypto))
	.then(res => getGDAXData(end, crypto))
	.catch(err => console.log("ERR: ", err))
}
function finishedGetData(crypto) {
	writeStream.end()
}
// Jumps 2-3 minutes. Have to account for that. As well as outages
// and things like that??
function writeToCSV(res, crypto) {
	console.log("RES", res.data.length)
	res.data.forEach(timestamp => {
		let time = timestamp[0]
		let price = ((timestamp[1] + timestamp[2]) / 2).toFixed(2)
		writeStream.write(`${time},${price}, ${crypto}\n`)
	});
	// UNIX time
	// use appendFile, stream, keep it open
	// or write stream
	// write iso time and 
	return
}

main();

// call api and write to csv
// Need to throttle to approx three per second
const cryptos = ["BTC", "ETH", "LTC"]
// const cryptos = ["ETH", "LTC"]
let currentCryptoIndex = 0;
const moment = require("moment")
const axios = require("axios")
const fs = require("fs")
// Unix Values
const startOfLastYear = 1483228800
const endOfLastYear = 1514764799

// ISO looks like this:: 2017-12-31T23:59:59Z
let writeStream;
// 300 candles max, times one minute granularity(60) = 18000 range per request
const incrementVal = 18000;

function main() {
	let currentCrypto = cryptos[currentCryptoIndex]
	startCSVWrite(currentCrypto)
	getGDAXData(startOfLastYear, currentCrypto)
}

function startCSVWrite(crypto) {
	writeStream = fs.createWriteStream(`./${crypto}.csv`)
	writeStream.on("finish", () => {
		currentCryptoIndex++
		main()
	})
	writeStream.write("Time, Price\n")
}

function getGDAXData(start, crypto){
	if (start === endOfLastYear) {
		return finishedGettingData()
	}
	let end = start + incrementVal

	if (end >= endOfLastYear) {
		end = endOfLastYear
	}

	let startIso = moment.unix(start).toISOString()
	let endIso = moment.unix(end).toISOString()
	let url = "https://api.gdax.com/products/"+crypto +"-USD/candles?"+
		"start="+startIso+"&end="+endIso+"&granularity=60"
	console.log("startIso", startIso + crypto)
	axios.get(url)
	.then(res => writeToCSV(res, crypto))
	.then(res => setTimeout(() => getGDAXData(end, crypto), 500))
	// back off a bit if the api errors out
	.catch(err => {
		console.log("ERR::", err.statusText)
		console.log("Start::", startIso)
		setTimeout(() => getGDAXData(end, crypto), 500)
	})
}

function writeToCSV(res, crypto) {
	res.data.forEach(timestamp => {
		let time = timestamp[0]
		let price = ((timestamp[1] + timestamp[2]) / 2).toFixed(2)
		writeStream.write(`${time},${price}\n`)
	})
}

function finishedGettingData() {
	return writeStream.end()
}

main(currentCryptoIndex);

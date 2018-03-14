const rp = require('request-promise');

// Cache all of this and then connect with sockets to preexisting ones
// to push new thing every 10 sec?

// biggest percentage spread sorted by the two exchanges

// multiselect

// minimum total volume? optional

const possibleBases = ["BTC", "ETH", "USDT", "BNB"];
// Probably need to adjust this logic for DEX's
// all i need is last and i can work backwards from there
// https://api.gdax.com/products/LTC-USD/ticker
// have to loop over each one
// need to account for all the eth pairings being in ETH as well, although shouldnt matter
// since can do difference, but when comparing between those to btc it matters
// account for diff btc prices on each exchange
// if btc-ltc
// and btc-ltc on diff platforms
// thats a a section of list which exapnds to show more detail
// sort alphabetically
// let filter by min volume, exchange, pairing
// Like only ETH base as opposed to btc


// WOULD IT HELP TO SHOW BID AND ASK ON EACH PAIR FOR THAT EXCHANGE

// ETH to BTC might be in ETH so if i splti and clean without paying attention..
const exchangeUrls = ["https://api.binance.com/api/v1/ticker/allPrices",
  "https://bittrex.com/api/v1.1/public/getmarketsummaries",
  "https://api.kucoin.com/v1/market/open/symbols"
]
// https://github.com/AuroraDAO/idex-api-docs
const exchangeNames = ["binance", "bittrex", "kucoin"]
// questionable design here
const cleaningFunctions = [cleanBinanceData, cleanBittrexData, cleanKucoinData]

function getAllExchanges() {
  const exchangeData = exchangeUrls.map(url => {
    return rp.get(url)
  })

  return Promise.all(exchangeData)
    .catch(err => {
      console.log("err", err)
    })
    .then(allExchanges => {
      // need to handle 404's and other errors here
      // console.log("allExchanges", allExchanges)
      let cleanedData = allExchanges.map((exchangeData, index) => {
          return (exchangeData ? cleaningFunctions[index](exchangeData, exchangeNames[index]) : [])
        })
        .reduce((acc, cleanedDatum) => {
          // merge all the arrays into one to sort them into buckets
          return acc.concat(cleanedDatum)
        }, [])
        
      const sortedData = {}
      cleanedData.forEach(pair => {
        if (!sortedData[pair.name]) {
          sortedData[pair.name] = []
        }
        sortedData[pair.name].push(pair)
      })

      console.log("SORTED", sortedData)
      return sortedData
    })
}
// getAllExchanges();
// are they all valued in BTC?

function cleanBinanceData(data, exchangeName) {
  // try catch for parse in all these probably
  return JSON.parse(data).map(datum => {
    let tradingPair = splitStringIntoTradingPair(datum.symbol.toUpperCase())
    return {
      baseCurrency: tradingPair[0],
      quoteCurrency: tradingPair[1],
      price: parseFloat(datum.price),
      exchange: exchangeName,
      name: tradingPair.join("-")
    }
  })
}

// need better way to make all the exchange specific ones generic
function cleanBittrexData(data, exchangeName) {
  return JSON.parse(data).result.map(datum => {
    let tradingPair = datum.MarketName.toUpperCase().split("-")
    return {
      baseCurrency: tradingPair[0],
      quoteCurrency: tradingPair[1],
      price: datum.Last,
      exchange: exchangeName,
      name: tradingPair.join("-")
    }
  })
}

function cleanKucoinData(data, exchangeName) {
  return JSON.parse(data).data.map(datum => {
    return {
      baseCurrency: datum.coinTypePair.toUpperCase(),
      quoteCurrency: datum.coinType.toUpperCase(),
      price: datum.lastDealPrice,
      exchange: exchangeName,
      name: `${datum.coinTypePair}-${datum.coinType}`.toUpperCase()
    }
  })
}

function splitStringIntoTradingPair(tradingPair) {
  let splitPair = [];
  possibleBases.forEach(base => {
    let baseIndex = tradingPair.indexOf(base);
    // want bigger than 0 since base coin is second
    if (baseIndex > 0) {
      splitPair = [
        tradingPair.slice(-base.length),
        tradingPair.slice(0, base.length)
      ]
    }
  })

  return splitPair;
}

function getBitcoinPrice() {
  // prob need to use gdax since it has the btc/usd pair to convert numbers to fiat
  // return 
}

function sortPairs() {

}

module.exports = {
  getAllExchanges
}
'use strict';
import fetch from 'node-fetch';
import {} from 'dotenv';
const COINMARKETCAPKEY = process.env.COINMARKETCAPKEY;
const CMC_PRO_API_KEY = COINMARKETCAPKEY;

const qString = `?CMC_PRO_API_KEY=${CMC_PRO_API_KEY}&symbol=BTC,ETH,LTC,ADA&convert=REAL`;
const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest${qString}`;
let btc, eth;
let allStudents;
fetch(url)
  .then(response => {
    return response.json();
  })
  .then(data => {
    btc = data.data.BTC;
    eth = data.data.ETH;
    showCurrencys()
  });

function showCurrencys() {
  console.log(btc);
  console.log(eth);
}

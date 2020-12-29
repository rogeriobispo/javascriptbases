import fetch from 'node-fetch';
import {} from 'dotenv';
const COINMARKETCAPKEY = process.env.COINMARKETCAPKEY;
const CMC_PRO_API_KEY = COINMARKETCAPKEY;

console.log(COINMARKETCAPKEY);
const qString = `?CMC_PRO_API_KEY=${CMC_PRO_API_KEY}&symbol=BTC,ETH,LTC,ADA&convert=REAL`;
const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest${qString}`;

fetch(url)
  .then(response => {
    return response.json();
  })
  .then(response => console.log(response.data));

//const fetch = require("node-fetch");

export class ExchangeRateService {
  async getAllExchangeRates(baseCurrency) {
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${baseCurrency}`);
      let jsonResponse;
      if (response.ok && response.status == 200) {
        jsonResponse = await response.json();
        console.log(`Response status: ${response.status}`);
        console.log(`Response: ${jsonResponse}`);
      }
      return jsonResponse;
    } catch (error) {
      return error; 
    }
  }
}
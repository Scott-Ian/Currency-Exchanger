const fetch = require("node-fetch");

export class ExchangeRateService {
  async getAllExchangeRates(baseCurrency) {
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${baseCurrency}`)
      let jsonResponse;
      if (response.ok && response.status == 200) {
        jsonResponse = await response.json();
      } else {
        jsonResponse = false; // Will change this line later
      }
      return jsonResponse;
    } catch (error) {
      console.log(error);
      return error; // Will change this too!
    }
  }
}
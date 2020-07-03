import {ExchangeRateService} from './ExchangeRate-service';

export class CurrencyExchanger {
  constructor(baseCurrency, baseValue, newCurrency) {
    this.baseCurrency = baseCurrency;
    this.baseValue = baseValue;
    this.newCurrency = newCurrency;
    
    this.exchangeRate;
    this.apiResponse;
  }

  // Function pings API for all exchange rates available and sets this.exchangeRate to the currency described in this.newCurrency
  async getExchangeRate() {
    let exchangeRateService = new ExchangeRateService();
    let response = await exchangeRateService.getAllExchangeRates(this.baseCurrency);

    if (response.result === "success") {
      this.exchangeRate = response.conversion_rates[this.newCurrency];  //[this.newCurrency];
    } else {
      this.error = response["error-type"]; 
    }
  }
}
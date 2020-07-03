import {ExchangeRateService} from './ExchangeRate-service';

export class CurrencyExchanger {
  constructor(baseCurrency, baseValue, newCurrency) {
    this.baseCurrency = baseCurrency;
    this.baseValue = baseValue;
    this.newCurrency = newCurrency;
    
    this.exchangeRate;
    this.apiResponse;
  }

  // Function pings API for all exchange rates available 
  async getExchangeRate() {
    let exchangeRateService = new ExchangeRateService();
    this.apiResponse = await exchangeRateService.getAllExchangeRates(this.baseCurrency);

    if (this.apiResponse) {
      this.exchangeRate = this.apiResponse.conversion_rates[this.newCurrency];  //[this.newCurrency];
    } else {
      this.apiResponse = "error"; // error logic here
    }
  }


}
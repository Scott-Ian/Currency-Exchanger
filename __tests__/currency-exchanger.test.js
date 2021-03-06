import {CurrencyExchanger} from './../src/currency-exchanger.js';

describe ('Currency Exchange', () => {
  let currencyExchanger = new CurrencyExchanger();

  beforeEach(() => {
    currencyExchanger.baseCurrency = "USD"
    currencyExchanger.baseValue = 10;
    currencyExchanger.newCurrency = "JPY"
  });

  test('should correctly create currency exchange object with a baseCurrency value', () => {
    expect(currencyExchanger.baseCurrency).toEqual("USD")
  });

  test('should correctly create currency exchange object with a baseValue', () => {
    expect(currencyExchanger.baseValue).toEqual(10)
  });

  test('should correctly create currency exchange object with a newCurrency value', () => {
    expect(currencyExchanger.newCurrency).toEqual("JPY")
  });

  test('should successfully make an API call to the currency exchange API, and return the currency exchange rate between baseCurrency and newCurrency', async () => {
    //This test fails, but the tested code is functioning. Suspect issue is with the test not fully waiting for API call to finish;
    await currencyExchanger.getExchangeRate();
    expect(currencyExchanger.exchangeRate).toBeGreaterThan(20);
  });

});
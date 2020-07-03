import {CurrencyExchanger} from './../src/currency-exchanger.js';

describe ('Currency Exchange', () => {
  let currencyExchanger = new CurrencyExchanger();

  beforeEach(() => {
    currencyExchanger.baseValue = 10;
  });

  test('should correctly create currency exchange object with an input value', () => {
    expect(currencyExchanger.baseValue).toEqual(10)
  });

});
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {CurrencyExchanger} from './currency-exchanger';




function displayCurrencyConversion(currencyExchanger) {
  $('.base-currency-display').text(currencyExchanger.baseCurrency);
  $('.base-value-display').text(currencyExchanger.baseValue);
  $('.new-currency-display').text(currencyExchanger.newCurrency);
  $('#exchange-rate').text(currencyExchanger.exchangeRate);
  $('#converted-currency').text(currencyExchanger.exchangeRate * currencyExchanger.baseValue);

  //$('#error').hide();
  //$('#result').show();
}

function displayError(currencyExchanger) {
  $('#error').html(`<h4>Oops Something Went Wrong! Error-type: ${currencyExchanger.error}`);
  //$('#error').show();
  //$('#result').hide();
}

$(document).ready(function () {
  let currencyExchanger;
  $('#currency-exchange').submit(async function (event) {
    event.preventDefault();

    const baseCurrency = $('#base-currency').val().toUpperCase();
    const baseValue = parseInt($('#base-value').val());
    const newCurrency = $('#new-currency').val().toUpperCase();

    currencyExchanger = new CurrencyExchanger(baseCurrency, baseValue, newCurrency);

    console.log(currencyExchanger);

    //(async () => {
      await currencyExchanger.getExchangeRate();
      if (!currencyExchanger.error) {
        displayCurrencyConversion(currencyExchanger);
      } else {
        displayError(currencyExchanger);
      }
      console.log(currencyExchanger);
    //});
  });
});
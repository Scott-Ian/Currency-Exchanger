import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {CurrencyExchanger} from './currency-exchanger';

function displayCurrencyConversion(currencyExchanger, convertedValue) {
  $('.base-currency-display').text(currencyExchanger.baseCurrency);
  $('.base-value-display').text(currencyExchanger.baseValue);
  $('.new-currency-display').text(currencyExchanger.newCurrency);
  $('#exchange-rate-display').text(currencyExchanger.exchangeRate);
  $('#converted-currency').text(convertedValue.toString());

  $('#error').hide();
  $('#result').show();
}

function displayError(currencyExchanger) {
  $('#error').html(`<h4>Oops Something Went Wrong! Error-type: ${currencyExchanger.error}`);
  $('#error').show();
  $('#result').hide();
}

function displayInvalidSelection(currencyExchanger) {
  $('#error').html(`<h4>Oops ${currencyExchanger.newCurrency} is not a valid selection. Please use ISO 4217 Codes Only`);
  $('#error').show();
  $('#result').hide();
}

$(document).ready(function () {
  let currencyExchanger;

  $('#currency-exchange').submit(async function (event) {
    event.preventDefault();

    // Stores User Input for currencyExchanger Object Creation
    const baseCurrency = $('#base-currency').val();
    const baseValue = parseInt($('#base-value').val());
    const newCurrency = $('#new-currency').val().toUpperCase();

    currencyExchanger = new CurrencyExchanger(baseCurrency, baseValue, newCurrency);

    await currencyExchanger.getExchangeRate();
    const convertedValue = currencyExchanger.exchangeRate * currencyExchanger.baseValue;
    console.log(currencyExchanger.exchangeRate);

    // Logic to display results to the user, or an error/warning message depending
    if (!currencyExchanger.error && convertedValue) {
      displayCurrencyConversion(currencyExchanger, convertedValue);
    } else if (!convertedValue && !currencyExchanger.error) { 
      displayInvalidSelection(currencyExchanger);
    } else {
      displayError(currencyExchanger);
    }
  });
});
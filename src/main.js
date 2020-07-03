import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {CurrencyExchanger} from './currency-exchanger';

$(document).ready(function () {
  let currencyExchanger;
  let
  $('form#currency-exchange').submit(function (event) {
      event.preventDefault();

      const baseCurrency = $('#base-currency').val().toUpperCase();
      const baseVale = parseInt($('#base-value').val());
      const newCurrency = $('#new-Currency').val().toUpperCase();

      currencyExchanger = new CurrencyExchanger(baseCurrency, baseValue, newCurrency);

      currencyExchanger.getExchangeRate();

  });
});
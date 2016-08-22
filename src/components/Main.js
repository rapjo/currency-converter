require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
// currently this is hardcoded in json file.
// this can be easily replace by API using redux
import currencyAPIResult from '../stores/data';

var supportedCurrencies = currencyAPIResult.supportedCurrencies;
var currencyRatios = currencyAPIResult.currencyRatios;

class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {source: 0, target: 0};
  }

  render() {
    return (
      <div className="index">
      <div className="notice">Foreign Exchange Currency Calculator</div>
    <div className="currency-calculator" id='currency-calculator'>
      <p id="error" >Please enter a valid number</p>
    {this.renderForm('source')}
    {this.renderForm('target')}
  </div>
    </div>
  )
  }


  renderForm(itemType) {
    return (
      <div className="currency-calculator__form">
      <div className="currency-calculator__source-wrapper">
      <input type="number"
    onChange={(e)=> this.handleCurrencyConversion(itemType) }
    placeholder="Enter a number"
    className="currency-calculator__source-input"
    ref={itemType+"_input"}
    defaultValue={this.props.steps}
  />
    {this.renderSelectOptions(supportedCurrencies, itemType)}
  </div>
    </div>
  )
  }


  renderSelectOptions(options, itemType) {
    return(
      <div className="currency-calculator__select-options">
      <select name='currency-source'
    value={this.props.value}
    ref={itemType+"_select"}
    onChange={(e)=> this.handleCurrencyConversion(itemType) }
    className='currency-calculator__source-select' >
      {options.map((item, index)=> {
        return (
      <option
    value={item.value}
    key={index.value}>
    {item.label}
  </option>
  )
  })
  }
  </select>
    </div>
  )
  }


  clearError() {
    var errorElement = document.getElementById('error');
    if (errorElement.className = 'displayError') {
      errorElement.className = '';
    };
  }

  handleCurrencyConversion(itemType) {
    var sourceVal = this.refs.source_input.value,
      targetVal = this.refs.target_input.value,
      sourceCurrency = this.refs.source_select.value,
      targetCurrency = this.refs.target_select.value;

    this.clearError();
    if(itemType === 'source') {
      this.refs.target_input.value = this.convertCurrency(sourceVal, sourceCurrency, targetCurrency);
    }
    else {
      this.refs.source_input.value = this.convertCurrency(targetVal, targetCurrency, sourceCurrency);
    }
  }

  convertCurrency(currencyVal, sourceCurrency, targetCurrency) {
    var ratio;
    var sourceVal = Number(this.refs.source_input.value),
      targetVal = Number(this.refs.target_input.value)

    if(currencyVal === '') {
      return;
    }

    currencyVal = Number(currencyVal);

    if(typeof currencyVal !== 'number') {
      console.log('Please enter a number only!');
      return;
    } else if (Math.sign(sourceVal) == -1 || Math.sign(targetVal) == -1) {

      var errorElement = document.getElementById('error');
      errorElement.className = 'displayError';
      return;

    }

    if(currencyRatios[sourceCurrency] && currencyRatios[sourceCurrency][targetCurrency]) {
      ratio = currencyRatios[sourceCurrency][targetCurrency];
    } else {
      throw 'Unsupported currency ratio! This should not happen!';
    }

    return (currencyVal * ratio).toFixed(2);
  }
}




export default Calculator;

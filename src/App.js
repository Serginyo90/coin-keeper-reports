import React, { Component } from 'react';
import { connect } from 'react-redux';
import Papa from 'papaparse';

import { addAccounts } from './store/actions'
import Table from './components/Table'
import logo from './logo.svg';
import './App.css';

const mapDispatchToProps = {
  addAccounts
}

class App extends Component {
  state = {
    accounts: null,
    sources: null,
    wallets: null,
    categories: null,
    tags: null,
    filteredAccounts: null,
  }

  handleChangeFileInput = event => {
    const file = event.target.files[0];
    console.log('handleChangeFileInput', event.target.files[0]);
    const reader = new FileReader();
    console.log('file', file.value);
    reader.onload = ev => {
      const endFirstString = ev.target.result.indexOf('\n');
      const newString = ev.target.result.substring(endFirstString + 1);
      const newParagraph = newString.split('\n\n\n');
      const arr = newParagraph.map(function(el) {
        return Papa.parse(el, { header: true })
      });
      this.setState({
        accounts: arr[0],
        sources: arr[1],
        wallets: arr[2],
        categories: arr[3],
        tags: arr[4],
      });
    };
    reader.readAsText(file);
  }

  handleFilterCurrency = e => {
    const filteredAccounts = this.state.accounts.data.filter(el => {
      if(e.target.value === 'all') {
        return true
      }
      return el.Currency === e.target.value;
    })
    this.setState({ filteredAccounts: { ...this.state.accounts, data: filteredAccounts }})
  }

  render() {
    let { filteredAccounts, accounts } = this.state
    filteredAccounts = filteredAccounts || accounts
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="file" onChange={this.handleChangeFileInput} />
        </header>
        <div className="main">
          { filteredAccounts && <Table accounts={filteredAccounts} filterByCurrency={this.handleFilterCurrency} /> }
        </div>
        <button onClick={() => this.props.addAccounts(['test array'])}>addAccounts</button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);

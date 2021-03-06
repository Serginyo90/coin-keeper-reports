import React, { Component } from 'react';
import { connect } from 'react-redux';
import Papa from 'papaparse';

import { setData } from './store/information/actions';
import { getFilteredAccountsData } from './store/information/selectors';
import Table from './components/Table';
import './App.css';
import './variable.css';

const mapStateToProps = state => ({
  accounts: getFilteredAccountsData(state)
});

const mapDispatchToProps = {
  setData
};

class App extends Component {

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
      this.props.setData({
        accounts: arr[0],
        sources: arr[1],
        wallets: arr[2],
        categories: arr[3],
        tags: arr[4],
      })
    };
    reader.readAsText(file);
  };

  render() {
    const { accounts } = this.props;
    return (
      <div className="App">
        <header className="header">
          <img className='logo' src="logo.png" alt="Coin Keeper Analytics"/>
          <input type="file" onChange={this.handleChangeFileInput} />
        </header>
        <div>
          { accounts && <Table accounts={accounts}/> }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

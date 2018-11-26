import React, { Component } from 'react';
import Papa from 'papaparse';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    accounts: null,
    sources: null,
    wallets: null,
    categories: null,
    tags: null,
    header: [
      '№',
      'Amount',
      'Amount converted',
      'Currency',
      'Currency of conversion',
      'Data',
      'Note',
      'Recurrence',
      'Tags',
      'From',
      'To',
      'Type'
    ]
  }

  handleChangeFileInput = event => {
    const file = event.target.files[0];
    console.log('handleChangeFileInput', event.target.files[0]);
    const reader = new FileReader();
    console.log('file', file.value);
    reader.onload = ev => {
        console.log('init string', ev.target.result);
        const endFirstString = ev.target.result.indexOf('\n');
        const newString = ev.target.result.substring(endFirstString + 1);
        const newString1 = newString.split('\n\n\n');
        console.log(newString1);
        const arr = newString1.map(function(el, i) {
          console.log(`parsed${i}`, Papa.parse(el, { header: true }));
          return Papa.parse(el, { header: true })
        });
        console.log(this);
        this.setState({
          accounts: arr[0],
          sources: arr[1],
          wallets: arr[2],
          categories: arr[3],
          tags: arr[4],
        });
        console.log('newString', newString);
    };
    reader.readAsText(file);
  }

  render() {
    let { accounts } = this.state
    const { header } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
            <input type="file" onChange={this.handleChangeFileInput}/>
        </header>
        {accounts && (
          <table>
            <tr>
              {header.map(el => <th key={1}>{el}</th>)}
            </tr>
            {accounts.data.map((el, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{el[header[1]]}</td>
                <td>{el[header[2]]}</td>
                <td>{el[header[3]]}</td>
                <td>{el[header[4]]}</td>
                <td>{el[header[5]]}</td>
                <td>{el[header[6]]}</td>
                <td>{el[header[7]]}</td>
                <td>{el[header[8]]}</td>
                <td>{el[header[9]]}</td>
                <td>{el[header[10]]}</td>
                <td>{el[header[11]]}</td>
                <td>{el[header[12]]}</td>
              </tr>
            ))}
          </table>
        )}
      </div>
    );
  }
}

export default App;

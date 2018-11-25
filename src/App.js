import React, { Component } from 'react';
import Papa from 'papaparse';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    text: null,
  }

  handleChangeFileInput = event => {
    const file = event.target.files[0];
    console.log('handleChangeFileInput', event.target.files[0]);
    const reader = new FileReader();
    console.log('file', file.value);
    reader.onload = ev => {
        console.log(ev.target.result);
        this.setState({ text: ev.target.result })
        console.log('parsed', Papa.parse(ev.target.result, { delimiter: '\n\n' }));
    };
    reader.readAsText(file);
  }

  render() {
    let { text } = this.state
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
            {text && <span>please, select the file with extansion .csv</span>}
        </header>
        <table>

        </table>
      </div>
    );
  }
}

export default App;

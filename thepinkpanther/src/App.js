import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { HashRouter } from 'react-router-dom'

class App extends Component {

  render() {
    return (<HashRouter>
      
    
      <div className="App">
        <Header />
        <Main />
        {<Footer />}
      </div>
    </HashRouter>
    );
  }
}

export default App;

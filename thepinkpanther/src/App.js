import React, { Component } from 'react';
import './App.css';
import Carousel from './components/Carousel'
import './pinkPanterApi.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      films: []
    }
  }

  componentWillMount() {
    console.log(pinkPanterApi)
    
    pinkPanterApi.getTypePopular('movie', 1)
      .then(films => this.setState({ films }))
  }

  render() {
    return (
      <div>
        <header>
          <nav id="header" className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">Movie &amp; Serie</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Peliculas
                  <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Series</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Otros</a>
                </li>
              </ul>
              <form className="form-inline mt-2 mt-md-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
              </form>
            </div>
          </nav>
        </header>
        <main>
          <section>
            <header>
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <h1 className="display-4">Peliculas</h1>
                </div>
              </div>
            </header>
            <Carousel films={this.state.films} />
          </section>
          <section>
            <header>
              <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <h1 className="display-4">Series</h1>
                </div>
              </div>
            </header>
            <Carousel films={this.state.films} />
          </section>
        </main>
        <footer className="footer">
        </footer>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Carousel from './components/Carousel'
import pinkPanterApi from './pinkPanterApi.js';
import Jumbotron from './components/Jumbotron'
import Header from './components/Header'

class App extends Component {
  constructor() {
    super()
    this.state = {
      films: [],
      itemActiveFilms: [],
      series: [],
      itemActiveSeries: []
    }
  }

  componentWillMount() {
    pinkPanterApi.getTypePopular('movie', 1)
      .then(films => this.setState({ itemActiveFilms: films.shift(), films }))

    pinkPanterApi.getTypePopular('tv', 1)
      .then(series => this.setState({ itemActiveSeries: series.shift(), series }))
  }

  showItem = (id) => {

  }

  render() {
    console.log(this.state.series)
    return (
      <div className="App">
        <header className="App-header">
          <nav id="header" className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">Movie & Serie</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
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
              </ul>
              <Header />
            </div>
          </nav>
        </header>
        <main>
          <section>
            <header>
              <Jumbotron title={"Peliculas"} />
            </header>
            <Carousel
              films={this.state.films}
              itemActiveFilms={this.state.itemActiveFilms}
              title={"Pelicula"}
            />
          </section>
          <section>
            <header>
              <Jumbotron title={"Series"} />
            </header>
            <Carousel
              films={this.state.series}
              itemActiveFilms={this.state.itemActiveSeries}
              title={"Series"}
            />
          </section>
        </main>
        <footer className="footer">
        </footer>
      </div>
    );
  }
}

export default App;

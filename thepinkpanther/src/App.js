import React, { Component } from 'react';
import './App.css';
import Carousel from './components/Carousel'
import Jumbotron from './components/Jumbotron'
import pinkPanterApi from './pinkPanterApi.js';

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
              <Jumbotron title={"Peliculas"} />
            </header>
            <Carousel
              films={this.state.films}
              itemActiveFilms={this.state.itemActiveFilms}
              onShowItem={this.showItem}
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

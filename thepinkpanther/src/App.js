import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import Carousel from './components/Carousel'
import pinkPanterApi from './pinkPanterApi.js';
import Jumbotron from './components/Jumbotron'
import Header from './components/Header'
=======
import Header from './components/Header';
import Main from './components/Main'
import { HashRouter, Route } from 'react-router-dom'
>>>>>>> c6fe5902814fe0fb5ba4619e33ec919975280ef2

class App extends Component {

  render() {
    return (<HashRouter>
      
      <div className="App">
<<<<<<< HEAD
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
=======
        <Header />
        <Main />
        {/* <Footer /> */}
>>>>>>> c6fe5902814fe0fb5ba4619e33ec919975280ef2
      </div>
      </HashRouter>
    );
  }
}

export default App;

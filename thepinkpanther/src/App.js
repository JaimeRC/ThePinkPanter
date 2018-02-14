import React, { Component } from 'react'
import './App.css';
<<<<<<< HEAD
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { HashRouter } from 'react-router-dom'
=======
import Carousel from './components/Carousel';
import Jumbotron from './components/Jumbotron';
import pinkPanterApi from './pinkPanterApi.js';
import Header from './components/Header';
import logo from './logo.png';
>>>>>>> 64ac4f341cbb8a31c807f2cc33e342c1b7f9b733




class App extends Component {

  render() {
    return (<HashRouter>
      
    
      <div className="App">
<<<<<<< HEAD
        <Header />
        <Main />
        {<Footer />}
=======
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
              <Jumbotron title={"Peliculas Destacadas"} />
            </header>
            <Carousel
              films={this.state.films}
              itemActiveFilms={this.state.itemActiveFilms}
              onShowItem={this.showItem}
              title={"Pelicula"}
            />
          </section>
          <section className="logo">
            <img src={logo} className="img-fluid" alt="logo" width='30%'/>
            <p className="mgt10">Más de 10.000 titulos disponibles para nuestros clientes</p>
            <button class="btn btn-outline-success my-2 my-sm-0 mrr10">Peliculas</button>
            <button class="btn btn-outline-success my-2 my-sm-0">Series</button>
          </section>
          <section>
            <header>
              <Jumbotron title={"Series Destacadas"} />
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
>>>>>>> 64ac4f341cbb8a31c807f2cc33e342c1b7f9b733
      </div>
    </HashRouter>
    );
  }
}

export default App;

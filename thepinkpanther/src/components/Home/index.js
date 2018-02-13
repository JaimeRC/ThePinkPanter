import React, { Component } from 'react';
import './main.css';
import Carousel from '../Carousel'
import Jumbotron from '../Jumbotron'
import pinkPanterApi from '../../pinkPanterApi.js';
import logo from './logo.png';


class Home extends Component {
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

        return (
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

                <section className="logo">
                    <img src={logo} className="img-fluid" alt="logo" width='30%' />
                    <p className="mgt10">Más de 10.000 titulos disponibles para nuestros clientes</p>
                    <button class="btn btn-outline-success my-2 my-sm-0 mrr10">Peliculas</button>
                    <button class="btn btn-outline-success my-2 my-sm-0">Series</button>
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

        )

    }
}
export default Home;
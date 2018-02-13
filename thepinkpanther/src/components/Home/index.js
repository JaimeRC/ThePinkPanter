import React, { Component } from 'react';
import './main.css';
import Carousel from '../Carousel'
import Jumbotron from '../Jumbotron'
import pinkPanterApi from '../../pinkPanterApi.js';


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
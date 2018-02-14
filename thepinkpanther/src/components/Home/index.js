import React, { Component } from 'react';
import './main.css';
import Carousel from '../Carousel'
import Jumbotron from '../Jumbotron'
import pinkPanterApi from '../../pinkPanterApi.js';
import logo from './logo.png';



function Home(props) {
    return (
        <main>
            <section>
                <header>
                    <Jumbotron title={"Peliculas"} />
                </header>
                <Carousel
                    films={props.films}
                    itemActiveFilms={props.itemActiveFilms}
                    title={"movie"}
                />
            </section>

            <section className="logo">
                <img src={logo} className="img-fluid" alt="logo" width='30%' />
                <p className="mgt10">Más de 10.000 titulos disponibles para nuestros clientes</p>
                <button class="btn my-2 my-sm-0 mrr10">Peliculas</button>
                <button class="btn my-2 my-sm-0">Series</button>
            </section>

            <section>
                <header>
                    <Jumbotron title={"Series"} />
                </header>
                <Carousel
                    films={props.series}
                    itemActiveFilms={props.itemActiveSeries}
                    title={"tv"}
                />
            </section>
        </main>

    )

}

export default Home;
import React from 'react';
import './styles/main.css';
import Carousel from '../Carousel'
import Jumbotron from '../Jumbotron'
import logo from './images/logo.png';

function Home(props) {
    return (
        <main>
            <section>
                <header>
                    <Jumbotron title={"Peliculas"} />
                </header>
                <Carousel
                    items={props.films}
                    itemActive={props.itemActiveFilms}
                    title={"movie"}
                />
            </section>

            <section className="logo hidden-xs-down" >
                <img src={logo} className="img-fluid" alt="logo" width='30%' />
                <p className="mgt10">Más de 10.000 titulos disponibles para nuestros clientes</p>
                
            </section>

            <section>
                <header>
                    <Jumbotron className={"Series"} title={"Series"} />
                </header>
                <Carousel
                    items={props.series}
                    itemActive={props.itemActiveSeries}
                    title={"tv"}
                />
            </section>
        </main>
    )
}

export default Home;
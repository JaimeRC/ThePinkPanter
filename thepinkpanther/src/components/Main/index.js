import React, { Component } from 'react'
import { HashRouter, Route, NavLink, withRouter } from 'react-router-dom'
import pinkPanterApi from '../../pinkPanterApi.js';
import Home from '../Home';
import Films from '../Films';
import Results from '../Results'
import DetailsItem from '../DetailsItem'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            films: [],
            itemActiveFilms: [],
            series: [],
            itemActiveSeries: [],
            item: {},
            type: ""
        }
    }

    componentWillMount() {
        pinkPanterApi.getTypePopular('movie', 1)
            .then(films => this.setState({ itemActiveFilms: films.shift(), films }))
        pinkPanterApi.getTypePopular('tv', 1)
            .then(series => this.setState({ itemActiveSeries: series.shift(), series }))
    }



    render() {

        return (
            <div className="header">

                <Route exact path="/" render={() => (
                    <Home
                        films={this.state.films}
                        itemActiveFilms={this.state.itemActiveFilms}
                        series={this.state.series}
                        itemActiveSeries={this.state.itemActiveSeries}
                    />)} />

                <Route exact path='/Films' render={() => (
                    <Films
                        films={this.state.films}
                    />)} />

                <Route exact path='/TV' render={() => (
                    <Films
                        films={this.state.series}
                    />)} />

                <Route path="/search/:query" component={Results} />

                <Route path="/details/:type/:id" component={DetailsItem} />

            </div>)
    }
}

export default Main
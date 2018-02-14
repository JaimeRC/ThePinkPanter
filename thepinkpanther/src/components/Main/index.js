import React, { Component } from 'react'
import { HashRouter, Route, NavLink, withRouter } from 'react-router-dom'
import pinkPanterApi from '../../pinkPanterApi.js';
import Home from '../Home';
import Films from '../Films';
import Results from '../Results'

class Main extends Component {
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

    showItem = (type, id) => {
        pinkPanterApi.getDetaillsIdType(type, id)
            .then(item => console.log(item))
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
                showItem={this.showItem}
                />)} />
                
                <Route exact path='/Films' render={() => (
                <Films
                films={this.state.films}
                />)}/>

                <Route exact path='/TV' render={() => (
                <Films
                films={this.state.series}
                />)}/>
                
                <Route path="/search/:query" component={Results} />

            </div>)
    }
}

export default Main
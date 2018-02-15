import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import pinkPanterApi from '../../pinkPanterApi.js';
import Home from '../Home';
import Items from '../Items';
import Results from '../Results';
import DetailsItem from '../DetailsItem';
import Pagination from "react-js-pagination";

class Main extends Component {
    constructor() {
        super()
        this.state = {
            films: [],
            itemActiveFilms: [],
            series: [],
            itemActiveSeries: [],
            item: {},
            activePageMovie: 1,
            activePageTv: 1
        }
    }

    loadMovies(type, page) {
        pinkPanterApi.getTypePopular(type, page)
            .then(films => this.setState({ itemActiveFilms: films.shift(), films }))
    }

    loadTv(type, page) {
        pinkPanterApi.getTypePopular(type, page)
            .then(series => this.setState({ itemActiveSeries: series.shift(), series }))
    }

    componentWillMount() {
        this.setState({ activePageMovie: 1 })
        this.setState({ activePageTv: 1 })
        this.loadMovies('movie', 1)
        this.loadTv('tv', 1)
    }

    componentWillReceiveProps(props) {
        this.setState({ activePageMovie: 1 })
        this.setState({ activePageTv: 1 })
        this.loadMovies('movie', 1)
        this.loadTv('tv', 1)
    }

    handlePageChangeMovies = (pageNumber) => {
        this.setState({ activePageMovie: pageNumber })
        this.loadMovies('movie', pageNumber)
    }

    handlePageChangeTv = (pageNumber) => {
        this.setState({ activePageTv: pageNumber })
        this.loadTv('tv', pageNumber)
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
                    <div>
<<<<<<< HEAD
                        <Items
                            items={this.state.films}
                            type={'movie'}
                        />
                        <Pagination
                            activePage={this.state.activePageMovie}
                            itemsCountPerPage={10}
                            totalItemsCount={200}
                            onChange={this.handlePageChangeMovies}
                        /></div>)} />

                <Route exact path='/TV' render={() => (
                    <div>
                        <Items
                            items={this.state.series}
                            type={'tv'}
                        />
                        <Pagination
                            activePage={this.state.activePageTv}
                            itemsCountPerPage={10}
                            totalItemsCount={200}
                            onChange={this.handlePageChangeTv}
                        /></div>)} />
=======
                    <Items
                        items={this.state.films}
                        type={'movie'}
                    />
                    <Pagination
                        activePage={this.state.activePageMovie}
                        itemsCountPerPage={10}
                        totalItemsCount={1000}
                        onChange={this.handlePageChangeMovies}
                    /></div>)} />

                <Route exact path='/TV' render={() => (
                    <div>
                    <Items
                        items={this.state.series}
                        type={'tv'}
                    />
                    <Pagination
                        className={'pagination'}
                        activePage={this.state.activePageTv}
                        itemsCountPerPage={10}
                        totalItemsCount={1000}
                        onChange={this.handlePageChangeTv}
                    /></div>)} />
>>>>>>> develop

                <Route path="/search/:query" component={Results} />

                <Route path="/details/:type/:id" component={DetailsItem} />

            </div>)
    }
}

export default Main
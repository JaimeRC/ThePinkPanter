import React, { Component } from 'react'
import { HashRouter, Route, NavLink, withRouter } from 'react-router-dom'
import pinkPanterApi from '../../pinkPanterApi.js';
<<<<<<< HEAD
import Home from '../Home'
import DetailsItem from '../DetailsItem'
=======
import Home from '../Home';
import Films from '../Films';
import Results from '../Results'
>>>>>>> develop

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

<<<<<<< HEAD
=======
    showItem = (type, id) => {
        pinkPanterApi.getDetaillsIdType(type, id)
            .then(item => console.log(item))
    }
>>>>>>> develop


    render() {
        console.log(this.state.item + "    item")
        console.log(this.state.type + "   tipo")
        return (
            <div className="header">

                <Route exact path="/" render={() => (
<<<<<<< HEAD
                    <Home
                        films={this.state.films}
                        itemActiveFilms={this.state.itemActiveFilms}
                        series={this.state.series}
                        itemActiveSeries={this.state.itemActiveSeries}
                        onShowItem={this.showItem} />)} />
                {/* <Route exact path="/Films" component={Films} />
            <Route path="/TV" component={TV} /> */}
                <Route exact path="/details" render={() => (
                    <DetailsItem item={this.state.item} type={this.state.type} />
                )} />
=======
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

>>>>>>> develop
            </div>)
    }
}

export default Main
import React, { Component } from 'react'
import pinkPanterApi from '../../pinkPanterApi';
import Card from '../Card';
import Pagination from "react-js-pagination";

class Results extends React.Component {

    constructor() {
        super()
        this.state = {
            search: [],
            activePage: 1
        }
    }

    loadSearch(query, page) {
        pinkPanterApi.getSearch(query, page)
            .then(search => this.setState({ search }))
    }

    componentWillMount() {
        this.setState(prevState => { activePage: 1 })
        this.loadSearch(this.props.match.params.query, this.state.activePage)
    }

    componentWillReceiveProps(props) {
        this.setState({ activePage: 1 })
        this.loadSearch(props.match.params.query, this.state.activePage)
    }

    handlePageChange = (pageNumber) => {
        this.setState({ activePage: pageNumber })
        this.loadSearch(this.props.match.params.query, this.state.activePage)
    }

    render() {
        console.log(this.state.search)
        return (
            <div>
                <h1>{this.props.match.params.query}</h1>
                <div className='container'>
                    <div className='card-deck'>
                        {this.state.search.map(film => {
                            return (
                                <Card itemActiveFilms={film} />
                            )
                        })}
                    </div>
                </div>

                <div>
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={450}
                        onChange={this.handlePageChange}
                    />
                </div>
            </div>
        )
    }
}

export default Results
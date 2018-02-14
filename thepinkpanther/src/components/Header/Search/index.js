
// import movieApi from '../../movieApi';
import React, { Component } from 'react'
import pinkPanterApi from '../../../pinkPanterApi.js';
import { withRouter } from 'react-router-dom'

class Search extends Component {
    constructor() {
        super();
        this.state = {
            query: ''
        }
    }

    keepInput = (e) => this.setState({ query: e.target.value })

    search() {
        if (this.state.query)
            this.props.history.push(`/search/${this.state.query}`)
    }

    render() {
        return <div>
            <form className="form-inline" onSubmit={e => { e.preventDefault(); this.search() }}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.keepInput} value={this.state.query}/>
                <button id="Find" className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </form>
        </div>
    }
    
}

const SearchWithRouter = withRouter(Search)

export default SearchWithRouter

// import movieApi from '../../movieApi';
import React, {Component} from 'react'
import pinkPanterApi from '../../../pinkPanterApi.js';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            query:'',
            movies:''
            
        }
    }

keepInput = (e) => this.setState({ query: e.target.value })

getInfo = (e) => {
    e.preventDefault();
    pinkPanterApi.getSearch(this.state.query)
    .then(info => {movies: info})
    this.setState = { query: '' }
}

    render() {
        return <div>   
        <form className="form-inline" onSubmit={this.getInfo}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.keepInput} />
            <button id="Find" className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
        </form>
        </div>    
    }
}



export default Search
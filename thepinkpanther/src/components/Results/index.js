import React from 'react'
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
<<<<<<< HEAD
        this.setState({ activePage: 1 })
        this.loadSearch(this.props.match.params.query, this.state.activePage)
=======
        this.setState(prevState => { activePage: 1 })
        this.loadSearch(this.props.match.params.query, 1)
>>>>>>> 8203aa51c1c8cad9f5e61180ea9d5f5226e425f9
    }

    componentWillReceiveProps(props) {
        this.setState({ activePage: 1 })
        this.loadSearch(props.match.params.query, 1)
    }

    handlePageChange = (pageNumber) => {
        this.setState({ activePage: pageNumber })
        this.loadSearch(this.props.match.params.query, pageNumber)
    }

    render() {
        return (
            <div>
                <h1>{this.props.match.params.query}</h1>
                <div className='container'>
                    <div className='card-deck'>
                        {this.state.search.map(item => {
                            return (
                                <Card item={item} type={item.media_type}/>
                            )
                        })}
                    </div>
                </div>

                <div>
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={200}
                        onChange={this.handlePageChange}
                    />
                </div>
            </div>
        )
    }
}

export default Results
import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home'

function Main(props) {
    return(
        <div className="header">
            
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/Films" component={Films} />
            <Route path="/TV" component={TV} /> */}

        </div>)
    
}

export default Main
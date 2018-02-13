import React, { Componet } from 'react'

function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{props.title}</h1>
            </div>
        </div>
    )
}

export default Jumbotron
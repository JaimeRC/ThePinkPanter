import React, { Componet } from 'react'

function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4"><a onClick={(e) => {
                    props.onShowCards()
                }}>{props.title}</a></h1>
            </div>
        </div>

    )
}

export default Jumbotron
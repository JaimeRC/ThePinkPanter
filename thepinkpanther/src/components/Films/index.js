'use strict'
import React from 'react'
import Card from '../Card';


function Films(props) {
        return (
            <div className="container">
            {props.film.map(info => {
                return (
                    <Card />
                )
            })}
                
            </div>
                    
        )
}

export default Films
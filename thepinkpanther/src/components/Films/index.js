'use strict'
import React from 'react'
import Card from '../Card';


function Films(props) {
        return (
            <div className="container">
            {props.films.map(film => {
                return (
                    <Card itemActiveFilms={film}/>
                )
            })}
                
            </div>
                    
        )
}

export default Films
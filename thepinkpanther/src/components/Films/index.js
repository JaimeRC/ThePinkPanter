'use strict'
import React from 'react'
import Card from '../Card';
import './main.css'


function Films(props) {
        return (
            <div className="container">
                <div className='card-deck'>
                    {props.films.map(film => {
                        return (
                            <Card itemActiveFilms={film}/>
                        )
                    })}
                </div>
            </div>
                    
        )
}

export default Films
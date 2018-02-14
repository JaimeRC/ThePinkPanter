import React from 'react'
import Card from '../Card';
import './styles/main.css'


function Films(props) {
        return (
            <div id="Container-films" className="container">
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
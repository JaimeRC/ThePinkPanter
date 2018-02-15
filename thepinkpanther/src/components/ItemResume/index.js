import React from 'react'
import './styles/main.css'

function ItemResume(props) {
    console.log(props.item)
    return (
        <div id="info" className="resume">
            <div className="colum1 col-md-5">
                {(props.item.poster_path) ? <img className="img-thumbnail" src={`http://image.tmdb.org/t/p/w500/${props.item.poster_path}`} alt={props.item.id} /> : undefined}

            </div>
            <div className="colum2 col-md-6">
                <h1>{(props.item.tagline) ? props.item.tagline : null}</h1>
                <br />
                <br />
                <p>{props.item.overview}</p>
                <table class="table table-sm table-dark">
                    <tbody>
                        <tr>
                            <th scope="row">Pagina Ogicial</th>
                            <td>{props.item.homepage}</td>
                        </tr>
                        <tr>
                            <th scope="row">Genero</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Fecha de Estreno</th>
                            <td>{(props.item.release_date) ? props.item.release_date : props.item.first_air_date}</td>
                        </tr>
                        <tr>
                            <th scope="row">Productor</th>
                            <td>{(props.item.production_companies > 0) ? props.item.production_companies[0].name : undefined}</td>
                        </tr>
                        <tr>
                            <th scope="row">production_companies[0].name</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">production_countries[0].name</th>
                            <td>United States of America</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ItemResume
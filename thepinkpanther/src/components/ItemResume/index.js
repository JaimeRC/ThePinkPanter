import React from 'react'
import './styles/main.css'

function ItemResume(props) {
    console.log(props.item)
    if (!props.item)
        return undefined
    return (
        <div id="info" className="resume">
            <div className="colum1 col-md-5">
                <img className="img-thumbnail" src={(props.item.poster_path) ? `http://image.tmdb.org/t/p/w500/${props.item.poster_path}` : undefined} alt={props.item.id} />
            </div>
            <div className="colum2 col-md-6">
                <h1>{(props.item.tagline) ? props.item.tagline : null}</h1>
                <br />
                <br />
                <p>{props.item.overview}</p>

                <table className="table table-sm table-dark">
                    <tbody>
                        <tr>
                            <th scope="row">Pagina oficial</th>
                            <td>{props.item.homepage}</td>
                        </tr>
                        <tr>
                            <th scope="row">Fecha de Lanzamiento</th>
                            <td>{props.item.release_date}</td>
                        </tr>
                        <tr>
                            <th scope="row">Genero</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">Productora</th>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ItemResume
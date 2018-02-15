import React, { Component } from 'react'
import './styles/main.css'
import logo from './logo_footer.png'
import logoSky from './logo_skylab.png'

function Footer(props) {
    return (
        
        <div className="footer">
            <div className="row">
                <div className="col-sm-10">
                    <label>Contributors:</label>
                    <ul>
                        <li>Carlos Ramos</li><br/>
                        <li>Alex Gonzalez</li><br/>
                        <li>Jaime Rubio</li>
                    </ul>
                </div>
                <div className="col-sm-2">
                        <img className="imgFooter" src={logo} />
                        <img className="imgSkyFooter" src={logoSky} />
                </div>

            </div>
        </div>
    )
}

export default Footer
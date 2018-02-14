import React from 'react'
import './styles/main.css'
import logo from './images/logo_footer.png'
import logoSky from './images/logo_skylab.png'

function Footer(props) {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-sm-10">
                    <label>Contributors</label>
                    <ul>
                        <li>Carlos Ramos</li>
                        <li>Alex Gonzalez</li>
                        <li>Jaime Rubio</li>
                    </ul>
                </div>
                <div className="col-sm-2">
                        <img className="imgFooter" src={logo} alt={"logoEquipo"}/>
                        <img className="imgSkyFooter" src={logoSky} alt={"logoSky"}/>
                </div>
            </div>
        </div>
    )
}

export default Footer
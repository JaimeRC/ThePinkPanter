import React from 'react'
import './styles/main.css'
import logo from './images/logo_footer.png'
import logoSky from './images/logo_skylab.png'

function Footer(props) {
    return (
        <footer className="footer">
            <div className="container">
                        <ul>
                        <label>Contributors:</label>
                            <li><a className="colaborators" href="https://github.com/Asix94">Carlos Ramos</a></li>
                            <li><a className="colaborators" href="https://github.com/AlexGonRod">Alex Gonzalez</a></li>
                            <li><a className="colaborators" href="https://github.com/JaimeRC">Jaime Rubio</a></li>
                        </ul>
            </div>
        </footer>
    )
}

export default Footer
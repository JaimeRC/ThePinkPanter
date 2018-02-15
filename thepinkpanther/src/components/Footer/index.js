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
                            <li>Carlos Ramos</li>
                            <li>Alex Gonzalez</li>
                            <li>Jaime Rubio</li>
                        </ul>
            </div>
        </footer>
    )
}

export default Footer
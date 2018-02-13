import React, { Component } from 'react';
import './styles/card.css';
import movieApi from 'movieApi';


const Card = (props) => {
    <div className="flip-container">
        <div className="front">
            <img src="" alt="" />
            <div className="footer">
                <p><strong>Title</strong><br />
                    Film category
                </p>
            </div>
        </div>
        <div className="back">
            <p><strong>Film title</strong>
                <br />
                <br /> Film info <br /> More info <br /> Much more info
                </p>
        </div>
    </div>
}


export default Card
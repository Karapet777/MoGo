import React from 'react'
import './Service.css'

const Service = (props) => {
    return (
        <div className = 'blockService'>
            <img className = 'img' src= {props.src} alt="icon" />
            <div className= 'itemBlock'>
                <p className = 'text'>{props.textServ}</p>
                <p>{props.textInfo}</p>
            </div>
        </div>
    )
}

export default Service
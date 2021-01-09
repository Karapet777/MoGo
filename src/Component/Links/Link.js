import React from 'react'
import './Link.css'

export const Link = (props) => {
    return(
        <a className={props.class} href="www.google.com">{props.link}</a>
    )
}

export const LinkImg = (props) => {
    return (
        <a className={props.IconClass} href="www.google.com"><img src={props.icon} alt="shop"/></a>
    )
}

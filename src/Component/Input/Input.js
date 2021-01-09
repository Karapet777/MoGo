import React from 'react'

const Input = (props) => {
    return (
        <input className = {props.class} type="text" placeholder = {props.place}/>
    )
}
 
export default Input
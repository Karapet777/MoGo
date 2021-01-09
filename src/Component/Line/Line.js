import React from 'react'
import './Line.css'

const Line = (props) => {
    return (
        <div className = {props.lineClass}>
          {props.children}
        </div>
    )
}
export default Line
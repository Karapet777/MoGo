import React from 'react'
import './NumberBlock.css'

const NumberBlock = (props) => {
    return (
            <div className= {props.classesBord}>
                <p className = 'NumClass'>{props.num}</p>
                <p className = 'TextClass'>{props.value}</p>
            </div>
    )
}
export default NumberBlock;
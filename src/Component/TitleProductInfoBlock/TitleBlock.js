import React from 'react'
import './TitleBlock.css'
import Line from '../Line/Line'

const TitleProductInfoBlock = (props) => {
    
    return (
        <div className = {props.class}>
                <p className = 'itemTextStory'>{props.tit1}</p>
                <p className = 'Us_item'>{props.tit2}</p>
                <Line lineClass = 'lineStoryAbout'/>
        </div>
    )
} 

export default TitleProductInfoBlock;
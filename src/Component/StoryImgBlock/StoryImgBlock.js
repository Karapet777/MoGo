import React from 'react'
import './StoryImgBlock.css'
import Layer from '../../Assets/img/LayerStory.png'


const StoryImgBlock = (props) => {
    return (
        <div className= {props.block}>
           <img className = {props.userIcon} src = {props.icon} alt="UserIcon"/>
           <p className = {props.IconText}>{props.value}</p>
           <img className= {props.layer} src= {Layer} alt="Layer" />
           <img className = {props.hover} src= {props.img} alt="img"/>
        </div>
    )
}

export default StoryImgBlock;
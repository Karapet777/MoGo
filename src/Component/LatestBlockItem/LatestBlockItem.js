import React from 'react'
import './LatestBlockItem.css'
import Img from '../Img/Img'



const LatestBlockItem = (props) => {

    
    return (
        <div className = 'containerLatest'>
            <div className = 'blockImg'>
                <Img src = {props.src}/>
                <div className = 'block_month'>
                    <p className = 'numb'>{props.num}</p>
                    <p className = 'txt'>{props.month}</p>
                </div>
            </div>
            <div className = 'text'>
                <p>{props.text1}</p>
                <p>{props.text2}</p>
            </div>
            <hr/>
            <div className = 'block_icons'>
               <img src= {props.icon1} alt="icon"/>
               <p>{props.iconNumber1}</p>
               <img src= {props.icon2} alt="icon"/>
               <p>{props.iconNumber2}</p>

            </div>
        </div>
    )
}
export default LatestBlockItem
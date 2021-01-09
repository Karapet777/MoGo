import React from 'react'
import './maps.css'
import iconMap from '../../Assets/Icons/mapIcon.png'
import Img from '../../Component/Img/Img'



const Maps = () => {
    return (
        <div className = 'app_Map_container'>
            <div className = 'opasWithe'></div>
            <div className = 'blockMap'>
                <Img src = {iconMap}/>
                <p>OPEN MAP</p>
                <span className = 'line'></span>
            </div>

        </div>
    )
}
export default Maps
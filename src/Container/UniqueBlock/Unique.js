import React, { useState } from 'react'
import './Unique.css'
import TitleProductInfoBlock from '../../Component/TitleProductInfoBlock/TitleBlock'
import Ipad from '../../Assets/img/iPad.png'
import Iphone from '../../Assets/img/imgIphoe.png'

const Unique = () => {
    const [uniInfo] = useState([
        {tit1: 'For all devices', tit2 : 'Unique design'}
    ])
    return (
        <div className= 'BlockUnique'>
            <div className = 'layer'>
                <TitleProductInfoBlock 
                tit1 = {uniInfo[0].tit1}
                tit2 = {uniInfo[0].tit2}
                class = 'uniTitleBlock'
                />
            </div>
                <img className= 'imgIpad' src={Ipad} alt="ipad" />
                <img className= 'imgIphon' src={Iphone} alt="ipad" />

        </div>
    )
}
export default Unique
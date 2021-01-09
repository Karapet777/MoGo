import React from 'react'
import './Latest.css'
import LatestBlockItem from '../../Component/LatestBlockItem/LatestBlockItem'
import TitleBlock from '../../Component/TitleProductInfoBlock/TitleBlock'

import img from '../../Assets/img/Layer 54.png'
import icon1 from '../../Assets/Icons/VIEW.png'
import icon2 from '../../Assets/Icons/SPEECH BUBBLE 2.png'
import img2 from '../../Assets/img/Layer 55.png'
import img3 from '../../Assets/img/Layer 57.png'



const Latest = () => {

    const Latest = [
        {src: img , num: 15, month: 'Jan', text1: 'Lorem ipsum dolor sit amet', text2: 'Consectetur adipiscing  do eiusmod tempor incididunt ut labore et dolore magna aliqua.', icon1: icon1 ,iconNumber1: 512, icon2: icon2, iconNumber2 : 47},
        {src: img2 , num: 15, month: 'Jan', text1: 'sed do eiusmod tempor', text2: 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', icon1: icon1 ,iconNumber1: 992, icon2: icon2, iconNumber2 : 42},
        {src: img3 , num: 15, month: 'Jan', text1: 'incididunt ut labore et dolore', text2: 'Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', icon1: icon1 ,iconNumber1: 1560, icon2: icon2, iconNumber2 : 98}

    ]
    const LatTit = [
        {tit1: 'Our stories', tit2: 'Latest blog'}
    ]


    return (
        <div className = 'app-container-latest'>
             <TitleBlock tit1 = {LatTit[0].tit1} tit2 = {LatTit[0].tit2} class = 'block'/>
            <div className = 'app-block-latest'>
                {Latest.map((elem, index) => {
                    return (
                        <LatestBlockItem 
                            key = {index}
                            src = {elem.src}
                            num = {elem.num}
                            month = {elem.month}
                            text1 = {elem.text1}
                            text2 = {elem.text2}
                            icon1 = {elem.icon1}
                            iconNumber1 = {elem.iconNumber1}
                            icon2 = {elem.icon2}
                            iconNumber2 = {elem.iconNumber2}
                        />
                    )
                })}
            </div>
            
        </div>
    )
}
export default Latest
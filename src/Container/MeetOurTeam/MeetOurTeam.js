import React, { useState } from 'react'
import './MeetOurTeam.css'
import StoryImgBlock from '../../Component/StoryImgBlock/StoryImgBlock'
import TitleBlock from '../../Component/TitleProductInfoBlock/TitleBlock'
// Img
import img1 from '../../Assets/img/boyimg1.png'
import img2 from '../../Assets/img/boyimg2.png'
import img3 from '../../Assets/img/boyimg3.png'
// Icons
import face from '../../Assets/Icons/facebook.png'
import insta from '../../Assets/Icons/instagram.png'
import pent from '../../Assets/Icons/pinterest.png'
// import twit from '../../Assets/Icons/twitter.png'





const MeetOurTeam = () => {
    const [img] = useState([
        {img: img1, icon: face },
        {img: img2, icon: insta},
        {img: img3, icon: pent},
    ])

    const [Meet] = useState([
        {tit1: 'Who we are' , tit2: 'Meet our team'}
    ])



    return (
        <div className = 'Meet_container'>
            {Meet.map((elem, index) => {
                return (
                    <TitleBlock 
                      key = {index}
                      tit1 = {elem.tit1}
                      tit2 = {elem.tit2}
                      class = {'TitleBlock'}
                    />
                )
            })}
            <p className = 'textWhatBlock'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, optio.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, optio.</p>
            <div className = 'BlockImg'>
                { img.map((elem, index) => {
                    return (
                       
                            <StoryImgBlock 
                                    key = {index}
                                    img = {elem.img}
                                    icon = {elem.icon}
                                    block = {'Block'}
                                    userIcon = {'Icon'}
                                    IconText = {'Textt'}
                                    layer = {'Layers'}
                                    hover = {"hoverImges"}
                            />
                       
                    )
                })}
            </div>
        </div>
        
    )
}
export default MeetOurTeam
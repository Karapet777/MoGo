import React, { useState } from 'react'
import './StoryAbout.css'
import StoryImgBlock from '../../Component/StoryImgBlock/StoryImgBlock'
import Flower from '../../Assets/img/flowerStoryblockBG.png'
import Headphones from '../../Assets/img/headphonesStoryBG.png'
import Mac from '../../Assets/img/MacStoryBG.png'
import Usericon from '../../Assets/Icons/USERS.png'
import TitleProductInfoBlock from "../../Component/TitleProductInfoBlock/TitleBlock";

const StoryAbout = () => {
    const [Img ] = useState([
        {img: Mac, icon: Usericon },
        {img: Headphones, icon: Usericon},
        {img: Flower, icon: Usericon}
    ])
    const [Title] = useState([
        {tit1: 'What wi do', tit2: 'Story About us'}
    ])





    return (
        <div >
            <TitleProductInfoBlock 
             tit1 = {Title[0].tit1}
             tit2 = {Title[0].tit2}
             class = {'StoryAboutBlockItem'}
            />
            <div className = 'textStoryInfo'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident cum nulla quo ratione minima modi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maiores quam molestias distinctio non sint?</p>
            </div>
            <div className= 'imgesBlock'>
                {Img.map((block, index) => {
                    return (
                        <StoryImgBlock 
                          key = {index}
                          img = {block.img}
                          icon = {block.icon}
                          block = {'bgBlueBlock'}
                          userIcon = {'UserIcon'}
                          IconText = {'UserIconText'}
                          layer = {'Layer'}
                          hover = {"hoverImg"}
                          value = {'Super Team'}
                        />
                    )
                })}
               
            </div>

        </div>
    )
}

export default StoryAbout;
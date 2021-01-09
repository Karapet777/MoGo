import React, { useState } from 'react'
import './Some.css'
import TitleProductInfoBlock from '../../Component/TitleProductInfoBlock/TitleBlock'
import Img from '../../Component/Img/Img'

//Imges
import img1 from '../../Assets/img/Layer 26.png'
import img2 from '../../Assets/img/Layer 33.png'
import img3 from '../../Assets/img/Layerbridge.png'
import img4 from '../../Assets/img/Layer 29.png'
import img5 from '../../Assets/img/LayerMedusa.png'
import img6 from '../../Assets/img/Layerroof.png'
import img7 from '../../Assets/img/Layer skyscraper.png'
import UserImg from '../../Assets/img/UserImge.png'



 
const Some = () => {
    const [Sometext] = useState([
        {tit1 : 'What we do', tit2: 'Some of our work'}
    ])
    return( 
        <div>
            {Sometext.map((elem, index) => {
                return (
                    <TitleProductInfoBlock 
                        key = {index}
                        tit1 = {elem.tit1}
                        tit2 = {elem.tit2}
                        class = 'SomeTitleBlock'
                    />
                )
            })}
            <p className = 'text_some'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laudantium odio, a molestias enim cumque dicta id quia vel! Sequi
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laudantium odio, a molestias enim cumque dicta id quia vel! Sequi.</p>
        
            <div className = 'contImg'>
                <div className = 'blkImg'>
                   <div>
                        <Img src = {img1}/>
                        <Img src = {img3}/>

                    </div>
                    <div>
                        <Img src = {img2}/>
                        <Img src = {img4}/>
                   </div>
                        <Img src = {img5}/>
                   <div>
                        <Img src = {img6}/>
                        <Img src = {img7}/>
                   </div>
                </div>
            </div>

            <div className = 'cont_Mes'>
                <div>
                    <img src= {UserImg} alt="UserImg"/>
                </div>
                <div>
                    <p className = 'mesText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia dicta, dolorem ea sunt sit numquam at fugiat deleniti eum voluptatum!</p>
                    <p className = 'mesAuter'><span className = 'clsLine'></span> Joshua Earle</p>
                </div>
            </div>
        </div>
    )
}

export  default Some
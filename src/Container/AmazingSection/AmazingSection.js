import React, { useState } from 'react'
import "./AmazingSection.css";
import TitleProductInfoBlock from '../../Component/TitleProductInfoBlock/TitleBlock'
import Service from '../Service/Service'

import Creativ from '../../Assets/Icons/Creativity icon.png'
import Digitl from '../../Assets/Icons/digitl.png'
import Htm from '../../Assets/Icons/htm.png'
import Phot from '../../Assets/Icons/Photography.png'
import SEO from '../../Assets/Icons/SEO.png'
import Web from '../../Assets/Icons/WebDesiger.png'



const AmazingSection = () => {
    const [Title] = useState([
        {tit1: 'We work with', tit2: 'Amazing Services'}
      ])

    const [serv] = useState({
        block1: [
            {src: Phot , textServ: 'Photography', textInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
            {src: Web , textServ: 'Web Design', textInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
            {src: Creativ , textServ: 'Creativity', textInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
        ],
        block2: [
            {src: SEO , textServ: 'SEO', textInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
            {src: Htm , textServ: 'CSS/HTML', textInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
            {src: Digitl , textServ: 'DIGITAL', textInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'},
        ]
    })
    return (
        <div>
            <TitleProductInfoBlock 
              tit1 = {Title[0].tit1}
              tit2 = {Title[0].tit2}
              class = {'service'}
            />
            <div>
               <div className= 'iconBlock'>
                    {serv.block1.map((elem, index) => {
                        return (
                            <Service 
                                key = {index}
                                src = {elem.src}
                                textServ = {elem.textServ}
                                textInfo = {elem.textInfo}
                            />
                        )
                    })}
               </div>

                <div className= 'iconBlock'>
                    {serv.block2.map((elem, index) => {
                            return (
                                <Service 
                                    key = {index}
                                    src = {elem.src}
                                    textServ = {elem.textServ}
                                    textInfo = {elem.textInfo}
                                />
                            )
                    })}
                </div>
            </div>

        </div>
    )
}

export default AmazingSection
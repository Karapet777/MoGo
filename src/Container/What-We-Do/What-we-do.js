import React, { useState } from 'react'
import './what-we-do.css'
import TitleBlock from '../../Component/TitleProductInfoBlock/TitleBlock'
import Boy from '../../Assets/img/boyPhoto.png'
import PhotoIcon from '../../Assets/Icons/photograpiIcon.png'
import arrowIcon from '../../Assets/Icons/ARROW _ DOWN.png' 
import creativIcon from '../../Assets/Icons/creaticity.png'
import WebDesIcon from '../../Assets/Icons/webDesIcon.png'
import messigIcon from '../../Assets/Icons/messigIcon.png'


const WhatWeDo = () => {
    const [WhatWeDo] = useState([
        {tit1: 'Service' , tit2: 'What We do'}
    ])

    

    
  
    return (
        <div>
            <TitleBlock 
              tit1 = {WhatWeDo[0].tit1}
              tit2 = {WhatWeDo[0].tit2}
              class = 'WhatWeDoTitleBlock'
            />
            <p className = 'textWhatBlock'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis consequuntur ex itaque rem assumenda nihil doloribus alias placeat corporis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis consequuntur ex itaque rem assumenda nihil doloribus alias placeat corporis?</p>
            <div className = 'BlockAreyaImg'>
                <div className = 'imgBoyBlock'>
                     <img src= {Boy} alt="boy" />
                </div>
                <div className = 'containerIcons'>
                    <div className = 'blockIcons'>
                        <div className = 'itmeIconText'>
                            <img src={PhotoIcon} alt="iconPhoto"/>
                            <p>Photograpy</p>
                        </div>
                        <button className = 'btnOpen'><img src= { arrowIcon } alt = 'icon'/></button>
                    </div>

                    <div className = 'textarea_Block'>
                        <textarea className = 'area' placeholder = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur  rem assumenda nihil doloribus alias placeat corporis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis consequuntur ex itaque rem assumenda nihil doloribus alias placeat corporis?quis consequuntur ex itaque rem assumenda nihil doloribus alias placeat corporis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis consequuntur ex itaque rem assumenda nihil doloribus alias placeat corporis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis consequuntur ex itaque rem assumenda nihil doloribus alias placeat corporis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis consequuntur ex itaque rem assumenda nihil doloribus alias placeat corporis?'>
                        </textarea>
                    </div>
                    <div className = 'blockIcons'>
                        <div className = 'itmeIconText marg' >
                            <img src={creativIcon} alt="iconPhoto"/>
                            <p>Photograpy</p>
                        </div>
                        <button className = 'btnIcon'><img src= { arrowIcon } alt = 'icon'/></button>
                    </div>
                    <div className = 'blockIcons'>
                        <div className = 'itmeIconText'>
                            <img src={WebDesIcon} alt="iconPhoto"/>
                            <p>Photograpy</p>
                        </div>
                        <button className = 'btnIcon'><img src= { arrowIcon } alt = 'icon'/></button>
                    </div>

                </div>
            </div>
            <div className = 'container_mesige'>
                <div className ='block_messige'>
                    <div className = 'block_Icon_Messige'>
                        <img src={messigIcon} alt="Icon messig" />
                    </div>
                    <div className= 'BlockMessige'>
                        <p className = 'messige'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.”</p>
                        <p className = 'textAfter' ><span className = 'lineRed'></span>Jon Deo</p>
                           
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WhatWeDo;
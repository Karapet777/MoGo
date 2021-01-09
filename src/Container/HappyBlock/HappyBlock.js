import React, {useState} from 'react'
import './HappyBlock.css'
import Clients from '../../Component/HeppyClientsItem/HeppyClientsItem'
import TitleBlock from '../../Component/TitleProductInfoBlock/TitleBlock'
import us1 from '../../Assets/img/us1.png'
import us2 from '../../Assets/img/us2.png'
import us3 from '../../Assets/img/us3.png'
import us4 from '../../Assets/img/us4.png'


const HappyBlock = () => {

    const [Happy] = useState({
        block1:[
            {src: us1, name: 'Matthew Dix', profile: 'Graphic Design', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa temporibus quasi velit quam ex ut aperiam reiciendis eveniet, pariatur aliquam?'},
            {src: us2, name: 'Nick Karvounis', profile: 'Graphic Design', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa temporibus quasi velit quam ex ut aperiam reiciendis eveniet, pariatur aliquam?'}
        ],
        block2:[
            {src: us3, name: 'Jaelynn Castillo ', profile: 'Graphic Design', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa temporibus quasi velit quam ex ut aperiam reiciendis eveniet, pariatur aliquam?'},
            {src: us4, name: 'Mike Petrucci', profile: 'Graphic Design',text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa temporibus quasi velit quam ex ut aperiam reiciendis eveniet, pariatur aliquam?'}
        ]
    })

    const [Title] = useState([
        {tit1: 'Happy Clients', tit2: 'What people say'}
    ])










    return (
       <div className = 'contUserHappy'>
           <div className = 'opasImg'></div>
           <div className = 'blockMarg'>
                <div >
                    <TitleBlock tit1 = {Title[0].tit1} tit2 = {Title[0].tit2} class = 'blockTit'/>
                </div>
                <div className = "userItem">
                    {Happy.block1.map((elem, index) => {
                        return (
                            <Clients 
                            key = {index}
                            img = {elem.src}
                            UserName = {elem.name}
                            UserProfile = {elem.profile}
                            text = {elem.text}
                            />
                            
                        )
                    })}
                </div>
                <div className = "userItem ">
                    {Happy.block2.map((elem, index) => {
                        return (
                            <Clients 
                            key = {index}
                            img = {elem.src}
                            UserName = {elem.name}
                            UserProfile = {elem.profile}
                            text = {elem.text}

                            />
                        )
                    })}
                </div>
           </div>
           
       </div>
    )
}
export default HappyBlock

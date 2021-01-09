import React from 'react'
import './HeppyClientsItem.css'

const Clients = (props) => {
    return (
        <div className = 'contHap'>
           <div>
               <img src= {props.img} alt="img"/>
           </div>
           <div className = 'userData'>
               <p className = 'nameText'>{props.UserName}</p>
               <p className = 'ProfilText'>{props.UserProfile}</p>
               <span className = 'LineUs'></span>
               <p>{props.text}</p>
           </div>
        </div>
    )
}
export default Clients;
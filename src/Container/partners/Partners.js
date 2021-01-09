import React from 'react'
import './Partners.css'
import partImg from '../../Assets/img/partners.png'

const Partner = () => {
    return (
        <div className = 'container_partner'>
            <div className = 'block_partner'>
                <img src={partImg} alt="img partners" />
            </div>
        </div>
    )
}
export default Partner
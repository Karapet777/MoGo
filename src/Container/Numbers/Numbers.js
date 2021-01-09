import React from 'react'
import './Numbers.css'
import Numberblock from '../../Component/NumberBlock/NumberBlock'

const Numbers = () => {
    const numArr = [
        {num: 42 , val: 'Web Design Projects', cls: 'blockNum leftBord'},
        {num: 123, val: 'Happy Client', cls: 'blockNum'},
        {num: 15, val: 'Award Winner', cls: 'blockNum'},
        {num: 99, val: 'cup of coffee',cls: 'blockNum'},
        {num: 24, val: 'members',cls: 'blockNum'}
    ];

    return (
        <div className = 'contaninerNumber'>
            <div className = 'BlockNumber'>
                {numArr.map((elem ,index) =>{
                        return (
                            <Numberblock 
                                key = {index}
                                num = {elem.num}
                                value = {elem.val}
                                classesBord = {elem.cls}
                            />
                        )
                    } )
                }
            </div>
    </div>
    )
}
export default Numbers
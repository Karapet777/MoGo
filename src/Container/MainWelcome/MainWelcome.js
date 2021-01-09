import React from "react"
import "./MainWelcome.css"
import Line from '../../Component/Line/Line'
import {Link} from '../../Component/Links/Link'

const MainWelcome = () => {
    return (
        <div className = 'sectionWelcom'>
            <p className = 'creativText'>Creative teplate</p>
            <p className = 'welcoeText'>Welcome</p>
            <p  className = 'welcoeText'>To Mogo</p>
            <Line lineClass = 'welLine'/>
            <Link link = 'Learn More'  class = 'hrefWelcom'/>
            <div className = 'welClickLink'>
                <div className = 'index1hoverBlock'>
                    <Line lineClass = 'widLineLinks'>
                        <span className = 'red'></span>
                    </Line>
                    <p className = 'textitem'><span className = 'numberLink'>01</span>Intro</p>
                </div>
                <div  className = 'index2hoverBlock'>
                    <Line lineClass = 'widLineLinks'>
                        <span className = 'red'></span>
                    </Line>
                   <p className = 'textitem'><span className = 'numberLink'>02</span>Work</p>
                </div>
                <div  className = 'index3hoverBlock'>
                    <Line lineClass = 'widLineLinks'>
                        <span className = 'red'></span>
                    </Line>
                   <p className = 'textitem'><span className = 'numberLink'>03</span>About</p>
                </div>
                <div  className = 'index4hoverBlock'>
                    <Line lineClass = 'widLineLinks'>
                        <span className = 'red'></span>
                    </Line>
                   <p className = 'textitem'><span className = 'numberLink'>04</span>Contacts</p>
                </div>
            </div>
        </div>
    )
}
export default MainWelcome
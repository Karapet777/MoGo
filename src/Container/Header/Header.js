import React from 'react'
import {Link} from '../../Component/Links/Link'
import {LinkImg} from '../../Component/Links/Link'
import './Header.css'
import ShoppingIcon from '../../Assets/Icons/SHOPPING.png'
import SearchIcon from '../../Assets/Icons/search.png'
 

const Header =  () => {
    return(
         <div className = "navHeader">
            <div>
                <Link class = 'logo'  link = 'MOGO'/>
            </div>
            <div>
                <Link class = 'linkItme' link = 'ABOUT'/>
                <Link class = 'linkItme' link = 'SERVICE'/>
                <Link class = 'linkItme' link = 'WORK'/>
                <Link class = 'linkItme' link = 'BLOG'/>
                <Link class = 'linkItme' link = 'CONTACT'/>
                <LinkImg  icon = {ShoppingIcon}/>
                <LinkImg IconClass = 'serchIcon' icon = {SearchIcon}/>
            </div>
         </div>
    )
}
export default Header;
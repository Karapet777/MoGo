import React from 'react'
import './footer.css'
import Input from '../../Component/Input/Input'
import Button from '../../Component/Button/Button'
import Img from '../../Component/Img/Img'
//Icons
import face from '../../Assets/Icons/footer icons/facebook.png'
import twit from '../../Assets/Icons/footer icons/twitter.png'
import inst from '../../Assets/Icons/footer icons/instagram.png'
import pent  from '../../Assets/Icons/footer icons/pinterest.png'
import googl from '../../Assets/Icons/footer icons/google plus.png'
import yout from '../../Assets/Icons/footer icons/youtube.png'
import bribll from '../../Assets/Icons/footer icons/dribbble.png'
import tumb from '../../Assets/Icons/footer icons/tumblr.png'
//imges blog
import imgBlog1 from '../../Assets/img/Footer/blog/footer1.png'
import imgBlog2 from '../../Assets/img/Footer/blog/footer2.png'
import imgBlog3 from '../../Assets/img/Footer/blog/footer3.png'
//imges Instagram
import img1 from '../../Assets/img/Footer/instagram/1 (2).png'
import img2 from '../../Assets/img/Footer/instagram/2.png'
import img3 from '../../Assets/img/Footer/instagram/3.png'
import img4 from '../../Assets/img/Footer/instagram/4 (2).png'
import img5 from '../../Assets/img/Footer/instagram/5 (2).png'
import img6 from '../../Assets/img/Footer/instagram/6.png'
import img7 from '../../Assets/img/Footer/instagram/7.png'
import img8 from '../../Assets/img/Footer/instagram/8.png'
import img9 from '../../Assets/img/Footer/instagram/9.png'









const Footer = () => {

    return (
        <div className = 'app_container_footer'>
            <div className = 'app_Mogo_block'>
                <p className = 'app_Logo_Text_Mogo'>MoGo</p>
                <p className = 'app_info_footer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p><span>15k</span>followers</p>
                <hr/>
                <div className = 'app_block_icons'>
                    <p className = 'app_Follow_Us_text'>follow Us:</p>
                     <Img src = {face}/> 
                     <Img src = {twit}/>
                     <Img src = {inst}/>
                     <Img src = {pent}/>
                     <Img src = {googl}/>
                     <Img src = {yout}/>
                     <Img src = {bribll}/>
                     <Img src = {tumb}/>
                </div>
                <div className = 'follow'>
                    <Input place = 'Your Email' class = 'Inp_email'/>
                    <Button title = 'Subscribe' class = 'btn_footer'/>
                </div>

            </div>
            <div className = 'app_Blogs'>
                <p className = 'text_blogs'>BLOGS</p>
                <div className = 'app_blog_block'>
                    <Img src = {imgBlog1}/>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        <span>Jan 9, 2016</span>
                    </div>
                </div>
                <div className = 'app_blog_block'>
                    <Img src = {imgBlog2}/>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        <span>Jan 9, 2016</span>
                    </div>
                </div>
                <div className = 'app_blog_block'>
                    <Img src = {imgBlog3}/>

                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        <span>Jan 9, 2016</span>
                    </div>
                </div>
            </div>
            <div className = 'app_instagram_block'>
                <p className = 'text_instagram'>INSTAGRAM</p>
                <div className = 'app_block_inst_img'>
                    <Img src = {img1}/>
                    <Img src = {img2}/>
                    <Img src = {img3}/>
                </div>
                <div className = 'app_block_inst_img'>
                    <Img src = {img4}/>
                    <Img src = {img5}/>
                    <Img src = {img6}/>
                </div>
                <div className = 'app_block_inst_img'>
                    <Img src = {img7}/>
                    <Img src = {img8}/>
                    <Img src = {img9}/>
                </div>
                <p className = 'View_more_photos'>View more photos</p>
            </div>
        </div>
    )
}

export default Footer
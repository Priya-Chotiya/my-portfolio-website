import React ,{useEffect}from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me-2.png'
import HeaderSocials from './HeaderSocials'

import CryptoJS from 'crypto-js'

const Header = () => {
  // useEffect(() =>{
  //   let name = CryptoJS.AES.encrypt("priya" , "sass").toString();
  //   document.cookie =   "userName=" + name + ";path=" + window.location.href; 
  //   document.cookie =   "passWord=kkkk;path=" + window.location.href; 
  // } , [])

  
  // setTimeout(() => {
  //   let username = getCookie('userName');
  //   console.log(CryptoJS.AES.decrypt(username, "sass").toString(CryptoJS.enc.Utf8) , 'username')

  //   let password = getCookie('passWord');
  //   console.log(password  , "password")
  // } , 5000)

  // function getCookie(cookieName){
  //   let name  = cookieName + "=";
  //   let decodedName  = decodeURIComponent(document.cookie).split(';');
   
  //     for (let index = 0; index < decodedName.length; index++) {
  //       let element = decodedName[index];
  //       while(element.charAt(0) == ' '){
  //         element = element.substring(1)
  //       }
  //       if(element.indexOf(name) == 0){
  //           return element.substring(name.length , element.length)
  //       }
        
  //     }

  //     return "";
  // }
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I'm</h4>
        <h1>Chotiya Priya</h1>
        <h3 className='text-light'>Fullstack Developer</h3>
      <CTA/>
<HeaderSocials/>
      <div className="me"></div>
        <img src={ME} className="main-image" alt="me" />
      <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
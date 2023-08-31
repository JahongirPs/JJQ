import React from 'react'
import "./Nav.scss"
import { BsTelephone } from "react-icons/bs";
import{ HiOutlineMail } from "react-icons/hi"


const Nav = () => {
  return (
   <nav>
      <div className="main_nav">  
           <div className="img_flag">
               <img style={{width:"60px", height:"40px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/2560px-Flag_of_Uzbekistan.svg.png" alt="" />
               <img style={{width:"60px", height:"40px"}} src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png" alt="" />
               <a href="+998 93 938 21 12">
                   <BsTelephone></BsTelephone> +998 93 938 21 12
               </a>
             <a href="sancrops117@gmail.com" className='a'>  <HiOutlineMail className='icon_email'></HiOutlineMail> sancrops117@gmail.com</a>
           </div>
      </div>
   </nav>
  )
}

export default Nav
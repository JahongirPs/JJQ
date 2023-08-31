import React from 'react'
import "./End.scss"
import svgLogo from "../../img/svg4.svg"
import { NavLink } from 'react-router-dom'

const End = () => {
  return (
    <div className='End'>
       <div className="End_block">
           <div className="block_end">
             <b>Бизнинг манзил</b>
             <p>Наманган вилояти , Давлатобод тумани , Дустлик Шох кучаси 109-уй</p>
           </div>
           <div className="block_end">
            <b>Биз билан боғланинг</b>
            <p>+998 91 186 00 85</p>
           </div>
           <div className="block_end">
              <b>Электрон манзил</b>
              <p>erkinjon.hodjaev@gmail.com</p>
           </div>
       </div>
       <div className="EndBlock_text">
             <div className="EndText">
                <div className="logoText">
                   <img src={svgLogo} alt="" />    
                </div> 
                <div className="textp">Қолип тайёрлаш учун барча асбоблар, қолип бутловчи қисмлари ва аксессуарлари, қолип учун киёвий моддалар, силлиқлаш ва сайқаллаш асбоблари, абразив тошлар, CNC дастгохлари, Термопластавтоматлар ва хоказолар.</div>
                <div className="text2">
                <b>Бизни кузатиб боринг</b>
                </div>
             </div>
             <div className="EndText">
                 <div className='b'>
                     <b>Фойдали ҳаволалар</b>
                     <div className='div'></div>
                 </div>
                 <ul>
                   <a href="/">Бош сахифа</a>
                   <a href="/">Ҳамкорлар</a>
                   <a href="/">Биз ҳақимизда</a>
                   <a  href="/">Алоқа</a>
                 </ul>
             </div>
             <div className="EndText">
               <div className='Textb'><b className='b'>Таклифлар учун</b><div className='div'></div></div>
                <p className='p'>
                Доимий мижозларга қулайлик яратиш ва янги мижозларни жалб қилиш учун ушбу сайт яратилган бўлиб, унда сиз керакли қисмлар, бутловчи қисмлар, асбоблар, каталоглар ва махсулот маълумотларини топишингиз мумкин. Агар бирор нарсани топа олмасангиз - биз билан телефон ёки почта орқали боғланинг, биз сизга дархол ёрдам берамиз.
                </p>
             </div>
       </div>
    </div>
  )
}

export default End
import React from 'react'
import img from "../../img/img.png"
import "./Parents.scss"

const Parents = () => {
  return (
    <div className="parents_main">
    <div className="Parents">
      <div className="parenst_text">
         <h1>Ҳамкорлар</h1>
      </div>
        <div className="parents_img">
            <img src={img} alt=""  style={{width:"300px"}}/>
            <p>Қурилиши давом этяпти</p>
            <a href="/">Асосий саҳифа</a>
        </div>
    </div>
    </div>
  )
}

export default Parents
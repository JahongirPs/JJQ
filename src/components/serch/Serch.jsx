import React, { useState } from "react";
import "./Serch.scss"
import { Link } from "react-router-dom";
import svga from "../../img/svg.svg"
import Aside from "../saidbar/Saidbar";
import Parents from "../../routes/Parents/Parents";
const Search = () => {

  const [isActive, SetActive] = useState(false)
  return (
    <div>
      <div className="search_wrapper">
          <div className="search">
             <img className="imgSvga animate__animated animate__bounceInLeft" src={svga} alt="" />
            <div className="search__group">
              <div className="input_wrapper">
                <input type="text" placeholder="Поиск..." />
                <button>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
              </div>
              <div className="sub_navigation">
                <Aside/>
                <Link className="sub__nav-link" to="/" >Главная</Link>
                <Link className="sub__nav-link" to="/Parents">Партнеры</Link>
                <Link className="sub__nav-link" to="/Aloqa">О нас</Link>
                <Link className="sub__nav-link" to="/contact">Контакт</Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Search;
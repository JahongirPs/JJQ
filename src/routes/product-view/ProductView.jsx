import React, { useEffect,  useState } from 'react'
import { useParams } from 'react-router-dom'
import { instance } from '../../api/axios';
import "./ProductView.scss"
import Service from '../../components/end_service/Service';
import {AiOutlineLeft} from "react-icons/ai"
import { Link } from 'react-router-dom';

const ProductView = () => {
     let [min , SetMin] =  useState(1)
    let productId = useParams({});
    let [productsItems, setId] = useState({})

    useEffect(() => {
        instance(`/product/single-product/${productId.id}`)
            .then(response => setId(response.data))

    }, [productId.id])


    function aaa(e){
        e.preventDefault()
    }


    function minuse(){
      if(min === 0){
        SetMin(0)
      }else{
        SetMin(min - 1)
      }
    }

    function click(){
        SetMin(min + 1)

    }


    return (
        <div>
            <div className='exia'>
                 <Link className='Exiat' to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Chevron_left_font_awesome.svg/512px-Chevron_left_font_awesome.svg.png" alt="" /></Link>
            </div>
        <div className='productId'>
            <div className="product__imgs">
                <img src={productsItems.singleProduct?.[0].productImages?.[0]} alt="" />
            </div>
            <form onSubmit={aaa}>
                <h1 className='h1__name-produt'>{productsItems.singleProduct?.[0].productName_ru}</h1>
                <div className='product__catecory-name'>
                    <div className='product__block-title-category'>{productsItems.singleProduct?.[0].productMainCategory_ru}</div>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    <div className='product__block-title-category'>{productsItems.singleProduct?.[0].productSubCategory_ru}</div>
                </div>
                <div className='product__price-size'>
                    <h2>На складе:</h2>
                    <span className='price__product'>46</span>
                    <h2>Размер:</h2>
                    <select name="" id="">
                        <option value="">{productsItems.singleProduct?.[0].productSizesAndQuantity?.[0].size}</option>
                        <option value="">{productsItems.singleProduct?.[0].productSizesAndQuantity?.[0].size}</option>
                        <option value="">{productsItems.singleProduct?.[0].productSizesAndQuantity?.[0].size}</option>
                        <option value="">{productsItems.singleProduct?.[0].productSizesAndQuantity?.[0].size}</option>
                        <option value="">{productsItems.singleProduct?.[0].productSizesAndQuantity?.[0].size}</option>
                        <option value="">{productsItems.singleProduct?.[0].productSizesAndQuantity?.[0].size}</option>
                        <option value="">{productsItems.singleProduct?.[0].productSizesAndQuantity?.[0].size}</option>
                    </select>
                </div>
                <h1 className='price'>{productsItems.singleProduct?.[0].productSizesAndQuantity?.[0].price} СУМ</h1>
                <div className='main-desc'>
                    <div className='product__descriptin'>
                         <div className='product_items-desc'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
                                {productsItems.singleProduct?.[0].productDescription_ru?.[0]}
                        </div>
                         <div className='product_items-desc'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
                            {productsItems.singleProduct?.[0].productDescription_ru?.[1]}
                        </div>
                         <div className='product_items-desc'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z"></path></svg>
                            {productsItems.singleProduct?.[0].productDescription_ru?.[2]}
                        </div>
                    </div>
                </div>
                <div className='shop_card'>
                    <div className='shop__items'>
                        <h2>Количество :</h2>
                        <div className='card'>
                            <button onClick={minuse}>-</button>
                            <p>{min}</p>
                            <button onClick={click}>+</button>
                        </div>
                    </div>
                    <div className='shop__items'>
                        <h2>Общая цена:</h2>
                        <div className='carda'>{productsItems.singleProduct?.[0].productSizesAndQuantity?.[0].price} СУМ</div>
                    </div>
                </div>
            </form>
        </div>
        <div>
        <Service/>
      </div>
       </div>

    )
}

export default ProductView
import React from 'react';
import { DefaultButton } from '../../utils/Utils';
import "./ProductCard.scss";
import { Link } from 'react-router-dom';

const ProductCard = ({productData}) => {
  return (
    <div className='product-card'>
      <Link to={`/product-view/${productData._id}`}>
         <img src={productData.productImages[0]} alt="" />
      </Link>
      <h3>{productData.productName_uz.slice(0,15)}</h3>
      <DefaultButton text="Саватга қўшиш"/>
    </div>
  )
}

export default ProductCard
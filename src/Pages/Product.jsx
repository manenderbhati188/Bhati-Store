import React,{useContext} from 'react';
import {ShopContext} from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import {Path} from '../Components/Path of module/Path';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import  {RelativeProduct} from '../Components/RelativeProducts/RelativeProduct'
export const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {ProductId}=useParams();
  const product=all_product.find((e)=>e.id===Number(ProductId));
  return (
    <div>
      <Path product={product}/>
      <ProductDisplay product={product}/>
      <RelativeProduct/>
    </div>
  )
}

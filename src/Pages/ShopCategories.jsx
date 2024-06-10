import React, { useContext } from 'react';
import './Css/ShopCat.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import {Item} from '../Components/Items/Item';
export const ShopCategories = (props) => {
  const {all_product}=useContext(ShopContext);
  return (
    <div className='shop-categories'>
      <img className='shopcategories-banner' src={props.banner}/>
      <div className='shop-categories-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36
        </p>
        <div className='shopcategories-sort'>
          Sort by <img src={dropdown_icon}/>
        </div>
      </div>
      <div className='shopcategories-product'>
          {
            all_product.map((item,i)=>{
              if(props.category===item.category)
                {
                  return <Item 
                    key={i} 
                    id={item.id} 
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                    />
                }
                else{
                  return null;
                }
            })
          }
      </div>
      <div className='shopcategory-load-more'>
          Load More
      </div>
    </div>
  )
}
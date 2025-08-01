import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';

const FoodItem = ({id, name, price, description, image}) => {

  const {cartItems, addToCart, removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-image-container">
        <Link to='/cart'><img className='food-item-image' src={url+"/images/"+image} alt="" /></Link>
        {!cartItems[id]
             ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
             : <div className='food-item-counter'>
                  <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} alt='' />
                  <p>{cartItems[id]}</p>
                  <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="" />
              </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">
            {description}
        </p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem

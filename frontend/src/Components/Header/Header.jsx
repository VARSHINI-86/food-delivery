import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <div className='header'>
      <div className='header-content'>
        <h2>Order your favourite food</h2>
        <p>Your one-stop destination for mouth-watering meals delivered straight to your door. Fast, fresh, and hassle-free.</p>
        <a href='#explore-menu'><button>View Menu</button></a>
      </div>
    </div>
  )
}

export default Header
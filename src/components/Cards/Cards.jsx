import React from 'react'
import "./card.css"



const Cards = () => {
  return (
    <div className='outer'>
      <div className='main-card'>
        <div className='logo'>
          <img src='src/assets/heart-love-marriage-3-svgrepo-com.svg'/>
        </div>
        <div className='content'>
          <p>Spread hope, love -</p>
          <p> donate!</p>
        </div>

      </div>

      <div className='main-card'>
        <div className='logo'>
        <img src='src/assets/truck-with-money-svgrepo-com.svg'/>
        </div>
        <div className='content'>
         <p>Fuel our mission.</p>
         <p>Support today</p>
        </div>

      </div>

      <div className='main-card'>
        <div className='logo'>
         <img src='src/assets/donate-donation-svgrepo-com.svg'/>
        </div>
        <div className='content'>
         <p>Join, be part,</p>
         <p>donate now!</p>
        </div>

      </div>

      <div className='main-card'>
        <div className='logo'>
        <img src='src/assets/change-svgrepo-com.svg'/>
        </div>
        <div className='content'>
        <p>Small acts, big</p>
        <p>change. Donate.</p>
        </div>

      </div>
    </div>
 
  )
}

export default Cards
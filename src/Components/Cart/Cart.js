import React from 'react'
import './Cart.css'


import { TbCurrencyRupee } from "react-icons/tb";


const Cart = () => {
  return (
    <>
      <div className='cartContainer1'>
        <div className='cartItemsSection'>

        </div>

        <div className='cartTotalSection'>
          <div className='totalContainer'>
            <h4>Summary</h4><br />
            <span>Items: 0</span><br />
            <p><span>Subtotal</span> <span className='amt'><TbCurrencyRupee style={{ fontSize: '1.1rem' }} /> 0</span></p>
            <hr></hr>
            <p><span style={{ fontSize: '1.2rem', fontWeight: '500' }}>Order Total</span> <span className='amt' style={{ fontSize: '1.2rem', fontWeight: '500' }}><TbCurrencyRupee style={{ fontSize: '1.3rem' }} /> 0</span></p>
            <span>Shipping, Tax and Shipping Protection not included</span><br />
            <button className='cartBtn'><span>Proceed to checkout</span></button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Cart
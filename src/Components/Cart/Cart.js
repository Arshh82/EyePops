import React, { useEffect } from 'react'
import './Cart.css'


import { TbCurrencyRupee } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal, removeFromCart, toggleCartQty } from '../ReduxComponent/Reducers/cartSlice';



const Cart = () => {
  const dispatch = useDispatch();
  const {data,totalAmount,deliveryCharge} = useSelector(state => state.cart);
  console.log(totalAmount)

  useEffect(() => {
    dispatch(getCartTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [useSelector(state => state.cart)]); 

const emptyCartMsg = <h4 className='text-red fw-6'>No items found!</h4>;

  return (
    <>
      <div className='cartContainer1'>
        <div className='cartItemsSection'>
         
         {data.map((product)=>{
         return(
          <div className='cartItemdiv' key={product.id}>
          
            

          <div className='cartitem-pic'>
          <img src={product.image} alt='' className='d-flex w-100'/>

          </div>
          <div className='cartItem-detal'>
          <div>
          <button onClick={() => dispatch(removeFromCart(product.id))}>X</button><br/>
          <span>Name:{product.name}</span><br/>
          <span>Price:{product.price}</span><br/>
          <button onClick={() => dispatch(toggleCartQty({id: product.id, type: "DEC"}))}>-</button><span>Quantity:{product.quantity}</span><br/> <button onClick={() => dispatch(toggleCartQty({id: product.id, type: "INC"}))}>+</button>
          <span>Size:{product.size}</span><br/>
          <span>{product.totalPrice}</span>
          </div>

          </div>

          </div>
        )})}

          

        </div>

        <div className='cartTotalSection'>
          <div className='totalContainer'>
            <h4>Summary</h4><br />
            <span>Items: 0</span><br />
            <p><span>Subtotal</span> <span className='amt'><TbCurrencyRupee style={{ fontSize: '1.1rem' }} /> {totalAmount}</span></p>
            <p><span>Delivery Charges</span> <span className='amt'><TbCurrencyRupee style={{ fontSize: '1.1rem' }} /> 1000</span></p>
            <hr></hr>
            <p><span style={{ fontSize: '1.2rem', fontWeight: '500' }}>Order Total</span> <span className='amt' style={{ fontSize: '1.2rem', fontWeight: '500' }}><TbCurrencyRupee style={{ fontSize: '1.3rem' }} />{totalAmount+deliveryCharge}</span></p>
            <span>Shipping, Tax and Shipping Protection not included</span><br />
            <button className='cartBtn'><span>Proceed to checkout</span></button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Cart
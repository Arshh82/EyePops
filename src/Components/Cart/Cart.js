import React, { useEffect } from 'react'
import './Cart.css'


import { TbCurrencyRupee } from "react-icons/tb";
import { RiCloseLine } from "react-icons/ri";
import { FiPlus,FiMinus } from "react-icons/fi";


import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';


import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal, removeFromCart, toggleCartQty } from '../ReduxComponent/Reducers/cartSlice';
import { Link } from 'react-router-dom';


let cat = new URL ("/public/Images/cat-empty-cart.png",import.meta.url)

const Cart = () => {
  const dispatch = useDispatch();
  const {data,totalAmount,deliveryCharge,totalItems} = useSelector(state => state.cart);
  console.log(totalAmount)

  useEffect(() => {
    dispatch(getCartTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [useSelector(state => state.cart)]); 



const [oopen, setOOpen] = React.useState(false);
const handleSuccess = () => {
    setOOpen(true);
  };

  const handleCloose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOOpen(false);
  };  


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

  return (
    <>
      <div className='cartContainer1'>
        <div className='jh'>
          <Stack spacing={2} sx={{ width: '30%' }}>
            <Snackbar open={oopen} autoHideDuration={3000} onClose={handleCloose} >
              <Alert onClose={handleCloose} severity="error" sx={{ width: '100%' }}>
                Item Removed Sucessfully
              </Alert>
            </Snackbar>
          </Stack>
        </div>
        <div className='cartItemsSection'>
         
         {data==''?
         <div className='emptyCartcat'>
                   <img src={cat} alt='' className='d-flex w-100' />
                   <span className='mt-3'>Your shopping cart is empty</span>
                   <Link to='/'><button className='emptbtn'>Continue Shopping</button></Link>
         </div>
         :data.map((product)=>{
         return(
          <div className='cartItemdiv' key={product.id}>

             <div className='cartitem-pic'>
               <img src={product.image} alt='' className='d-flex w-100' />
             </div>

             <div className='cartItem-detal'>
               <button onClick={() => {dispatch(removeFromCart(product.id)); handleSuccess()}} className='ItemDltbtn'><RiCloseLine /></button><br />
               <div className='text-1 mt-5'>
                 <span>Name : {product.name}  00{product.id}</span><br /></div>

               <div className='text-1'>
                 <span>Quantity :</span>
                 <button className='qtybtn' onClick={() => dispatch(toggleCartQty({ id: product.id, type: "INC" }))}>
                   <FiPlus />
                 </button>
                 {product.quantity}
                 <button className='qtybtn' onClick={() => dispatch(toggleCartQty({ id: product.id, type: "DEC" }))}>
                   <FiMinus />
                 </button>
               </div>

               <div className='text-1'>
                 <span>
                   Price : <TbCurrencyRupee className='mb-1' style={{ fontSize: '1.1rem' }} />{product.price}
                 </span><br />
               </div>

               <div className='text-1'>
                 <span>
                   Size : {product.size}
                 </span><br />
               </div>
               <div className='Item-linee mt-2 mb-2'>
               </div>

               <div className='text-1'>
                 <span>
                   Item Total : <TbCurrencyRupee className='mb-1' style={{ fontSize: '1.1rem' }} />{product.totalPrice}
                 </span>
               </div>
             </div>

          </div>
        )})}

        </div>

        <div className='cartTotalSection'>
          <div className='totalContainer'>
            <h4>Summary</h4><br />
            <p>
              <span style={{ fontWeight: '600' }}>
                Items:
              </span>
              <span className='amt' style={{ fontWeight: '600' }}>
                {totalItems}
              </span>
            </p>

            <p>
              <span style={{ fontWeight: '600' }}>
                Subtotal
              </span>
              <span className='amt' style={{ fontWeight: '600' }}>
                <TbCurrencyRupee className='mb-1' style={{ fontSize: '1.1rem' }} />{totalAmount}
              </span>
            </p>

            <p>
              <span style={{ fontWeight: '600' }}>Delivery Charges</span>
              <span className='amt' style={{ fontWeight: '600' }}><TbCurrencyRupee className='mb-1' style={{ fontSize: '1.1rem' }} />1000</span>
            </p>
            <hr></hr>
            <p>
              <span style={{ fontSize: '1.2rem', fontWeight: '500' }}>Order Total</span>
              <span className='amt' style={{ fontSize: '1.2rem', fontWeight: '500' }}><TbCurrencyRupee className='mb-1' style={{ fontSize: '1.3rem' }} />{totalAmount === 0 ? '0' : totalAmount + deliveryCharge}</span>
            </p>

            <span>
              Shipping, Tax and Shipping Protection not included
            </span><br />

            <button className='cartBtn' >
              <span>Proceed to checkout</span>
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Cart
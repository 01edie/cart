import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import { useDispatch, useSelector } from 'react-redux'
import { calc } from './features/cart/cartSlice'
import Modal from './components/Modal'



const App = () => {
  const {cartItems} = useSelector((store)=>store.cart);
  const {modalOn} = useSelector((store)=>store.modal);
  const dispatch = useDispatch();

  useEffect(()=>{

    dispatch(calc());
  },[cartItems,dispatch]);
  return (
    <main style={modalOn?{backdropFilter:'brightness(0.5)'}:null}>
      <Navbar></Navbar>
      {modalOn?(<Modal></Modal>):null}
      <CartContainer></CartContainer>
    </main>
  )
}

export default App
import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { CloseIcon } from '../icon'
import { switchModal } from '../features/cart/modalSlice'

const Modal = () => {
    const dispatch = useDispatch();
  return (
    <div className='modal'>
        <div className="top">
        <button className="btn1" onClick={()=>dispatch(switchModal())} ><CloseIcon></CloseIcon></button>
        
        </div>
        <div className="message">
            <h3>Cart is going to be emptied!</h3>
            <div className="buttons">
            <button className='btn' onClick={()=>{
                dispatch(clearCart());
                dispatch(switchModal());
            }}>Confirm</button>
            <button className='btn' onClick={()=>dispatch(switchModal())}>Cancel</button>
            </div>
        </div>
    </div>
    
  )
}

export default Modal
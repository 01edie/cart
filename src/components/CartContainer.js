import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { switchModal } from "../features/cart/modalSlice";


const CartContainer = () => {
  const { cartItems, quantity, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  if (quantity < 1) {
    return (
      <section className="cart">
        <h2>Your bag</h2>
        <h4 className="empty-cart">is currently empty</h4>
      </section>
    );
  }
  return (
    <>
      <section className="cart">
        <h2>Your bag</h2>
        <div className="cart-section">
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item}></CartItem>;
          })}
        </div>
      </section>
      <footer>
        <button className="clear-cart" onClick={() => dispatch(switchModal())}>
          Clear Cart
        </button>
        {/* dispatch(clearCart(12) */}
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>{total}</span>
          </h4>
        </div>
      </footer>
    </>
  );
};

export default CartContainer;

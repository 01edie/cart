import React from "react";
import { UpIcon, DownIcon } from "../icon";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, img, title, price, quantity }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <div className="item-details">
        <div className="left-section">
          <img src={img} alt={title} />
          <div className="item-features">
            <h4>{title}</h4>
            <h3>${price}</h3>
            <button className="btn" onClick={() => dispatch(removeItem(id))}>
              Remove
            </button>
          </div>
        </div>
        <div className="right-section">
          <button className="btn1" onClick={() => dispatch(increase(id))}>
            <UpIcon></UpIcon>
          </button>
          <span>{quantity}</span>
          <button
            className="btn1"
            onClick={() => {
              if (quantity === 1) {
                dispatch(removeItem(id));
                return;
              }
              dispatch(decrease({ id }));
            }}
          >
            <DownIcon></DownIcon>
          </button>
        </div>
      </div>
    </article>
  );
};
export default CartItem;

import React from 'react'
// import {connect} from 'react-redux'
import {useDispatch } from 'react-redux';
import {
    clearItemFromCart,
    addItem,
    removeItem,
} from '../../redux/cart/action'
import './CheckoutItem.css'
// import {addItemToCart} from '../../redux/cart/utils'
const CheckoutItem = ({ cartItem}) => {
  const dispatch = useDispatch();
  const { imageUrl, name, price, quantity } = cartItem;
  const clearItem = () => dispatch(clearItemFromCart(cartItem));
  const addItemToCart = () => dispatch(addItem(cartItem));
  const removeItemFromCart = () => dispatch(removeItem(cartItem));
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemFromCart}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemToCart}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={clearItem}>
        &#10005;
      </div>
    </div>
  )
}

// const mapDispatchToProps = (dispatch) => ({
//     clearItem: (item) => dispatch(clearItemFromCart(item)),
//     addItem: (item) => dispatch(addItem(item)),
//     removeItem: (item) => dispatch(removeItem(item)),
//   });
//   export default connect(null, mapDispatchToProps)(CheckoutItem);

export default CheckoutItem
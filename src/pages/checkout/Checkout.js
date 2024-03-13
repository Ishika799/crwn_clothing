import React from 'react'
import {useSelector } from "react-redux";
import './Checkout.css'
import CheckoutItem from '../../components/checkoutItem/CheckoutItem'
import StripeCheckoutButton from 'react-stripe-checkout';
const Checkout = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
    const totalPrice = useSelector(state => state.cart.cartItems.reduce(
        (accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity * cartItem.price, 
        0
    ));
  return (
    
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="checkout-block">
          <span>Products</span>
        </div>
        <div className="checkout-block">
          <span>Description</span>
        </div>
        <div className="checkout-block">
          <span>Quantity</span>
        </div>
        <div className="checkout-block">
          <span>Price</span>
        </div>
        <div className="checkout-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
         <span>Total: $ {totalPrice}</span>
      </div>
      <StripeCheckoutButton price={totalPrice} />
    </div>
  )
}

// const mapStateToProps = ({cart}) => ({
//   cartItems:cart.cartItems,
//   totalPrice: cart.cartItems.reduce(
//               (accumulatedQuantity, cartItem) => 
//               accumulatedQuantity + cartItem.quantity * cartItem.price, 
//               0) 
// })

// export default connect(mapStateToProps, null)(Checkout)
export default Checkout;
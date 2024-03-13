import React from 'react'
import {useSelector,useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import './CartDropDown.css'
import CartItem from '../cart-item/cartItem'
import CustomButton from '../custom-button/customButton.jsx'
import {toggleCartHidden} from '../../redux/cart/action'

const CartDropDown = () => {
  const dispatch=useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    let navigate = useNavigate()
  return (
    <>
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
        </div>
        <CustomButton 
            onClick = { () => {
              navigate('/checkout');
              dispatch(toggleCartHidden());
              }}
            
        >
        GO TO CHECKOUT
        </CustomButton>
    </div>
</>
  )
}

// const mapStateToProps = ({cart:{cartItems}}) => ({
//     cartItems
// })
// export default connect(mapStateToProps,null)(CartDropDown)
export default CartDropDown
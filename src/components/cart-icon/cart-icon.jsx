import React from 'react'
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import "./cart-icon.css"
import {useSelector,useDispatch} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/action'

const CartIcon = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const itemCount = cartItems.length;
  const dispatch = useDispatch();

  const handleToggleCartHidden = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div className='cart-icon' onClick={handleToggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}
// const mapStateToProps = (state) => ({
//   itemCount: state.cart.cartItems.length
// })
// export default connect(mapStateToProps,null)(CartIcon)
export default CartIcon

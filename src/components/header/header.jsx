import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from "../cart-icon/cart-icon";
import "./header.css"
import CartDropDown from '../cartDropDown/CartDropDown.js'
import { UseSelector, useSelector } from 'react-redux';

const Header = () => {
  const hidden=useSelector(state=>state.cart.hidden)
  return (
    <>
    <div className='header'>
      <Link className='logo-container' to="/">
        <Logo className="logo"/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/signin">
            {" "}
            Sign in
          </Link>
          <Link className="option" to="/contact">
          CONTACT
        </Link>
          <CartIcon/>
        </div>
        {hidden?null:<CartDropDown/>}
    </div>
    </>
  )
}

export default Header

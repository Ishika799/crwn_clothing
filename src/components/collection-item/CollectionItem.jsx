import React from 'react'
import './CollectionItem.css'
import {addItem} from '../../redux/cart/action'
import CustomButton from '../custom-button/customButton'
import { useDispatch } from 'react-redux';

const CollectionItem = ({item}) => {
    const dispatch = useDispatch();
    const {imageUrl,name,price}=item;
  return (
    <div className='collection-item'>
            <div className='image'>
            <img src={imageUrl} alt={`${name}`}/>
            </div>
                {/* // style={{
                //     background: `#fff url(${imageUrl}) center/cover no-repeat`
                // }} /> */}
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={()=>dispatch(addItem(item))}> Add to cart</CustomButton>
        </div>
  )
}

// const mapDispatchToProps=Dispatch=>({
//   addItem: item=>Dispatch(addItem(item))
// })

export default CollectionItem

import React from 'react'
import { Route,Routes } from 'react-router-dom'
// import './Shop.css'
import CollectionsPreview from '../collections-preview/CollectionsPreview'
import Collection from '../collection/Collection'
const Shop = () => {
  return (
    <div>
    <Routes>
        <Route index element={<CollectionsPreview/>}/>
        <Route path=':collection' element={<Collection/>}/>

    </Routes>
    </div>

  )
}

export default Shop
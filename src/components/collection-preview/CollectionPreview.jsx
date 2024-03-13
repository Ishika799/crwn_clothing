import React from 'react'
import './CollectionPreview.css'
import CollectionItem from '../collection-item/CollectionItem'

const CollectionPreview = ({title,items}) => {
  return (
    <div className="collection-preview">
    <h3>{title.toUpperCase()}</h3>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
  )
}

export default CollectionPreview
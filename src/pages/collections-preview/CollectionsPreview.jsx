import React from 'react'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'
import shopData from '../../Shop_data'
import './CollectionsPreview.css'
const CollectionsPreview = () => {

  return (
    <>
      <div className="collection-overview">
      {shopData.map(({ id, ...otherCollectionsProps }) => (
        <CollectionPreview key={id} {...otherCollectionsProps} />
      ))}
    </div>
    </>
  )
}

export default CollectionsPreview
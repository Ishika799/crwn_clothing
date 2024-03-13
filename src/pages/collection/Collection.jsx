import React from 'react'
import CollectionItem from '../../components/collection-item/CollectionItem'
import './Collection.css'
import shopData from '../../Shop_data'
import { useParams } from 'react-router'
import { useState,useEffect } from 'react'

const Collection = () => {
const allTitle=shopData.map(category=>category.title);
// console.log(typeof(allTitle));
const category=useParams();
const title=category.collection.toUpperCase()
// console.log(typeof(title))
// console.log(shopData[0].title)
// console.log(category.collection);
const allItems=shopData.map(item=>item.items);
// console.log(allItems);
let idx=-1;
for(let i=0;i<=allTitle[0].length;i++){
  if(allTitle[i].toUpperCase()===title) idx=i;
}
console.log(idx);

const items=allItems[idx];

  return (
    
    <div className="collection-page">
     <h2 className="title">{title}</h2>
     <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
     </div>
   
      
  )
}

export default Collection
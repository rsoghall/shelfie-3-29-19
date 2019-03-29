import React from 'react'

export default function Product({ id, img, prod, price}) {
  return (
    <div>
      <img src={img} alt='product' width='200'/>
      <h3>{prod}<span>{price}</span></h3>


    </div>
  )
}

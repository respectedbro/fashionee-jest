import React from 'react'

import * as SC from './styles'

export const Product = ({ product, changeCount, removeProduct }) => (
  <SC.Product>
    <SC.RemoveProduct onClick={() => removeProduct(product.id)} >x</SC.RemoveProduct>
    <SC.ProductInfo>
      <SC.Photo alt={product.name} src={product.image}/>
      <SC.Info>
        <SC.Name>{product.name}</SC.Name>
        <SC.PricesWrapper>
          <SC.Prices>
            {product.oldPrice && <SC.OldPrice>${product.oldPrice}</SC.OldPrice>}
            <SC.Price>${product.price}</SC.Price>
          </SC.Prices>
          <SC.Counter>
            <SC.CounterBtn onClick={() => changeCount(product.id, product.count - 1)}>-</SC.CounterBtn>
            <SC.Count
              type="text"
              value={product.count}
              onChange={(e) => changeCount(product.id, e.target.value)}
            />
            <SC.CounterBtn onClick={() => changeCount(product.id, product.count + 1)}>+</SC.CounterBtn>
          </SC.Counter>
        </SC.PricesWrapper>
      </SC.Info>
    </SC.ProductInfo>
    <SC.Sum>${Math.round(product.price * product.count)}</SC.Sum>
  </SC.Product>
)

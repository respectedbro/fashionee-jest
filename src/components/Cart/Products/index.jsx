import React from 'react'
import { Product } from "./Product";

import * as SC from './styles'
import { CART_KEY } from "../../../constants/localStorage";

export const Products = ({ products, changeProducts }) => {

  const changeCount = (productId, count) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          count: +count
        }
      }

      return product
    })

    localStorage.setItem(CART_KEY, JSON.stringify(updatedProducts))

    changeProducts(updatedProducts)
  }

  const removeProduct = (productId) => {
    const newProducts = products.filter((product) => product.id !== productId)

    localStorage.setItem(CART_KEY, JSON.stringify(newProducts))
    changeProducts(newProducts)
  }

  return (
    <SC.Products>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          changeCount={changeCount}
          removeProduct={removeProduct}
        />
      ))}
    </SC.Products>
  )
}

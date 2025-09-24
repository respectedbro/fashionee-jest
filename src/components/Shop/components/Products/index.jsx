import React, { useEffect, useState } from "react";

import * as SC from './styles'
import { Product } from "./components/Product";
import { Sort } from "./components/Sort";
import { Pagination } from "./components/Pagination";
import { CART_KEY, FAVORITES_KEY } from "../../../../constants/localStorage";

export const Products = (
  {
    products,
    changeSortType,
    countOfProducts,
    changePage,
    totalPages,
    currentPage,
    sortType
  }
) => {
  const [productsInLS, setProductsInLS] = useState([])
  const toggleFavorite = (productId) => {
    const productsFromLS = localStorage.getItem(FAVORITES_KEY)

    if (!productsFromLS) {
      setProductsInLS([productId])
      localStorage.setItem(FAVORITES_KEY, JSON.stringify([productId]))
      return
    }

    const products = JSON.parse(productsFromLS)
    const inLS = products.find((id) => id === productId)

    if (inLS) {
      const filteredProducts = products.filter((id) => id !== productId)
      setProductsInLS(filteredProducts)
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(filteredProducts))
      return
    }

    products.push(productId)
    setProductsInLS(products)
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(products))
  }

  const buyProduct = (product) => {
    const productsFromLS = localStorage.getItem(CART_KEY)

    if (!productsFromLS) {
      localStorage.setItem(CART_KEY, JSON.stringify([{...product, count: 1}]))
      return
    }

    const products = JSON.parse(productsFromLS)
    const inLs = products.some((productInLs) => productInLs.id === product.id)

    if (inLs) {
      const newProducts = products.map((productInLs) => {
        if (productInLs.id === product.id) {
          return {
            ...productInLs,
            count: productInLs.count + 1
          }
        }
        return productInLs
      })

      localStorage.setItem(CART_KEY, JSON.stringify(newProducts))

      return
    }

    products.push({...product, count: 1})
    localStorage.setItem(CART_KEY, JSON.stringify(products))
  }

  useEffect(() => {
    const productsFromLS = localStorage.getItem(FAVORITES_KEY)

    if (productsFromLS) {
      const products = JSON.parse(productsFromLS)

      setProductsInLS(products)
    }
  }, [])

  return <SC.Products>
    <SC.Actions>
      <div>There are {countOfProducts} products in this category</div>
      <Sort
        onSort={(e) => {
          changeSortType(e.target.value)
        }}
        value={sortType}
      />
    </SC.Actions>
    <SC.ProductsList>
      {
        products.map((product) => (
          <Product
            key={product.id}
            product={product}
            toggleFavorite={toggleFavorite}
            inFavorites={productsInLS.includes(product.id)}
            buyProduct={buyProduct}
          />
        ))
      }
    </SC.ProductsList>
    <Pagination setPage={changePage} totalPages={totalPages} currentPage={currentPage}/>
  </SC.Products>
}

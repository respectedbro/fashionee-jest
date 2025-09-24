import React, { useEffect, useState } from 'react'
import { getProducts } from "../../helpers/products";

import * as SC from './styles'
import { SideBar } from "./components/SideBar";
import { Products } from "./components/Products";

const ITEMS_PER_PAGE = 12
export const Shop = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(0)
  const [countOfProducts, setCountOfProducts] = useState(0)
  const [sortType, setSortType] = useState('PRICE_ASC')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [prices, setPrices] = useState({})
  const [selectedColors, setSelectedColors] = useState([])

  const search = (term) => setSearchTerm(term)

  const changePage = (page) => setPage(page)

  const changeSortType = (type) => setSortType(type)

  const changeCategory = (category) => setSelectedCategory(category)

  const changePrices = (min, max) => setPrices({ min, max })

  const changeColors = (colors) => setSelectedColors(colors)

  useEffect(() => {
    const pagination = {
      page,
      itemsPerPage: ITEMS_PER_PAGE
    }

    const filters = {
      prices,
      search: searchTerm,
      category: selectedCategory,
      colors: selectedColors
    }

    const info = getProducts(pagination, sortType, filters)

    setProducts(info.products)
    setCountOfProducts(info.total)
  }, [page, sortType, searchTerm, selectedCategory, prices, selectedColors])

  return (
    <SC.Wrapper>
      <SideBar
        search={search}
        changeCategory={changeCategory}
        changePrices={changePrices}
        changeColors={changeColors}
      />
      <Products
        products={products}
        changeSortType={changeSortType}
        sortType={sortType}
        countOfProducts={countOfProducts}
        changePage={changePage}
        totalPages={Math.ceil(countOfProducts / ITEMS_PER_PAGE)}
        currentPage={page}
      />
    </SC.Wrapper>
  )
}

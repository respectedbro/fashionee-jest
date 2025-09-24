import React, { useEffect, useState } from 'react'

import * as SC from './styles'
import { getFilterInfo } from "../../../../helpers/products";
import { Button } from "../../../ui/Button";

export const SideBar = ({ search, changeCategory, changePrices, changeColors }) => {
  const [infoForFilters, setInfoForFilters] = useState({})
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedColors, setSelectedColors] = useState([])
  const hasFilters = Object.keys(infoForFilters).length

  const onChangeCategory = (category) => {
    setSelectedCategory(category)
    changeCategory(category)
  }

  const changeMinPrice = (e) => {
    const price = +e.target.value
    setMinPrice(price)
  }

  const changeMaxPrice = (e) => {
    const price = +e.target.value
    setMaxPrice(price)
  }

  const onColorSelect = (e) => {
    const color = e.target.value

    if (selectedColors.includes(color)) {
      const filteredColors = selectedColors.filter((selectedColor) => selectedColor !== color)

      setSelectedColors(filteredColors)
      return
    }

    setSelectedColors([...selectedColors, color])
  }

  const applyFilters = () => {
    changePrices(minPrice, maxPrice)
    changeColors(selectedColors)
  }

  useEffect(() => {
    const info = getFilterInfo()
    setMaxPrice(info.prices.max)
    setInfoForFilters(info)
  }, [])

  return (
    <>
      {!hasFilters && <>Loading...</>}
      {hasFilters && <SC.SideBar>
        <div>
          <input type="text" placeholder="Search" onChange={(e) => search(e.target.value)} />
        </div>
        <div>
          <h1>Categories</h1>
          <SC.Category isActive={selectedCategory === ''} onClick={() => onChangeCategory('')}>All</SC.Category>
          {
            infoForFilters.categories.map((category) => (
              <SC.Category
                key={category}
                isActive={selectedCategory === category}
                onClick={() => onChangeCategory(category)}
              >
                {category}
              </SC.Category>
            ))
          }
        </div>
        <div>
          <h1>Price</h1>
          Min:
          <input type="text" value={minPrice} onChange={changeMinPrice} />
          <br />
          Max:
          <input type="text" value={maxPrice} onChange={changeMaxPrice}/>
        </div>
        <div>
          <h1>Colors</h1>
          {
            infoForFilters.colors.map((color) => <div key={color}>
              <label>
                <input type="checkbox" onChange={onColorSelect} value={color} /> {color}
              </label>
            </div>)
          }
        </div>
        <div>
          <Button onClick={applyFilters}>Apply Filters</Button>
        </div>
      </SC.SideBar>
      }
    </>
  )
}

import React, { useEffect, useState } from 'react'

import { Products } from "./Products";
import { CART_KEY } from "../../constants/localStorage";
import * as SC from './styles'
import { OrderInfo } from "./OrderInfo";
import { Button } from "../ui/Button";

export const Cart = () => {
  const [products, setProducts] = useState([])
  const [promoCode, setPromoCode] = useState('')
  const [discount, setDiscount] = useState(0)

  const changeProducts = (products) => setProducts(products)

  const changePromo = (e) => setPromoCode(e.target.value)

  const addDiscount = () => {
    if (promoCode === 'ilovereact') {
      setDiscount(10)
    } else {
      setDiscount(0)
    }
  }

  useEffect(() => {
    const productsFromLS = localStorage.getItem(CART_KEY)
    if (productsFromLS) {
      setProducts(JSON.parse(productsFromLS))
    }
  }, [])

  return (
    <SC.Cart>
      <SC.OrderInfo>
        <Products products={products} changeProducts={changeProducts} />
        <OrderInfo products={products} discount={discount} />
      </SC.OrderInfo>
      <SC.Promo>
        <SC.PromoTitle>You have a promo code?</SC.PromoTitle>
        <SC.PromoText>To receive up-to-date promotional codes, subscribe to us on social networks.</SC.PromoText>
        <div>
          <SC.PromoInput type="text" placeholder='Enter promo code' value={promoCode} onChange={changePromo} />
          <Button onClick={addDiscount}>Применить</Button>
        </div>
      </SC.Promo>
    </SC.Cart>
  )
}

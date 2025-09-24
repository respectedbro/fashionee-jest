import React, { useEffect, useState } from 'react'
import * as SC from "./styles";
import { Button } from "../../ui/Button";

const DELIVERY_PRICE = 16

export const OrderInfo = ({ products, discount }) => {
  const [orderPrice, setOrderPrice] = useState(0)

  const getOrderPrice = () => {
    let sum = orderPrice

    if (discount) {
      sum = sum - sum * (discount / 100)
    }

    return sum + DELIVERY_PRICE
  }

  useEffect(() => {
    let sum = products.reduce(
      (acc, product) => acc + Math.round(product.price * product.count),
      0
    );

    setOrderPrice(sum)
  }, [products, discount])
  return (
    <SC.Order>
      <SC.Title>Your order</SC.Title>
      <SC.Row>
        <SC.Text>Оrder price</SC.Text>
        <SC.Values>${orderPrice}</SC.Values>
      </SC.Row>
      <SC.Row>
        <SC.Text>Discount for promo code</SC.Text>
        <SC.Values>{discount ? `${discount}%` :  'No'}</SC.Values>
      </SC.Row>
      <SC.Row>
        <SC.Text>Delivery (Aug 02 at 16:00)</SC.Text>
        <SC.Values>${DELIVERY_PRICE}</SC.Values>
      </SC.Row>
      <SC.Row>
        <SC.Hr />
      </SC.Row>
      <SC.Row>
        <SC.Text>Total</SC.Text>
        <SC.Values>${getOrderPrice()}</SC.Values>
      </SC.Row>
      <SC.Row>
        <Button onClick={() => console.log('Go to checkout')}>Checkout</Button>
      </SC.Row>
    </SC.Order>
  )
}

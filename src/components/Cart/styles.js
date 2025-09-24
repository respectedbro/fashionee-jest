import styled from "styled-components";

export const Cart = styled.div`
  display: flex;
  gap: 70px;
  flex-direction: column;
  padding: 30px;
`

export const OrderInfo = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: space-between;
`

export const Promo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 375px;
`

export const PromoTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
  text-transform: capitalize;
  color: #000000;
`

export const PromoText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  color: #444444;
`

export const PromoInput = styled.input`
  padding: 5px 10px;
  border: none;
  border-bottom: 1px solid #444444;
  margin: 0 30px 0 0;
  outline: none;
`

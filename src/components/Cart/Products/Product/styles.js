import styled from "styled-components";

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

export const ProductInfo = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`

export const Photo = styled.img`
  max-width: 130px;
  max-height: 140px;
`

export const Name = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  text-transform: capitalize;
  color: #000000;
`
export const Info = styled.div`
  gap: 25px;
  display: flex;
  flex-direction: column;
`
export const PricesWrapper = styled.div`
  display: flex;
  gap: 48px;
  align-items: center;
`

export const Prices = styled.div`
  display: flex;
  gap: 10px;
`

export const OldPrice = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 100%;
  text-decoration-line: line-through;
  text-transform: capitalize;
  color: #444444;
`

export const Price = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  text-transform: capitalize;
  color: #000000;
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
`

export const CounterBtn = styled.button`
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  text-transform: uppercase;
  color: #999999;
  cursor: pointer;
  padding: 5px 10px;
`

export const RemoveProduct = styled(CounterBtn)`
  position: absolute;
  top: 0;
  right: 0;
  text-transform: none;
`

export const Count = styled.input`
  border: none;
  max-width: 30px;
  text-align: center;
`

export const Sum = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  text-transform: capitalize;
  color: #000000;
`

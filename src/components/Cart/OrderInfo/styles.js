import styled from "styled-components";

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 120%;
  text-transform: capitalize;
  color: #000000;
`

export const Row = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
`

export const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  color: #444444;
`

export const Values = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  text-align: right;
  text-transform: capitalize;
  color: #444444;
`

export const Hr = styled.hr`
  width: 100%;
`

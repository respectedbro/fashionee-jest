import styled from "styled-components";

export const Product = styled.div`
  max-width: 262px;
  width: 100%;
  box-sizing: border-box;
`

export const Wrapper = styled.div`
  position: relative;
`

export const Image = styled.img`
  max-width: 262px;
`

export const Label = styled.div`
  max-width: 48px;
  font-style: normal;
  font-weight: 800;
  font-size: 10px;
  line-height: 100%;
  text-transform: uppercase;
  color: #FFFFFF;
  padding: 5px 10px;
  box-sizing: border-box;
  position: absolute;
  top: 17px;
  left: 20px;
`

export const NewLabel = styled(Label)`
  background: #95CCB5;
`

export const SaleLabel = styled(Label)`
  background: #FF8E8E;
`

export const Favorite = styled.div`
  position: absolute;
  top: 17px;
  right: 20px;
  cursor: pointer;
  
  > svg {
    fill: ${(props) => props.inFavorites ? 'red' : 'black'};
  }
  
  &:hover {
    >svg {
      fill: ${(props) => props.inFavorites ? 'black' : 'red'};
    }
  }
`

export const ProductName = styled.div`
  margin: 20px 0 0 0;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  color: #444444;
`

export const Price = styled.div`
  display: flex;
  gap: 15px;
  margin: 10px 0 0 0;
`

export const CurrentPrice = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  text-transform: capitalize;
  color: #000000;
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

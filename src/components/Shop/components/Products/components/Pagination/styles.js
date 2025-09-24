import styled from 'styled-components'

export const Pagination = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin: 30px 0 0 0;
  justify-content: center;
`

export const Page = styled.div`
  cursor: pointer;
  color: ${(props) => props.isCurrent ? 'red': 'black'};
  
  &:hover {
    color: ${(props) => props.isCurrent ? 'black': 'red'}
  }
`

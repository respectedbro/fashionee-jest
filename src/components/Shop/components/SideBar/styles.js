import styled from "styled-components";

export const SideBar = styled.div`
  max-width: 244px;
  width: 100%;
  display: flex;
  gap: 50px;
  flex-direction: column;
`

export const Category = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  color: ${(props) => props.isActive ? '#FF8E8E' : '#444444'};
  cursor: pointer;
`

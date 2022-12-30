import styled from 'styled-components';

export const MenuList = styled.ul`
  
`

export const ItemList = styled.li`
  display: inline-block;
  margin-right: 25px;
  font-weight: 700;
  a {
    color: #1A2254;
  }
  
  @media (max-width: 600px) {
    display: none;
   }
`
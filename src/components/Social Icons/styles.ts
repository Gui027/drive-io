import styled from 'styled-components';

export const SocialList = styled.ul`
  align-items: center;
  
`
export const ItemList = styled.li`
 .iconSocial {
    color: #1A2254;
    background-color: #8A9FC3;
    border-radius: 50%;
    align-content: center;
    width: 30px;
    height: 30px;
    padding: 4px;

    @media (max-width: 600px) {
      width: 23px;
      height: 23px;
      padding: 4px;
    }

    &:hover {
      background-color: #FFF;
    }
  }

  display: inline-block;
  margin-right: 25px;

`
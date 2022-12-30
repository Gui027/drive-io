import styled from 'styled-components';

export const Box = styled.header`
  align-content: center;
  margin: 20px 40px;
  padding: 0px 20px;
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 30px; */

  > img {
    width: 170px;
    height: 50px;
  }

  @media (max-width: 600px) {
    margin: 20px 40px;
    padding: 0px 20px;
    
   img {
    width: 110px;
    height: 30px;
   }
  }
  `

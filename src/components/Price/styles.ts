import styled from 'styled-components';

export const Box = styled.div`
  height: 500px;
  background-color: #F0EBE1;
  align-items: center;
  align-content: center;
  text-align: center;
  font-size: 20px;
  margin-top: 120px;
  margin-bottom: 120px;
  color: #1A2254;
  flex: 1;
  justify-content: center;
  display: flex;
  
  @media (max-width: 600px) {
    font-size: 15px;
    margin-top: 90px;
    margin-bottom: 90px;
  }

  span {
    color: #00A5FA;
  }

  h1 {
    text-align: center;
    line-height: 50px;
  }

  h3 {
    margin: 20px 0px;
   color: rgba(30, 37, 94, 0.7);
   font-weight: 400;
  }
`
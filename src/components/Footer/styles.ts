import styled from 'styled-components';


export const Container = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  background-color: #1A2254;
  height: auto;
  width: 100vw;
  font-family: "Open Sans";
  padding-top: 40px;
  color: #fff;
  
  img {
    width: 150px;
  }
  
  @media (max-width: 600px) {
    padding-top: 20px;

    img {
      width: 90px;
    }
  }

  .footer-content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    @media (max-width: 600px) {
    }
  }

  .footer-content h3{
    font-size: 1.8rem;
    font-weight: 400;
    text-transform: capitalize;
    line-height: 3rem;
  }

  .footer-content p{
    max-width: 500px;
    margin: 10px auto;
    line-height: 28px;
    font-size: 18px;

    @media (max-width: 600px) {
      font-size: 15px;
      max-width: 350px;
    }
  }

  .footer-bottom{
    background-color: #000;
    width: 100vw;
    padding: 20px 0;
    text-align: center;
    margin-top: 20px;

    @media (max-width: 600px) {
      padding: 10px 0;
    }
  }

  .footer-bottom p{
    font-size: 14px;
    word-spacing: 2px;
    text-transform: capitalize;

    @media (max-width: 600px) {
      font-size: 12px;
    }
  }

  .footer-content span{
    text-transform: uppercase;
    opacity: .4;
    font-weight: 200px;
  }

`
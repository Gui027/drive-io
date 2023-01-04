import styled from 'styled-components';

export const Container = styled.div`
  /* width: 100%; */
  /* margin: 0px 18px;
  padding: 0px 20px; */
  overflow-x: hidden;

  main {
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
  }

.button {
  margin-left: -60%;
  text-align: center;
  margin-bottom: 80px;
}
`

export const Header = styled.main`
  padding: 0px 20px;
  height: 72px;
  background: #000;

  main {
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  @media (max-width: 600px) {
    align-items: center;
    align-content: center;
  }
`

export const Content1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 85px;
  margin-bottom: 10px;
  margin-right: 18px;
  margin-left: 18px;
  padding: 0px 20px;

  > div {
    margin: 10px 21px;
    padding: 5px;
    width: 50%;
  }

  h1 {
    color: #1A2254;
    font-size: 56px;
    font-weight: bold;
    line-height: 78px;
  }

  h6 {
    font-size: 16px;
    color: rgba(30, 37, 94, 0.7);
    font-weight: normal;
    padding-right: 100px;
    margin-top: 5px;
  }

  span {
    color: #00A5FA;
  }

  @media (max-width: 600px) {

    display: flex;
    flex-direction: column;
    margin-top: 0px;

    div {
      /* width: 300px; */
      /* margin: 10px 21px; */
      /* padding: 5px; */
    }

    h1 {
      text-align: center;
      font-size: 30px;
      line-height: 42px;
      width:300px;
      align-items: center;
      margin-bottom: 30px;
    }

    h6 {
      font-size: 14px;
      width: 410px;
    }

    .button {
      
    }
  }
`

export const Image1 = styled.div`
  img {
    margin-top: -50px;
    width: 700px;
  }

  @media (max-width: 600px) {
    img {
      margin-top: 0px;
      width: 350px;
      margin-left: -30px;
    };
  }
`
export const Content2 = styled.div`
  height: 800px;
  background-color: #F0EBE1;
  margin-top: 50px;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: column;

  span {
    color: #00A5FA;
  }

  > h1 {
    text-align: center;
    font-size: 35px;
    color: #1A2254
  }

  > video {
    width: 800px;
    margin-top: 35px;
    border-radius: 30px;
  }
  
  @media (max-width: 600px) {
    height: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 0px;

    div {
      
    }

   h1 {
      text-align: center;
      font-size: 18px;
      line-height: 28px;
      width:355px;
      align-items: center;
      margin-bottom: 30px;
   }

   video {
    width: 370px;
    margin-top: 35px;
    border-radius: 30px;
    margin-top: -10px;
   }
  }
`
export const Text = styled.h1`
  margin-top: 80px;
  margin-bottom: 30px;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  color: #1A2254;
  /* margin-bottom: 30px; */

  span {
    color: #00A5FA;
  }

  @media (max-width: 600px) {
      text-align: center;
      font-size: 9px;
      line-height: 28px;
      width:357px;
      align-items: center;
      margin-bottom: 30px;
  }
 `

export const TextClientes = styled.h1`
  margin-top: 50px;
  margin-bottom: 60px;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  color: #1A2254;
  /* margin-bottom: 30px; */

  span {
    color: #00A5FA;
  }

  @media (max-width: 600px) {
    text-align: center;
      font-size: 12px;
  }
 `
export const Text3 = styled.h1`
margin-top: 80px;
margin-bottom: 30px;
font-size: 15px;
text-align: center;
font-weight: bold;
color: #1A2254;

span {
  color: #00A5FA;
}

@media (max-width: 600px) {
      font-size: 12px;
  }
`
export const Content3 = styled.div`
  margin: 10px 18px;
  padding: 0px 20px;
  align-items: center;
  display: flex;
  flex-direction: row;

  @media (max-width: 600px) {
    display: flex;
  flex-direction: column;
  }

  span {
    color: #00A5FA;
  }

  div {
    margin-top: 20px;

    @media (max-width: 600px) {
    /* background-color: red; */
    margin-top: 0px;
  }
  }

  .iconCheck {
    color: #01D8A9;
    font-size: 30px;
    margin-left: -40px;
    margin-right: 8px;

    @media (max-width: 600px) {
      font-size: 20px;
  }
  }

  h1 {
    font-size: 25px;
    font-weight: bold;
    color: #1A2254;
    margin-bottom: 30px;

    @media (max-width: 600px) {
      text-align: center;
      font-size: 18px;
      line-height: 28px;
      width:355px;
      align-items: center;
      margin-bottom: 30px;
  }
  }

  h6 {
    font-size: 15px;
    color: rgba(30, 37, 94, 0.7);
    font-weight: normal;
    margin-top: 5px;
    margin-bottom: 10px;
    /* width: 331px; */
    /* line-height: 8px; */
    @media (max-width: 600px) {
      
  }
  }

  h5 {
    @media (max-width: 600px) {
    }
  }

  ul {
    display: flex;
    align-items: center;
    align-self: center;
    align-content: center;
    font-size: 14px;
    color: black;
    @media (max-width: 600px) {
      font-size: 13px;
      margin-bottom: 10px;
    }
  }

  img {
    /* margin-top: 10px; */
    width: 50px;

    @media (max-width: 600px) {
      align-items: center;
      justify-content: center;
      align-content: center;
      width: 50px;
      margin-left: 44%;
    }
  }
  
`

export const Image2 = styled.div`
  img {
    width: 700px;
  }

  @media (max-width: 600px) {
    margin: 0px -400px;
    padding: 0px;
    width: 90px;
  }
`

export const Content4 = styled.div`
  margin: 0px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  div {
    img {
      width: 80px;
      border-radius: 50%;
      border: 2px solid #005BE8;
      margin-bottom: 50px;
      align-items: center;
      align-content: center;
      text-align: center;
      align-self: center;
    }
  }

  .prova {
    @media (max-width: 600px) {
      align-items: center;
      align-content: center;
    }
  }

  .box {
    margin: 0px 18px;
    padding: 0px 20px;
    display: flex;
    flex-direction: row;

    @media (max-width: 600px) {
      margin: 6px 2px;
      padding: 0px 16px;
    }
    

    h1 {
      margin-top: 6px;
    }
    /* align-content: center; */
  }

  h1 {
    margin: 0px 0px;
    padding: 0px 20px;
    font-size: 18px;
    font-weight: 600;
    color: #005BE8;
    margin-bottom: 6px;

    @media (max-width: 600px) {
      font-size: 16px;
      padding: 0px 0px;
      margin: 0px 10px;
    }
  }

  h2 {
    margin: 0px 0px;
    padding: 0px 20px;
    font-size: 15px;
    font-weight: 500;

    @media (max-width: 600px) {
      font-size: 11px;
      line-height: 12px;
      padding: 0px 0px;
      margin: 2px 10px;
    }
  }

  @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
    div {
      img {
        width: 50px;
        border-radius: 50%;
        border: 2px solid #005BE8;
        margin-bottom: 50px;
        align-items: center;
        align-content: center;
        text-align: center;
        align-self: center;
      }
    }
  }
`

export const TextProva = styled.div`
  margin: 0px 18px;
  padding: 0px 20px;
  /* margin-top: 20px; */
  margin-bottom: 20px;
  font-size: 15px;
  color: rgba(30, 37, 94, 0.7);
  font-weight: normal;
  font-style: italic;
  font-weight: 500;
  width: 429px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    width: 250px;
    padding: 0px;
    /* margin: 0px 18px; */
    /* padding: 0px 20px; */
  }
`

export const Prices = styled.div`
  /* background-color: black; */
`
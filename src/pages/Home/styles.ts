import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
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
`

export const Image1 = styled.div`
  img {
    margin-top: -50px;
    width: 700px;
  }
`
export const Content2 = styled.div`
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
 `

export const Text2 = styled.h1`
  margin-top: 50px;
  margin-bottom: 80px;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  color: #1A2254;
  /* margin-bottom: 30px; */

  span {
    color: #00A5FA;
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
`
export const Content3 = styled.div`
  margin: 10px 18px;
  padding: 0px 20px;
  align-items: center;
  display: flex;
  flex-direction: row;

  span {
    color: #00A5FA;
  }

  div {
    margin-top: 20px
  }

  .iconCheck {
    color: #01D8A9;
    font-size: 30px;
    margin-left: -40px;
    margin-right: 8px;
  }

  h1 {
    font-size: 25px;
    font-weight: bold;
    color: #1A2254;
    margin-bottom: 30px;
  }

  h6 {
    font-size: 15px;
    color: rgba(30, 37, 94, 0.7);
    font-weight: normal;
    margin-top: 5px;
    margin-bottom: 10px;
    /* width: 331px; */
    /* line-height: 8px; */
  }

  h5 {
  }

  ul {
    display: flex;
    align-items: center;
    align-self: center;
    align-content: center;
    font-size: 14px;
    color: black;
  }

  img {
    /* margin-top: 10px; */
    width: 50px;
  }
`

export const Image2 = styled.div`
  img {
    /* display: block; */
    /* margin: auto; */
    width: 700px;
  }
`

export const Content4 = styled.div`
  margin: 0px 18px;
  display: flex;
  justify-content: center;
  align-items: center;

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

  }

  .box {
  margin: 0px 18px;
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  
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
  }

  h2 {
    margin: 0px 0px;
    padding: 0px 20px;
    font-size: 15px;
    font-weight: 500;
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
`

export const Prices = styled.div`
  /* background-color: black; */
`
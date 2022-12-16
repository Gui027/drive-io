import styled from 'styled-components';

export const Container = styled.div`
  /* width: 100%; */
  margin: 0px 18px;
  padding: 0px 20px;
  overflow-x: hidden;

  main {
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`

export const Header = styled.main`
  height: 72px;
  background: #000;
`

export const Content1 = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 85px;

  > div {
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
  margin-top: 50px;
  flex: 1;
  justify-content: center;
  align-items: center;
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
  margin-top: 50px;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  color: #1A2254;
  /* margin-bottom: 30px; */

  span {
    color: #00A5FA;
  }
 `

export const Content3 = styled.div`
  display: flex;
  /* margin-top: 35px; */
  flex-direction: row;

  span {
    color: #00A5FA;
  }

  .iconCheck {
    color: #01D8A9;
    font-size: 30px;
    margin-left: -10px;
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
    margin-top: 100px;
    width: 50px;
  }
`

export const Image2 = styled.div`
  img {
    display: block;
    margin: auto;
    width: 700px;
  }
`
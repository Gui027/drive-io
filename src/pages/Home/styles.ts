import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0px 18px;
  padding: 0px 20px;

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
  margin-top: 75px;

  > div {
    width: 50%;
  }

  h1 {
    color: #1A2254;
    font-size: 56px;
    font-weight: bold;
  }

  h6 {
    font-size: 16px;
    color: rgba(30, 37, 94, 0.7);
    font-weight: normal;
    padding-right: 100px;
    margin-top: 5px;
  }
`

export const Image1 = styled.div`
  img {
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

  > h2 {
    font-size: 35px;
    color: #1A2254
  }

  > video {
    width: 800px;
    margin-top: 35px;
  }
`

export const Content3 = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: row;
`

export const Image2 = styled.div`
  img {
    display: block;
    margin: auto;
  }
`
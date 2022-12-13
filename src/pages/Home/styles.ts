import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* max-width: 110px; */
  margin: auto;

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
    margin-top: 25px;
  }
`

export const Image1 = styled.div`
  img {
    display: block;
    margin: auto;
  }
`
export const Content2 = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  > h2 {
    color: #1A2254
  }
`

export const Content3 = styled.div`
  display: flex;
  flex-direction: row;
`

export const Image2 = styled.div`
  img {
    display: block;
    margin: auto;
  }
`
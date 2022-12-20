import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  bottom: 0;
  width: 100%;
  /* position: fixed; */
  background-color: #07074E;
  margin: 0;
  padding: 0;
  height: 200px;
  align-items: center;
  align-content: center;

  #linha-horizontal {
    width: 100%;
    border: 1px solid #fff;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 200px;
  }
`
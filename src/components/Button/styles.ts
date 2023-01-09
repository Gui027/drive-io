import styled from 'styled-components';

export const Container = styled.button`
  background-color: #0148B0;
  border: 1px solid #0148B0;
  color: #FFF;
  font-size: 14px;
  font-weight: 400;
  width: 230px;
  height: 60px;
  border-radius: 100px;
  margin-top: 30px;
  transition: all 0.25s ease-out;

  &:hover {
    background-color: #FFF;
  color: #0148B0;
  }

  @media (max-width: 600px) {
    font-size: 11px;
    width: 130px;
    height: 50px;
  }
  `;
import styled from 'styled-components';

export const Faq = styled.main`
  .wrapper {
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
  }

  .accordion {
    width: 500px;
  }

  .item {
    background: #f0ebe1;
    margin-bottom: 5px;
    padding: 10px 20px;
  }

  .title {
    color: #85662b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .content {
    color: #8b7f75;
    max-height: 0;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0,1,0,1);
  }

  .content.show {
    height: auto;
    max-height: 9999px;
    transition: all 0.5s cubic-bezier(1,0,1,0);
  }


`
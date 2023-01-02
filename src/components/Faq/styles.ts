import styled from 'styled-components';

export const Faq = styled.main`
  .wrapper {
    display: flex;
    /* height: 100vh; */
    /* width: 100vw; */
    justify-content: center;
    align-items: center;
  }

  .accordion {
    width: 999px;

    @media (max-width: 600px) {
      width: 370px;
  }
  }

  .item {
    background: #f0ebe1;
    border-radius: 30px;
    margin-bottom: 5px;
    padding: 10px 20px;
  }

  .title {
    font-size: 12px;
    margin-bottom: 20px;
    color: #1A2254;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    cursor: pointer;

    @media (max-width: 600px) {
     font-size: 10px;
     margin-bottom: 12px;
  }
  }

  .content {
    color: rgba(30, 37, 94, 0.7);
    max-height: 0;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0,1,0,1);

    @media (max-width: 600px) {
     font-size: 13px;
  }
  }

  .content.show {
    height: auto;
    max-height: 9999px;
    transition: all 0.5s cubic-bezier(1,0,1,0);
  }


`
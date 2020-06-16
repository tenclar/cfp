import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const Header = styled.div`
  height: 100px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      margin-left: 20px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    h1 {
      font-weight: bold;
      color: #363636;
      font-size: 50px;
    }
    a {
      font-weight: bold;
      color: #363636;
      font-size: 16px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  align-content: stretch;
  background: #dadada;
  border: 2px solid blue;
  min-height: 82vh;
`;

export const TotalLabel = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  font-size: 20px;
`;

export const TotalPessoas = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  font-size: 50px;

  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #333;
    }
  }
`;

export const Labels = styled.div`
  flex: 1;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50%;

    strong {
      font-size: 36px;
    }
    p {
      margin-left: 10px;
      font-size: 50px;
    }
  }
`;
export const Buttons = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;

  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  background-color: #f5f5f5;
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  nav {
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

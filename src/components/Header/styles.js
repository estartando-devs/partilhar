import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 114px;
  font-size: 23.42px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: normal;
  color: #5a7770;
  box-sizing: border-box;
`;
const ContentHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 18px;
`;

const ContainerMenu = styled.div`
  margin-right: 20px;
  button {
    display: flex;
    border: none;
    background-color: #fff;
    padding: 2px;
  }
`;

export { Container, ContentHeader, ContainerMenu };

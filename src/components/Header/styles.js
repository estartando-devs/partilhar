import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  min-width: 375px;
  height: 114px;
  font-size: 23.42px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-style: normal;
  color: #5a7770;
`;
const ContentHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding-left: 18px;
  gap: 11px;
`;

const Menu = styled.div`
  margin-right: 20px;
`;

const Button = styled.button`
  border: none;
  background-color: #fff;
  padding: 5px;
`;
export { Container, ContentHeader, Menu, Button };

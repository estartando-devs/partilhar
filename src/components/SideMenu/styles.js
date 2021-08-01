import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 40px;
  flex-direction: column;
  width: 176px;
  height: 323px;
  background-color: #5a7770;
  border-radius: 6px;
  right: -176px;
  transform: translateX(${(props) => (props.show ? "-100%" : "0")});
  box-sizing: border-box;
  transition: transform 1s;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 15px;
  margin-left: 16px;
`;

const ItemMenu = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #fff;
  font-weight: 500;
  gap: 11px;
  text-decoration: none;
`;

const Arrow = styled.div`
  margin-bottom: 28px;
`;

const ContainerMenu = styled.div`
  position: fixed;
  opacity: 0;
  pointer-events: none;
  background-color: #c4c4c4a3;
  width: 100vw;
  height: 100vh;
  top: 0;
  transition: opacity 0.5s;
  ${(props) =>
    props.show &&
    css`
      opacity: 1;
      pointer-events: auto;
    `};
`;

export { Container, Menu, ItemMenu, Arrow, ContainerMenu };

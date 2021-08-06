import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
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
  transition: transform 0.8s;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 15px;
  margin-left: 16px;
`;

export const ItemMenu = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #fff;
  font-weight: 500;
  gap: 11px;
  text-decoration: none;
`;

export const Button = styled.button`
  margin-bottom: 28px;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background-color: #6b8c82;
  color: ${(props) => props.theme.palette.text.light.primary};
  font-weight: 700;
  border-style: none;

  :active {
    background-color: #a6bdb6;
  }
`;

export const Overlay = styled.div`
  position: absolute;
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

export const Imagem = styled.img``;

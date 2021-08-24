import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 40px;
  flex-direction: column;
  width: 176px;
  height: 323px;
  background-color: ${(props) => props.theme.palette.primary};
  border-radius: 6px;
  right: -176px;
  transform: translateX(${(props) => (props.show ? "-100%" : "0")});
  transition: transform 0.8s;
  box-sizing: border-box;
  @media (min-width: 768px) {
    display: flex;
    position: unset;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 42px;
    border-radius: 0px;
    top: 0;
    right: 0;
    background-color: ${(props) => props.theme.palette.primary};
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 15px;
  padding-left: 16px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    gap: 0;
    height: 100%;
  }
`;

export const ItemMenu = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${(props) => props.theme.palette.text.light.primary};
  font-weight: 500;
  gap: 11px;
  text-decoration: none;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    height: 100%;
    width: 130px;
    gap: 0;
    justify-content: center;
    :hover {
      background-color: ${(props) => props.theme.palette.text.light.primary}30;
    }
  }
`;
export const ItemMenuDesktop = styled(Link)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: ${(props) => props.theme.palette.text.light.primary};
    font-weight: 500;
    font-size: 1.2rem;
    height: 100%;
    width: 160px;

    :hover {
      background-color: ${(props) => props.theme.palette.text.light.primary}30;
    }
  }
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background-color: ${(props) => props.theme.palette.text.light.secondary};
  color: ${(props) => props.theme.palette.text.light.primary};
  font-weight: 700;
  border-style: none;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  @media (max-width: 767px) {
    position: fixed;
    opacity: 0;
    pointer-events: none;
    background-color: ${(props) => props.theme.palette.background.modal};
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
  }
`;

export const Imagem = styled.img`
  @media (min-width: 768px) {
    display: none;
  }
`;

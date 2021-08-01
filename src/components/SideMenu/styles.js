import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 176px;
  height: 323px;
  background-color: #5a7770;
  border-radius: 6px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 15px;
  margin-left: 16px;
`;

const ItemMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #fff;
  font-weight: 500;
  gap: 11px;
`;
const Arrow = styled.div`
  margin-bottom: 28px;
`;

export { Container, Menu, ItemMenu, Arrow };

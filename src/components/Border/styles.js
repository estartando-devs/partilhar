import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const ContainerBorder = styled.div`
  display: flex;
  flex-direction: row;
  height: 11px;
`;
export const Card = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: 100%;
  height: 100%;
`;

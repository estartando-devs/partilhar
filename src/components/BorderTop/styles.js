import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 10px;
`;
export const Card = styled.div`
  background-color: ${(props) => props.backgroundColor};
  height: 100%;
  width: 100%;
`;

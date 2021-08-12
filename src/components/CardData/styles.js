import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 360px;
  height: auto;
  padding: 21px;
  background-color: ${(props) => props.bgColor};
  color: ${({ theme }) => theme.palette.text.primary};
`;
export const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.primary};
`;
export const ContainerData = styled.div`
  padding: 14px 13px;
  border: 1px solid ${({ theme }) => theme.palette.text.light.primary};
  border-radius: 7px;
`;

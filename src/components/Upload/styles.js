import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 110px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.palette.step.primary}43;

  @media (min-width: 768px) {
    width: 375px;
    height: 165px;
    cursor: pointer;
    background-size: 375px auto;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 10px;
`;
export const Icon = styled.img``;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const Text = styled.p`
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Alert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 200px;
  position: absolute;
`;

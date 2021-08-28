import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  ${({ inlineUpload }) =>
    inlineUpload &&
    css`
      margin: 0;
    `};
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

  ${({ inlineUpload }) =>
    inlineUpload &&
    css`
      width: 100%;
      height: unset;
      background: none;
      @media (min-width: 768px) {
        width: 100%;
        height: unset;
      }
    `};
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 10px;
`;
export const Icon = styled.img`
  ${({ inlineUpload }) =>
    inlineUpload &&
    css`
      width: 30px;
      height: auto;
      @media (min-width: 768px) {
        width: 40px;
      }
    `};
`;

export const Message = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.palette.text.dark.tertiary};
`;

export const MessageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.text.placeholder.primary};
  padding: 12px 15px;
  margin-left: 5px;
  border-radius: 4px;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 0 15px;
    margin-left: 10px;
  }
`;

export const UploadStatus = styled.img`
  width: 20px;
  height: 20px;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

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
  font-size: ${(props) => (props.error ? "8px" : "12px")};
  width: 230px;
  position: absolute;
  font-weight: 900;
  color: ${(props) => props.theme.palette.text.tertiary};
  @media (min-width: 768px) {
    font-size: 1.2rem;
    width: 350px;
  }
  ${({ inlineUpload }) =>
    inlineUpload &&
    css`
      font-size: 8px;
      @media (min-width: 768px) {
        font-size: 10px;
      }
    `};
`;

import styled from "styled-components";

export const Image = styled.img`
  height: 271px;
  width: 211px;
`;
export const ContentData = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const Border = styled.div`
  padding: 14px 13px;
  border: 1px solid ${({ theme }) => theme.palette.text.light.primary};
  border-radius: 7px;
`;

export const SubTitle = styled.h3`
  text-align: center;
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.primary};
`;
export const Data = styled.div``;

export const TextHeader = styled.p`
  font-size: 14px;
  padding: 5px 0;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.text.primary};
`;
export const Text = styled.p`
  font-size: 14px;
  padding: 5px 0;

  color: ${({ theme }) => theme.palette.text.primary};
`;

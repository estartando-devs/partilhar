import styled from "styled-components";

export const ContentData = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap || "5px"};
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
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1130px) {
    font-size: 1.4rem;
  }
`;
export const Data = styled.div`
  @media (min-width: 768px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  @media (min-width: 1130px) {
    font-size: 1.3rem;
    gap: 8px;
  }
`;

export const TextHeader = styled.p`
  display: flex;
  align-items: center;
  height: 30px;
  width: ${(props) => props.width};
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.text.primary};
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1130px) {
    font-size: 1.3rem;
  }
`;
export const Text = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  height: 30px;
  padding-left: 10px;
  color: ${({ theme }) => theme.palette.text.primary};
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1130px) {
    font-size: 1.3rem;
  }
`;
export const Icon = styled.img`
  height: 20px;
  padding-right: 5px;
`;

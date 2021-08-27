import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 342px;
  gap: 10px;
`;
export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 100%;
`;

export const ProfileImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Banner = styled.img`
  width: 130px;
  height: 130px;
  border: 1px solid ${({ theme }) => theme.palette.text.secondary};
  border-radius: 5px;
  margin-bottom: 8px;
`;

export const ProfileEdit = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Img = styled.img``;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.text.tertiary};
`;

export const Text = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.text.tertiary};
`;

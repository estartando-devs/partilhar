import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const ContainerProfile = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 342px;
  gap: 10px;
  @media (min-width: 768px) {
    width: 750px;
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  @media (min-width: 768px) {
    margin-bottom: 36px;
  }
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
  object-fit: cover;
  @media (min-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;

export const ProfileEdit = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ImgEdit = styled.img`
  @media (min-width: 768px) {
    width: 16px;
  }
`;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.text.tertiary};
  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.text.tertiary};
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const TextEdit = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.text.dark.tertiary};
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Img = styled.img`
  width: 250px;
  height: 110px;
  object-fit: cover;
  object-position: center;
  @media (min-width: 768px) {
    width: 300px;
    height: 160px;
  }
`;

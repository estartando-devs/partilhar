import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 335px;
  height: 100%;
  border-radius: 7px;
`;
export const Title = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 900;
`;
export const SubTitle = styled.h2`
  font-size: 16px;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme.palette.text.dark.primary};
  padding: 5px 0;
`;

export const ContentCause = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  width: 335px;
  height: 100%;
  border: 1px solid ${(props) => props.theme.palette.text.light.tertiary};
  box-sizing: border-box;
  padding: 13px 20px;
  border-radius: 5px;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.palette.text.dark.primary};
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
`;
/* }&::after {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 2px solid ${(props) => props.bgColorBorder};
    border: 2px solid #000; */
/* background-color: ${(props) => props.bgColor}; */
/* -webkit-box-shadow: 0 0 0 4px
      ${(props) => props.theme.palette.text.light.primary} inset;
  } */

// margin: 10px 0 2px;
//     font-size: 16px;
//     font-family: "Lato", sans-serif;
//     font-weight: 400;
//     color: ${(props) => props.theme.palette.text.dark.primary};
//     width: 26px;
//     height: 26px;
export const Input = styled.input`
  appearance: none;
  border: 2px solid ${(props) => props.bgColor};
  width: 26px;
  height: 26px;
  border-radius: 50%;
  outline: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 2px solid ${(props) => props.bgColor};
    background-color: ${(props) => props.bgColor};
    opacity: 0;
    transition: all 200ms ease-in-out;
    -webkit-box-shadow: 0 0 0 4px
      ${(props) => props.theme.palette.text.light.primary} inset;
    
    }
   &:checked::before{
        opacity: 1;
      }
    
  }

  /* background-color: ${(props) => props.bgColor};
  -webkit-box-shadow: 0 0 0 4px
      ${(props) => props.theme.palette.text.light.primary} inset;
  }  */
  /* opacity: 1; */
  /* display: none; */
`;
// export const Radio = styled.div`
//   width: 26px;
//   height: 26px;
//   border-radius: 50%;
//   box-sizing: border-box;
//   border: 2px solid ${(props) => props.bgColorBorder};
//   background-color: ${(props) => props.bgColor};
//   -webkit-box-shadow: 0 0 0 4px
//     ${(props) => props.theme.palette.text.light.primary} inset;
// `;

// ---------------------
export const LabelText = styled.label``;
export const TextArea = styled.textarea`
  border: 1px solid ${(props) => props.theme.palette.text.light.tertiary};
  width: 335px;
  height: 100px;
  border-radius: 5px;
  padding: 5px;
  resize: none;
`;
export const Counter = styled.p`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: -10px;
  padding-right: 5px;
  font-size: 12px;
  color: ${(props) => props.theme.palette.text.placeholder.secondary};
`;

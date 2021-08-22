import styled from "styled-components";

const InputStyles = styled.input`
  height: ${(props) => props.height || "100%"};
  color: ${(props) => props.color};
  border: 1px solid;
  width: ${(props) => props.width || "100%"};
  min-width: ${(props) => props.width || "177px"};
  width: 100%;
  max-width: ${(props) => props.width || "265px"};
  border-color: ${(props) => props.borderColor};
  border-radius: 3px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: left center;
  background-position-x: 8px;
  box-sizing: border-box;
  padding-left: ${(props) => props.paddingLeft};
  outline: none;
  ::placeholder {
    color: ${(props) => props.colorPlaceholder};
    font-size: 13px;
  }
`;

export { InputStyles };

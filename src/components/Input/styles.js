import styled from "styled-components";

const InputStyles = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  border: 1px solid;
  border-color: ${(props) => props.borderColor};
  border-radius: 3px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: left center;
  background-position-x: 17px;
  box-sizing: border-box;
  padding-left: ${(props) => props.paddingLeft};
  outline: none;
  ::placeholder {
    color: ${(props) => props.colorPlaceholder};
    font-size: 13px;
  }
`;

export { InputStyles };

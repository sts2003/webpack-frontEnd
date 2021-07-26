import styled from "styled-components";

export const Wrapper = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  margin: ${(props) => props.margin || ``};
  padding: ${(props) => props.padding || ``};

  display: flex;
  flex-direction: ${(props) => props.dr || `column`};
  align-items: ${(props) => props.al || `center`};
  justify-content: ${(props) => props.ju || `center`};
`;

export const ImageBox = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
  margin: ${(props) => props.margin || ``};
  padding: ${(props) => props.padding || ``};

  background-image: url(${(props) => props.bgImg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  transition: 0.3s;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const CommonBtn = styled.button`
  width: ${(props) => props.width || `120px`};
  height: ${(props) => props.height || `30px`};

  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.isCreate
      ? props.theme.mainThemeColor
      : props.isRead
      ? props.theme.checkColor
      : props.isUpdate
      ? props.theme.pointColor
      : props.isDelete
      ? props.theme.errorColor
      : props.theme.mainThemeColor};

  color: ${(props) => props.theme.whiteColor};
  border-radius: ${(props) => props.theme.radius};
  box-shadow: ${(props) => props.theme.boxShadow};

  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.whiteColor};
    border: 1px solid ${(props) => props.theme.mainThemeColor};
    color: ${(props) => props.theme.mainThemeColor};
  }
`;

export const TextInput = styled.input`
  width: ${(props) => props.width || `450px`};
  height: 35px;
  border-radius: 10px;
  margin: 10px 0px;
  padding: 0px 15px;
  outline: none;
  border: 1px solid ${(props) => props.theme.grayColor};
  background: none;
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: 0.5s;

  &:hover {
    box-shadow: 5px 5px 5px #0b0b0b;
  }

  &:focus {
    box-shadow: 5px 5px 5px #0b0b0b;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileLabel = styled.label`
  width: 120px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.checkColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 5px;
  border-radius: ${(props) => props.theme.radius};
`;

export const Image = styled.img`
  width: 400px;
  height: 400px;
  border: 1px solid #777;
  margin: 10px;
  object-fit: cover;
`;

export const FileInputNone = styled.input`
  width: 500px;
  background-color: ${(props) => props.theme.lightGrayColor};
`;

import React from "react";
import {
  Wrapper,
  TextInput,
  CommonBtn,
} from "../../components/CommonComponents";
import styled from "styled-components";
import Typist from "react-typist";
import Fade from "react-reveal/Fade";

const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin: 0px 0px 40px 0px;
`;

const LowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PostButton = styled.button`
  width: 140px;
  height: 30px;
  border-radius: ${(props) => props.theme.radius};
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.checkColor};
  color: ${(props) => props.theme.whiteColor};
  margin-left: 10px;
  transition: 0.5s;
  &:hover {
    background-color: ${(props) => props.theme.whiteColor};
    border: 1px solid ${(props) => props.theme.checkColor};
    color: ${(props) => props.theme.checkColor};
  }
`;

const MM04Presenter = ({
  newName,
  newEmail,
  newMobile,
  newZoneCode,
  newAddress,
  registUserHandler,
  searchPostHander,
  moveLinkHandler,
}) => {
  return (
    <Wrapper>
      <Fade bottom>
        <Typist cursor={{ show: false }}>
          <Title>회원가입</Title>
        </Typist>
        <TextInput
          type="text"
          placeholder={`E-MAIL...`}
          {...newEmail}
          width={`300px`}
        />
        <TextInput
          type="text"
          placeholder={`NAME...`}
          {...newName}
          width={`300px`}
        />
        <TextInput
          type="text"
          placeholder={`MOBILE...`}
          {...newMobile}
          width={`300px`}
        />
        <LowWrapper>
          <TextInput
            type="text"
            width={`150px`}
            placeholder={`ZONECODE`}
            readOnly={true}
            {...newZoneCode}
          />
          <PostButton onClick={searchPostHander}> 검색 </PostButton>
        </LowWrapper>
        <TextInput
          type="text"
          placeholder={`ADDRESS...`}
          readOnly={true}
          {...newAddress}
          width={`300px`}
        />
        <Wrapper dr={`row`}>
          <CommonBtn onClick={() => registUserHandler()}> 회원가입 </CommonBtn>
          <CommonBtn onClick={() => moveLinkHandler("")}>취소</CommonBtn>
        </Wrapper>
      </Fade>
    </Wrapper>
  );
};

export default MM04Presenter;

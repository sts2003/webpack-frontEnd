import React from "react";
import {
  Wrapper,
  TextInput,
  CommonBtn,
} from "../../components/CommonComponents";
import styled from "styled-components";
import Typist from "react-typist";
import Fade from "react-reveal/Fade";

const LowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin: 0px 0px 40px 0px;
`;

const MM05Presenter = ({
  inputEmail,
  loginClickHandler,
  tab,
  assignment,
  assignmentCheckHandler,
  moveLinkHandler,
}) => {
  return (
    <Wrapper>
      <Typist cursor={{ show: false }}>
        <Title>로그인</Title>
      </Typist>

      {tab === 0 && (
        <Fade bottom>
          <LowWrapper>
            <TextInput placeholder={`email...`} {...inputEmail} />
            <CommonBtn onClick={() => loginClickHandler()}>Log In</CommonBtn>
          </LowWrapper>
        </Fade>
      )}

      {tab === 1 && (
        <Fade bottom>
          <LowWrapper>
            <TextInput placeholder={`SecretCode...`} {...assignment} />
            <CommonBtn onClick={() => assignmentCheckHandler()}>
              인증하기
            </CommonBtn>
          </LowWrapper>
        </Fade>
      )}

      <Wrapper dr={`row`} mgTop={`50px`}>
        <Fade bottom>
          <CommonBtn onClick={() => moveLinkHandler(`regist`)}>
            회원가입
          </CommonBtn>
          <CommonBtn onClick={() => moveLinkHandler(``)}>뒤로가기</CommonBtn>
        </Fade>
      </Wrapper>
    </Wrapper>
  );
};

export default MM05Presenter;

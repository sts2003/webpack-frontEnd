import React from "react";
import {
  Wrapper,
  TextInput,
  ImageBox,
  CommonBtn,
} from "../../../components/CommonComponents";

const MM00Presenter = ({ photoDatum, moveLinkHandler }) => {
  return (
    <Wrapper>
      <Wrapper dr={`row`}>
        <TextInput type="text"></TextInput>
        <CommonBtn onClick={() => moveLinkHandler("create")}>
          사진 추가하기
        </CommonBtn>
      </Wrapper>
      <Wrapper dr={`row`} width={`auto`}>
        {photoDatum ? (
          photoDatum.length === 0 ? (
            <Wrapper>조회된 사진이 없습니다.</Wrapper>
          ) : (
            photoDatum.map((data, idx) => {
              return (
                <Wrapper key={idx}>
                  <ImageBox
                    width={`500px`}
                    height={`225px`}
                    bgImg={data.imagePath}
                    onClick={() => moveLinkHandler(`detail/${data._id}`)}
                  />
                  제목 : {data.name}
                </Wrapper>
              );
            })
          )
        ) : (
          <Wrapper>조회중입니다 조금만 기다려주세요</Wrapper>
        )}
      </Wrapper>
    </Wrapper>
  );
};

export default MM00Presenter;

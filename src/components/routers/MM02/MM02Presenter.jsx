import React from "react";
import { Wrapper, Image, CommonBtn } from "../../CommonComponents";

const MM02Presenter = ({
  currentData,
  moveLinkHandler,
  deletePhotoHandler,
}) => {
  return (
    <Wrapper>
      <Wrapper id={`photo_description-js`}>
        {currentData && currentData.name}
      </Wrapper>
      <Wrapper>
        <Image src={currentData && currentData.imagePath} />
      </Wrapper>
      <Wrapper>{currentData && currentData.description}</Wrapper>

      <Wrapper dr={`row`}>
        <CommonBtn onClick={() => moveLinkHandler(``)}>이전</CommonBtn>
        <CommonBtn onClick={() => moveLinkHandler(`update/${currentData._id}`)}>
          수정
        </CommonBtn>
        <CommonBtn onClick={deletePhotoHandler}>삭제</CommonBtn>
      </Wrapper>
    </Wrapper>
  );
};

export default MM02Presenter;

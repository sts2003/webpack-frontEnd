import React from "react";
import {
  Wrapper,
  TextInput,
  FileInput,
  FileInputNone,
  FileLabel,
  CommonBtn,
  Image,
} from "../../CommonComponents";

const MM03Presenter = ({
  photoDetailData,
  modifyPhotoHandler,
  fileChangeHandler,
  modifyName,
  modifyImagePath,
  modifyDescription,
  moveLinkHandler,
}) => {
  return (
    <Wrapper>
      <Wrapper>UPDATE PHOTO</Wrapper>
      <TextInput type="text" {...modifyName}></TextInput>
      <TextInput type="text" {...modifyDescription}></TextInput>
      <Wrapper dr={`row`} width={`450px`}>
        <FileInputNone readOnly={true} value={modifyImagePath.value} />
        <FileInput
          type="file"
          id="file-js"
          onChange={fileChangeHandler}
          accept=".png, .jpg, .jpeg"
        />
        <FileLabel htmlFor="file-js">파일 선택</FileLabel>
      </Wrapper>
      <Image width={`500px`} src={modifyImagePath.value} />
      <Wrapper dr={`row`}>
        <CommonBtn onClick={modifyPhotoHandler}>수정하기</CommonBtn>
        <CommonBtn onClick={() => moveLinkHandler(``)}>취소하기</CommonBtn>
      </Wrapper>
    </Wrapper>
  );
};

export default MM03Presenter;

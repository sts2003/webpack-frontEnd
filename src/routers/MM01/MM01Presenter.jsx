import React from "react";
import {
  Wrapper,
  TextInput,
  CommonBtn,
  FileInputNone,
  FileInput,
  FileLabel,
  Image,
} from "../../components/CommonComponents";

const MM01Presenter = ({
  newName,
  newDescription,
  fileChangeHandler,
  createPhotoHandler,
  moveLinkHandler,
  imagePath,
}) => {
  return (
    <Wrapper>
      <Wrapper>CREATE NEWPHOTO</Wrapper>
      <TextInput type="text" placeholder={`NAME...`} {...newName}></TextInput>
      <TextInput
        type="text"
        placeholder={`DESCRIPTION...`}
        {...newDescription}
      ></TextInput>
      <Wrapper dr={`row`} width={`450px`}>
        <FileInputNone readOnly={true} value={imagePath} />
        <FileInput
          type="file"
          id="file-js"
          onChange={fileChangeHandler}
          accept=".png, .jpg, .jpeg"
        />
        <FileLabel htmlFor="file-js">파일 선택</FileLabel>
      </Wrapper>
      <Image width={`500px`} src={imagePath} />
      <Wrapper dr={`row`}>
        <CommonBtn onClick={createPhotoHandler}>생성하기</CommonBtn>
        <CommonBtn onClick={moveLinkHandler}>취소하기</CommonBtn>
      </Wrapper>
    </Wrapper>
  );
};

export default MM01Presenter;

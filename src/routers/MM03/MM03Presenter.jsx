import React from "react";
import {
  Wrapper,
  TextInput,
  FileInput,
  FileInputNone,
  FileLabel,
  CommonBtn,
  Image,
} from "../../components/CommonComponents";

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

      <Wrapper width={`auto`}>
        <TextInput width={`500px`} type="text" {...modifyName}></TextInput>
        <TextInput
          width={`500px`}
          type="text"
          {...modifyDescription}
        ></TextInput>
      </Wrapper>

      <Wrapper dr={`row`} width={`auto`}>
        <FileInputNone
          width={`350px`}
          readOnly={true}
          value={modifyImagePath.value}
        />
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

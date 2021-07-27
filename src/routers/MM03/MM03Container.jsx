import React, { useState } from "react";
import { useMutation, useQuery } from "react-apollo-hooks";
import useInput from "../../hooks/useInput";
import MM03Presenter from "./MM03Presenter";
import { GET_PHOTO_DETAIL } from "../MM02/MM02Queries";
import { UPDATE_PHOTO } from "./MM03Queries";
import storageRef from "../../firebase";

const MM03Container = ({ history, match }) => {
  ///////////////////// - VARIABLE - ////////////////////////
  const photoId = match.params.id;
  const modifyName = useInput(``);
  const modifyImagePath = useInput(``);
  const modifyDescription = useInput(``);

  const [dataFlag, setDataFlag] = useState(false);
  ///////////////////// - USE STATE - ////////////////////////

  ///////////////////// - USE REF - ////////////////////////

  ///////////////////// - USE CONTEXT - ////////////////////////

  ///////////////////// - USE QUERY - ////////////////////////

  const {
    data: photoDetailData,
    loading: photoDetailLoading,
    refetch: photoRefetch,
  } = useQuery(GET_PHOTO_DETAIL, {
    variables: {
      id: photoId,
    },
  });

  if (!photoDetailLoading) {
    if (dataFlag) {
      modifyName.setValue(
        photoDetailData && photoDetailData.getPhotoDetail.name
      );
      modifyImagePath.setValue(
        photoDetailData && photoDetailData.getPhotoDetail.ImagePath
      );
      modifyDescription.setValue(
        photoDetailData && photoDetailData.getPhotoDetail.Description
      );
      setDataFlag(false);
    }
  }

  const fileChangeHandler = async (e) => {
    console.log(e.target.files[0]);
    const originFile = e.target.files[0];
    const originFileName = e.target.files[0].name;

    console.log(originFile);
    console.log(originFileName);
    // event는 변하기 때문에 어딘가에 저장을 해줘야한다. -> 밑에서 사용해야하기 때문에 이벤트가 바뀌기 전에 따로 저장해준다
    const D = new Date();

    const year = D.getFullYear() + "";
    const month = D.getMonth() + 1 + "";
    const date = D.getDate() + "";
    //겟 데이트는 현재 날자
    // 겟 데이는 현재 요일
    const hour = D.getHours() + "";
    const min = D.getMinutes() + "";
    const sec = D.getSeconds() + "";

    const suffix = year + month + date + hour + min + sec;

    const uploadFileName = originFileName + suffix;
    // 이것이 들어가는 데이터 이름이다. 중복이 되지 않기 때문(suffix를 달아줬기 때문에)

    try {
      const storage = storageRef.child(
        `WebPack/uploads/photos/${uploadFileName}`
      );
      await storage.put(originFile);
      const url = await storage.getDownloadURL();

      modifyImagePath.setValue(url);
    } catch (e) {}
    // catch를 잡을 때 콘솔로그를 찍으면 사용자에게 에러가 보이기 때문에 사용 X
  };

  ///////////////////// - USE MUTATION - ////////////////////////
  const [updatePhotoMutation] = useMutation(UPDATE_PHOTO);

  const modifyPhotoHandler = async () => {
    const { data } = await updatePhotoMutation({
      variables: {
        id: photoId,
        name: modifyName.value,
        imagePath: modifyImagePath.value,
        description: modifyDescription.value,
      },
    });

    if (data.updatePhoto) {
      alert("사진 수정을 성공했습니다");
      history.push("/");
    } else {
      alert("사진 수정에 실패했습니다.");
    }
  };

  const moveLinkHandler = (link) => {
    history.push(`/${link}`);
  };
  ///////////////////// - USE EFFECT - ////////////////////////
  return (
    <MM03Presenter
      photoDetailData={photoDetailData && photoDetailData.getPhotoDetail}
      modifyPhotoHandler={modifyPhotoHandler}
      fileChangeHandler={fileChangeHandler}
      modifyName={modifyName}
      modifyImagePath={modifyImagePath}
      modifyDescription={modifyDescription}
      moveLinkHandler={moveLinkHandler}
    />
  );
};

export default MM03Container;

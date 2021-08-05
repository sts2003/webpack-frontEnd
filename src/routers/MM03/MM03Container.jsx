import React, { useState } from "react";
import { useMutation, useQuery } from "react-apollo-hooks";
import useInput from "../../hooks/useInput";
import MM03Presenter from "./MM03Presenter";
import { GET_PHOTO_DETAIL } from "../MM02/MM02Queries";
import { UPDATE_PHOTO } from "./MM03Queries";
import storageRef from "../../firebase";
import { useEffect } from "react";

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

    const D = new Date();

    const year = D.getFullYear() + "";
    const month = D.getMonth() + 1 + "";
    const date = D.getDate() + "";
    const hour = D.getHours() + "";
    const min = D.getMinutes() + "";
    const sec = D.getSeconds() + "";

    const suffix = year + month + date + hour + min + sec;

    const uploadFileName = originFileName + suffix;

    try {
      const storage = storageRef.child(
        `WebPack/uploads/photos/${uploadFileName}`
      );
      await storage.put(originFile);
      const url = await storage.getDownloadURL();

      modifyImagePath.setValue(url);
    } catch (e) {}
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
  useEffect(() => {
    photoRefetch();
  }, []);

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

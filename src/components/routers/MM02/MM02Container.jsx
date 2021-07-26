import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import MM02Presenter from "./MM02Presenter";
import { GET_PHOTO_DETAIL, DELETE_PHOTO } from "./MM02Queries";

const MM02Container = ({ history, match }) => {
  ///////////////////// - VARIABLE - ////////////////////////

  ///////////////////// - USE STATE - ////////////////////////
  const [currentData, setCurrentData] = useState(``);

  ///////////////////// - USE REF - ////////////////////////

  ///////////////////// - USE CONTEXT - ////////////////////////

  ///////////////////// - USE QUERY - ////////////////////////

  const {
    data: photoDetailData,
    loading: photoDetailLoading,
    refetch: photoDetailRefetch,
  } = useQuery(GET_PHOTO_DETAIL, {
    variables: {
      id: match.params.id,
    },
  });

  ///////////////////// - USE MUTATION - ////////////////////////
  const [deletePhotoMutation] = useMutation(DELETE_PHOTO);
  ///////////////////// - USE EFFECT - ////////////////////////
  const moveLinkHandler = (link) => {
    history.push(`/${link}`);
  };

  const deletePhotoHandler = async () => {
    const { data } = await deletePhotoMutation({
      variables: {
        id: match.params.id,
      },
    });

    if (data.deletePhoto) {
      alert("삭제를 성공했습니다");
      history.push("/");
    } else {
      alert("삭제를 실패하였습니다.");
    }
  };

  useEffect(() => {
    if (photoDetailData && photoDetailData.getPhotoDetail) {
      let tempData = photoDetailData.getPhotoDetail;

      console.log(tempData);
      const desc = document.getElementById("photo_description-js");

      if (desc !== null) {
        desc.innerHTML = tempData.description;
        setCurrentData(tempData);
      }
    }
  }, [photoDetailData]);

  return (
    <MM02Presenter
      currentData={currentData}
      moveLinkHandler={moveLinkHandler}
      deletePhotoHandler={deletePhotoHandler}
    />
  );
};

export default MM02Container;

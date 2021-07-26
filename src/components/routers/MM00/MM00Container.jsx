import React, { useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import MM00Presenter from "./MM00Presenter";
import { GET_ALL_PHOTHOS } from "./MM00Queries";

const MM00Container = ({ history }) => {
  ///////////////////// - VARIABLE - ////////////////////////

  ///////////////////// - USE STATE - ////////////////////////

  ///////////////////// - USE REF - ////////////////////////

  ///////////////////// - USE CONTEXT - ////////////////////////

  ///////////////////// - USE QUERY - ////////////////////////
  const {
    data: photoDatum,
    loading: photoLoading,
    refetch: photoRefetch,
  } = useQuery(GET_ALL_PHOTHOS);
  ///////////////////// - USE MUTATION - ////////////////////////

  ///////////////////// - USE EFFECT - ////////////////////////

  useEffect(() => {
    photoRefetch();
  }, []);

  /////////////////// - USE HANDLER - ////////////////////////

  const moveLinkHandler = (link) => {
    history.push(`/${link}`);
  };
  return (
    <MM00Presenter
      photoDatum={photoDatum && photoDatum.getAllPhotos}
      moveLinkHandler={moveLinkHandler}
    />
  );
};

export default MM00Container;

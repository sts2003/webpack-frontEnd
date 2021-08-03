import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import MM00Presenter from "./MM00Presenter";
import {
  GET_ALL_PHOTHOS,
  GET_PHOTO_TOTALPAGE,
  GET_PHOTO_PAGE,
  GET_PHOTO_TOTALPAGE_ONLY_CNT,
} from "./MM00Queries";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useInput from "../../hooks/useInput";

const MM00Container = ({ history }) => {
  ///////////////////// - VARIABLE - ////////////////////////
  const [pages, setPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [limit, setLimit] = useState(2);
  const [tab, setTab] = useState(0);
  const inputSearch = useInput("");
  const [login, setLogin] = useState(
    sessionStorage.getItem("QW*E*(GSDGVQWVEqQWddQWEQEOk" || "-")
  );
  ///////////////////// - USE STATE - ////////////////////////

  ///////////////////// - USE REF - ////////////////////////

  ///////////////////// - USE CONTEXT - ////////////////////////

  ///////////////////// - USE QUERY - ////////////////////////
  const {
    data: photoDatum,
    loading: photoLoading,
    refetch: photoRefetch,
  } = useQuery(GET_ALL_PHOTHOS, {
    variables: {
      searchValue,
      limit,
      currentPage,
    },
  });

  const { data: photoPageData, refetch: photoPageRefetch } = useQuery(
    GET_PHOTO_PAGE,
    {
      variables: {
        searchValue,
        limit,
      },
    }
  );

  const {
    data: totalPageData,
    loading: totalPageLoading,
    refetch: totalPageRefetch,
  } = useQuery(GET_PHOTO_TOTALPAGE, {
    variables: {
      searchValue,
      limit,
    },
  });

  const {
    data: totalPageOnlyCntData,
    loading: totalPageOnlyCntLoading,
    refetch: totalPageOnlyCntRefetch,
  } = useQuery(GET_PHOTO_TOTALPAGE_ONLY_CNT, {
    variables: {
      searchValue,
      limit,
    },
  });

  ///////////////////// - USE MUTATION - ////////////////////////

  ///////////////////// - USE EFFECT - ////////////////////////
  useEffect(() => {
    if (photoPageData && !pages) {
      const temp = [];

      for (let i = 0; i < photoPageData.getPhotoTotalPage; i++) {
        temp.push(i);
      }
      setPages(temp);
    }
  }, [photoPageData]);

  useEffect(() => {
    photoRefetch();
    photoPageRefetch();
    totalPageRefetch();
    totalPageOnlyCntRefetch();

    setLogin(sessionStorage.getItem("QW*E*(GSDGVQWVEqQWddQWEQEOk" || "-"));
  }, []);

  /////////////////// - USE HANDLER - ////////////////////////
  const logout = () => {
    sessionStorage.removeItem("QW*E*(GSDGVQWVEqQWddQWEQEOk");
    toast.info("성공적으로 처리되었습니다.");
    window.location.reload();
    history.push("/");
  };

  const changeFloorHandler = (floor) => {
    setCurrentFloor(floor);
    setDetailKey(null);
    inputSearch.setValue("");
    setSearchValue("");
  };

  const changeTabHandler = (tab) => {
    setTab(tab);
  };

  const changeSearchValueHandler = () => {
    setPages(null);
    setSearchValue(inputSearch.value);
  };

  const changePageHandler = (page) => {
    setCurrentPage(page);
  };

  const prevAndNextPageChangeMainHandler = (page) => {
    if (page < 0) {
      toast.error("첫번째 페이지 입니다.");
      return;
    }

    if (page > photoPageData.getPhotoTotalPage - 1) {
      toast.error("마지막 페이지 입니다.");
      return;
    }

    setCurrentPage(page);
  };

  const _valueChangeHandler = (event) => {
    const nextState = { ...value };

    nextState[event.target.name] = event.target.value;

    setValue(nextState);
  };

  const moveLinkHandler = (link) => {
    history.push(`/${link}`);
  };

  return (
    <MM00Presenter
      photoDatum={photoDatum && photoDatum.getAllPhotos}
      moveLinkHandler={moveLinkHandler}
      _valueChangeHandler={_valueChangeHandler}
      inputSearchValue={inputSearch}
      changeFloorHandler={changeFloorHandler}
      changeSearchValueHandler={changeSearchValueHandler}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      pages={pages}
      limit={limit}
      login={login}
      logout={logout}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalPage={totalPageData && totalPageData.getPhotoTotalPage}
      totalCnt={
        totalPageOnlyCntData && totalPageOnlyCntData.getPhotoTotalPageOnlyCnt
      }
      changePageHandler={changePageHandler}
      prevAndNextPageChangeMainHandler={prevAndNextPageChangeMainHandler}
    />
  );
};

export default MM00Container;

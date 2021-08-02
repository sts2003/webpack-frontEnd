import React from "react";
import {
  Wrapper,
  TextInput,
  ImageBox,
  CommonBtn,
  SearchWrapper,
  PagenationWrapper,
  Pagenation,
  PagenationBtn,
} from "../../../src/components/CommonComponents";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

const SearchWrapper2 = styled(Wrapper)`
  position: relative;
  color: #fff;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    border: 1px solid rgb(67, 66, 88);
    background: none;
    color: rgb(67, 66, 88);
  }
  & svg {
    position: absolute;
    top: 5px;
    font-size: 18px;
  }
  &:hover svg {
    /* animation: ${SearchWrapper2} 0.5s forwards; */
  }
`;

const SearchInput = styled(TextInput)`
  position: relative;
  border: 1px solid #dcdcdc;
  border-radius: 2px;
  margin-right: 4px;
  &:hover ${SearchWrapper2} {
    opacity: 1;
    box-shadow: 0px 3px 5px solid #eee;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
`;

const MM00Presenter = ({
  _valueChangeHandler,
  photoDatum,
  moveLinkHandler,
  changeFloorHandler,
  inputSearchValue,
  searchValue,
  setSearchValue,
  changeSearchValueHandler,
  limit,
  setCurrentPage,
  totalPage,
  totalCnt,
  pages,
  currentPage,
  changePageHandler,
  prevAndNextPageChangeMainHandler,
}) => {
  return (
    <Wrapper>
      <Wrapper dr={`row`} width={`100%`} margin={`100px 0px 100px 0px`}>
        <SearchWrapper width={`auto`} dr={`row`}>
          <SearchInput
            type="text"
            width={`600px`}
            padding={`0px 5px 0px 5px`}
            placeholder="Search"
            onKeyDown={(e) => e.keyCode === 13 && changeSearchValueHandler()}
            {...inputSearchValue}
          />
          <SearchWrapper2
            width={`30px`}
            height={`30px`}
            bgColor={`rgb(67, 66, 88)`}
            onClick={changeSearchValueHandler}
          >
            <FaSearch />
          </SearchWrapper2>
        </SearchWrapper>
        <CommonBtn onClick={() => moveLinkHandler("create")}>
          사진 추가하기
        </CommonBtn>
      </Wrapper>
      <Wrapper dr={`row`}>
        {photoDatum ? (
          photoDatum.length === 0 ? (
            <Wrapper>조회된 사진이 없습니다.</Wrapper>
          ) : (
            photoDatum.map((data, idx) => {
              return (
                <Wrapper key={idx} width={`auto`}>
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

      <Wrapper margin={`30px 0px`} dr={`row`}>
        {pages && pages.length > 0 && (
          <PagenationWrapper width={`auto`}>
            <PagenationBtn
              onClick={() =>
                photoDatum && prevAndNextPageChangeMainHandler(currentPage - 1)
              }
            >
              <IoIosArrowBack />
            </PagenationBtn>
            {pages.map((data) => {
              return (
                <Pagenation
                  className={data === currentPage ? `active` : ``}
                  key={data}
                  onClick={() => changePageHandler(data)}
                >
                  {data + 1}
                </Pagenation>
              );
            })}
            <PagenationBtn
              onClick={() =>
                photoDatum && prevAndNextPageChangeMainHandler(currentPage + 1)
              }
            >
              <IoIosArrowForward />
            </PagenationBtn>
          </PagenationWrapper>
        )}
      </Wrapper>
    </Wrapper>
  );
};

export default MM00Presenter;

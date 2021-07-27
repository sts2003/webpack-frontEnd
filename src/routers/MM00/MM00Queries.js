import { gql } from "apollo-boost";

export const GET_ALL_PHOTHOS = gql`
  query getAllPhotos($searchValue: String!, $limit: Int!, $currentPage: Int!) {
    getAllPhotos(
      searchValue: $searchValue
      limit: $limit
      currentPage: $currentPage
    ) {
      _id
      name
      imagePath
      description
    }
  }
`;

export const GET_PHOTO_PAGE = gql`
  query getPhotoTotalPage($searchValue: String!, $limit: Int!) {
    getPhotoTotalPage(searchValue: $searchValue, limit: $limit)
  }
`;
export const GET_PHOTO_TOTALPAGE = gql`
  query getPhotoTotalPage($searchValue: String!, $limit: Int!) {
    getPhotoTotalPage(searchValue: $searchValue, limit: $limit)
  }
`;

export const GET_PHOTO_TOTALPAGE_ONLY_CNT = gql`
  query getPhotoTotalPageOnlyCnt($searchValue: String!, $limit: Int!) {
    getPhotoTotalPageOnlyCnt(searchValue: $searchValue, limit: $limit)
  }
`;

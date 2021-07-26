import { gql } from "apollo-boost";

export const GET_PHOTO_DETAIL = gql`
  query getPhotoDetail($id: String!) {
    getPhotoDetail(id: $id) {
      _id
      name
      imagePath
      description
    }
  }
`;

export const DELETE_PHOTO = gql`
  mutation deletePhoto($id: String!) {
    deletePhoto(id: $id)
  }
`;

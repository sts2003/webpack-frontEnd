import { gql } from "apollo-boost";

export const GET_ALL_PHOTHOS = gql`
  query getAllPhotos {
    getAllPhotos {
      _id
      name
      imagePath
      description
    }
  }
`;

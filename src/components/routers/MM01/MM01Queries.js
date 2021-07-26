import { gql } from "apollo-boost";

export const CREATE_NEW_PHOTO = gql`
  mutation createNewPhoto(
    $name: String!
    $imagePath: String!
    $description: String!
  ) {
    createNewPhoto(
      name: $name
      imagePath: $imagePath
      description: $description
    )
  }
`;

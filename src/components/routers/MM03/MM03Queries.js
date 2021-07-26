import { gql } from "apollo-boost";

export const UPDATE_PHOTO = gql`
  mutation updatePhoto(
    $id: String!
    $name: String!
    $imagePath: String!
    $description: String!
  ) {
    updatePhoto(
      id: $id
      name: $name
      imagePath: $imagePath
      description: $description
    )
  }
`;

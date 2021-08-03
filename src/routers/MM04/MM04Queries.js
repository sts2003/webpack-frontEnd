import { gql } from "apollo-boost";

export const REGIST_USER = gql`
  mutation registUser(
    $name: String!
    $email: String!
    $mobile: String!
    $zoneCode: String!
    $address: String!
  ) {
    registUser(
      name: $name
      email: $email
      mobile: $mobile
      zoneCode: $zoneCode
      address: $address
    )
  }
`;

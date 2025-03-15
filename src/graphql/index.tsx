import { gql } from "graphql-request";

export const fetchCharactersGql = gql`
query {
characters{
  results{
    id
    name
    species
    status
    image
  }
}
}
`
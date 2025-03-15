import { graphql } from "@/gql";

export const fetchCharactersGql = graphql(/* GraphQL */ `
 query getCharacters{
  characters {
    results {
      id
      name
      species
      status
      image
      episode {
        id
        name
      }
    }
  }
}
`);
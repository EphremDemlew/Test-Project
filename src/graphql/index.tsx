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
      episode {  # Make sure episode is part of the query
        id
        name
      }
    }
  }
}
`);
import { graphql } from "@/gql";

export const fetchCharactersGql = graphql(/* GraphQL */ `
 query getCharacters($page : Int){
  characters(page: $page) {
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
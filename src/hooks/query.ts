// useRequest.js
import { useQuery } from "react-query";
import { GraphQLClient } from "graphql-request";
import {fetchCharactersGql} from "@/graphql"
const API_URL = process.env.NEXT_GRAPHQL_URL as string;

const graphQLClient = new GraphQLClient(API_URL);

export function useGetCharacters() {
  return useQuery("get-characters", async () => {
    const res = await graphQLClient.request(fetchCharactersGql);
    return res;
  });
}


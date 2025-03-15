import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchCharactersGql } from "@/graphql";
import request from "graphql-request";
import {  GetCharactersQuery,GetCharactersQueryVariables } from "@/gql/graphql";

const API_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL as string;

export const useGetData = (page = 1) => {
  const { data, isLoading, isError } = useQuery<GetCharactersQuery>({
    queryKey: ["characters"],
    queryFn: async (): Promise<GetCharactersQuery> => {
      // Fetch the data using the GraphQL request
      const response = await request<GetCharactersQuery,GetCharactersQueryVariables>(API_URL, fetchCharactersGql,{page});

      return response;
    },
  });

  return { data, isLoading, isError };
};

export const useGetDataInfinite = (page = 1) => {
  console.log("🚀 ~ useGetDataInfinite ~ page:", page)
  const InfiniteFetch = useInfiniteQuery<GetCharactersQuery>(
    {
    queryKey: ["getChar"],
    queryFn: async (): Promise<GetCharactersQuery> => {
      // Fetch the data using the GraphQL request
      const response = await request<GetCharactersQuery,GetCharactersQueryVariables>(API_URL, fetchCharactersGql,{page});
      return response;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getNextPageParam: (lastPage, pages ) => {
      if(page!==lastPage){
        return page++
      }else{
        return undefined
      }
    },
     initialPageParam:1,
  }
);

  return InfiniteFetch;
};



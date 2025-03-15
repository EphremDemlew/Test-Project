import { useQuery } from "@tanstack/react-query";
import { fetchCharactersGql } from "@/graphql";
import request from "graphql-request";
import {  GetCharactersQuery } from "@/gql/graphql";

const API_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL as string;

export const useGetData = () => {
  const { data, isLoading, isError } = useQuery<GetCharactersQuery>({
    queryKey: ["char"],
    queryFn: async (): Promise<GetCharactersQuery> => {
      // Fetch the data using the GraphQL request
      const response = await request<GetCharactersQuery>(API_URL, fetchCharactersGql);

      return response;
    },
  });

  return { data, isLoading, isError };
};

// technically a react custom hook

import axios from "axios";
import { useState } from "react";
import { Api, SearchResponse } from "./service.constants";

const useSearch = () => {
  const [results, setResults] = useState<SearchResponse>();
  async function searchTitle(query: string) {
    try {
      const { data } = await axios.request({
        method: "get",
        baseURL: Api.BASE_URL,
        url: Api.SEARCH,
        params: { query },
      });
      setResults(data);
    } catch (error) {
      console.log(error);
    }
  }
  return { results, searchTitle };
};
export { useSearch };

// technically a react custom hook

import axios from "axios";
import { useState } from "react";
import { Api } from "./service.constants";
import { SearchResponse } from "./service.model";

const useSearch = () => {
  console.log(import.meta.env.VITE_BASE_URL);
  const [results, setResults] = useState<SearchResponse>();
  async function searchTitle(query: string) {
    try {
      const { data } = await axios.request({
        method: "get",
        baseURL: import.meta.env.VITE_BASE_URL || Api.BASE_URL,
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

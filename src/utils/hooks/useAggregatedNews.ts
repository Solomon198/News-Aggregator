import { useQueries } from "@tanstack/react-query";
import { QueryKeys } from "../../const/api";
import NewsAggregator from "../api";
import { filtersDefaultState, NewsSources } from "../../const/utils";
import usePreferences from "./usePreferences";

const useAggregatedNews = (filters: typeof filtersDefaultState) => {
  const { preferences } = usePreferences();

  const { selectedSources } = preferences;

  const sourceFilter = filters.selectedSource.value.trim();
  const hasSourcePreferences = selectedSources.length > 0;

  const newsAPIEnabled = sourceFilter
    ? sourceFilter === NewsSources.NewsAPI
    : hasSourcePreferences
    ? selectedSources.includes(NewsSources.NewsAPI)
    : true;

  const queries = useQueries({
    queries: [
      {
        queryKey: [QueryKeys.NewsAPI, filters, preferences],
        queryFn: () => NewsAggregator.NewsAPI(filters),
        enabled: newsAPIEnabled,
        staleTime: 0,
      },
    ],
  });
  const isLoading = queries.some((query) => query.isLoading);
  const isError = queries.some((query) => query.isError);
  const aggregatedData = queries.flatMap((query) => query.data || []);

  return {
    isLoading,
    isError,
    aggregatedData,
  };
};

export default useAggregatedNews;

import { useQueries } from "@tanstack/react-query";
import { QueryKeys } from "../../const/api";
import NewsAggregator from "../api";
import { filtersDefaultState, NewsSources } from "../../const/utils";
import usePreferences from "./usePreferences";
import { useRef } from "react";
import { INews } from "../../types";

const useAggregatedNews = (filters: typeof filtersDefaultState) => {
  const { preferences } = usePreferences();

  const { selectedSources } = preferences;
  const originalData = useRef([] as INews[]);
  const sortedData = useRef([] as INews[]);

  const sourceFilter = filters.selectedSource.value.trim();
  const hasSourcePreferences = selectedSources.length > 0;

  const newsAPIEnabled = sourceFilter
    ? sourceFilter === NewsSources.NewsAPI
    : hasSourcePreferences
    ? selectedSources.includes(NewsSources.NewsAPI)
    : true;

  const TheGaurdianEnabled = sourceFilter
    ? sourceFilter === NewsSources.TheGuardian
    : hasSourcePreferences
    ? selectedSources.includes(NewsSources.TheGuardian)
    : true;

  const NewYorkTimesEnabled = sourceFilter
    ? sourceFilter === NewsSources.NewYorkTimes
    : hasSourcePreferences
    ? selectedSources.includes(NewsSources.NewYorkTimes)
    : true;

  const queries = useQueries({
    queries: [
      {
        queryKey: [QueryKeys.NewsAPI, filters, preferences],
        queryFn: () => NewsAggregator.NewsAPI(filters),
        enabled: newsAPIEnabled,
      },
      {
        queryKey: [QueryKeys.TheGuardian, filters, preferences],
        queryFn: () => NewsAggregator.TheGuardian(filters),
        enabled: TheGaurdianEnabled,
      },
      {
        queryKey: [QueryKeys.NewYorkTimes, filters, preferences],
        queryFn: () => NewsAggregator.NewYorkTimes(filters),
        enabled: NewYorkTimesEnabled,
      },
    ],
  });

  const isLoading = queries.some((query) => query.isLoading);
  const isError = queries.some((query) => query.isError);
  const data = queries.flatMap((query) => query.data || []);
  let aggregatedData = sortedData.current;

  if (JSON.stringify(originalData.current) !== JSON.stringify(data)) {
    originalData.current = [...data];
    aggregatedData = [...data].sort(() => Math.random() - 0.5);
    sortedData.current = aggregatedData;
  }

  return {
    isLoading,
    isError,
    aggregatedData,
  };
};

export default useAggregatedNews;

import moment from "moment";
import {
  filtersDefaultState,
  NewsSources,
  preferenceStorageKey,
} from "../../../const/utils";
import { INews, IPreferences, INytApiResponse } from "../../../types";
import { getClearbitLogo, getRelativeTime } from "../../helpers/functions";

const applyNewYourTimesFilter = (filters: typeof filtersDefaultState) => {
  const { searchText, selectedDate, selectedCategory } = filters;
  const query = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as Record<string, string | number | any>;

  const preferences = localStorage.getItem(preferenceStorageKey);

  if (filters.searchText.value.trim()) {
    query["q"] = searchText.value;
  }

  if (selectedDate.value) {
    const date = new Date(selectedDate.value);
    const startOfDay = moment(date).startOf("day").format("YYYYMMDD");
    const endOfDay = moment(date).endOf("day").format("YYYYMMDD");
    query["begin_date"] = startOfDay;
    query["end_date"] = endOfDay;
  }

  if (selectedCategory.value) {
    query["fq"] = `news_desk:("${selectedCategory.value}")`;
  } else if (preferences) {
    const $preferences = JSON.parse(preferences) as IPreferences;
    const selectedCategories = $preferences.selectedCategories;
    if (selectedCategories.length) {
      query["fq"] = `news_desk:("${selectedCategories.join(",")}")`;
    }
  }

  return new URLSearchParams(query);
};

export default async function NewYorkTimes(
  filters: typeof filtersDefaultState
): Promise<INews[]> {
  const {
    VITE_NEW_YORK_TIMES_API_KEY: API_KEY,
    VITE_NEW_YORK_TIMES_BASE_URL: BASE_URL,
    VITE_NYT_ASSET_CDN_BASE_URL: CDN_BASE_URL,
  } = import.meta.env;
  const queries = applyNewYourTimesFilter(filters);
  const response = await fetch(
    `${BASE_URL}/svc/search/v2/articlesearch.json?api-key=${API_KEY}&${queries}`
  );
  const data = (await response.json()) as INytApiResponse;
  return data.response.docs.map(
    ({ multimedia, web_url, headline, pub_date }) => ({
      publishedAt: getRelativeTime(pub_date),
      urlToImage: `${CDN_BASE_URL}/${multimedia[0]?.url}`,
      title: headline.main,
      articleUrl: web_url,
      sourceName: NewsSources.NewYorkTimes,
      sourceLogo: getClearbitLogo(web_url),
    })
  );
}

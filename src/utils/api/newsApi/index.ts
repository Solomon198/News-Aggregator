import moment from "moment";
import {
  filtersDefaultState,
  preferenceStorageKey,
} from "../../../const/utils";
import { INews, INewsAPIResponse, IPreferences } from "../../../types";
import { getClearbitLogo, getRelativeTime } from "../../helpers/functions";

const applyNewsAPIFilter = (filters: typeof filtersDefaultState) => {
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
    const startOfDay = moment(date).startOf("day").toISOString();
    const endOfDay = moment(date).endOf("day").toISOString();
    query["from"] = startOfDay;
    query["to"] = endOfDay;
  }

  if (selectedCategory.value) {
    query["category"] = selectedCategory.value;
  } else if (preferences) {
    const $preferences = JSON.parse(preferences) as IPreferences;
    const selectedCategories = $preferences.selectedCategories;
    if (selectedCategories.length) {
      query["category"] = selectedCategories.join(",");
    }
  } else {
    query["category"] = "general";
  }

  return new URLSearchParams(query);
};

export default async function NewsAPI(
  filters: typeof filtersDefaultState
): Promise<INews[]> {
  const { VITE_NEWSAPI_API_KEY: API_KEY, VITE_NEWSAPI_BASE_URL: BASE_URL } =
    import.meta.env;
  const queries = applyNewsAPIFilter(filters);
  const response = await fetch(
    `${BASE_URL}/v2/top-headlines?apiKey=${API_KEY}&${queries}`
  );
  const data = (await response.json()) as INewsAPIResponse;
  return data.articles.map(
    ({ publishedAt, urlToImage, title, url, source }) => ({
      publishedAt: getRelativeTime(publishedAt),
      urlToImage: urlToImage!,
      title,
      articleUrl: url,
      sourceName: source.name,
      sourceLogo: getClearbitLogo(url),
    })
  );
}

import moment from "moment";
import {
  filtersDefaultState,
  NewsSources,
  preferenceStorageKey,
} from "../../../const/utils";
import { INews, IPreferences, IGuardianApiResponse } from "../../../types";
import { getClearbitLogo, getRelativeTime } from "../../helpers/functions";

const applyTheGuardianFilter = (filters: typeof filtersDefaultState) => {
  const { searchText, selectedDate, selectedCategory } = filters;
  const query = {
    "show-fields": "thumbnail",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as Record<string, string | number | any>;

  const preferences = localStorage.getItem(preferenceStorageKey);

  if (filters.searchText.value.trim()) {
    query["q"] = searchText.value;
  }

  if (selectedDate.value) {
    const date = new Date(selectedDate.value);
    const startOfDay = moment(date).startOf("day").format("YYYY-MM-DD");
    const endOfDay = moment(date).endOf("day").format("YYYY-MM-DD");
    query["from-date"] = startOfDay;
    query["to-date"] = endOfDay;
  }

  if (selectedCategory.value) {
    query["section"] = selectedCategory.value;
  } else if (preferences) {
    const $preferences = JSON.parse(preferences) as IPreferences;
    const selectedCategories = $preferences.selectedCategories;
    if (selectedCategories.length) {
      query["section"] = selectedCategories.join(",");
    }
  }

  return new URLSearchParams(query);
};

export default async function TheGuardian(
  filters: typeof filtersDefaultState
): Promise<INews[]> {
  const {
    VITE_THE_GUARDIAN_API_KEY: API_KEY,
    VITE_THE_GUARDIAN_BASE_URL: BASE_URL,
  } = import.meta.env;
  const queries = applyTheGuardianFilter(filters);
  const response = await fetch(
    `${BASE_URL}/search?api-key=${API_KEY}&${queries}`
  );
  const data = (await response.json()) as IGuardianApiResponse;
  return data.response.results.map(
    ({ webTitle, webPublicationDate, fields, webUrl }) => ({
      publishedAt: getRelativeTime(webPublicationDate),
      urlToImage: fields?.thumbnail as string,
      title: webTitle,
      articleUrl: webUrl,
      sourceName: NewsSources.TheGuardian,
      sourceLogo: getClearbitLogo(webUrl),
    })
  );
}

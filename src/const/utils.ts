export const supportedCategories = [
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
  "Football",
  "Politics",
];

export const preferenceStorageKey = "preferences";

const defaultFilter = {
  label: "",
  value: "",
};

const getDefaultFilterStructure = () => {
  return Object.assign(defaultFilter) as typeof defaultFilter;
};
export const filtersDefaultState = {
  searchText: getDefaultFilterStructure(),
  selectedDate: getDefaultFilterStructure(),
  selectedSource: getDefaultFilterStructure(),
  selectedCategory: getDefaultFilterStructure(),
};

export const defaultPref = {
  authors: [] as string[],
  selectedCategories: [] as string[],
  selectedSources: [] as string[],
};
export const NewsSources = {
  NewsAPI: "News API",
  NewYorkTimes: "New York Times",
  TheGuardian: "The Guardian",
};
export const newsSources = [
  NewsSources.NewsAPI,
  NewsSources.NewYorkTimes,
  NewsSources.TheGuardian,
];

export const newsSourcesMenu = newsSources.map((source) => ({
  name: source,
  value: source,
}));

export const supportedCategoriesMenu = supportedCategories.map((category) => ({
  name: category,
  value: category.toLowerCase(),
}));

export const supportedCategories = [
  "Business",
  "Entertainment",
  "Football",
  "World",
  "Politics",
  "Business",
  "Technology",
  "Sports",
  "Health",
  "Science",
  "Environment",
  "Education",
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

export const newsSourcesMenu = Object.values(NewsSources).map((source) => ({
  name: source,
  value: source,
}));

export const supportedCategoriesMenu = supportedCategories.map((category) => ({
  name: category,
  value: category.toLowerCase(),
}));

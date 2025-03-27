export const supportedCategories = [
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

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

export const newsSources = ["BBC", "New York Times", "The Guardian"];

export const newsSourcesMenu = newsSources.map((source) => ({
  name: source,
  value: source.toLowerCase().split(" ").join("-"),
}));

export const supportedCategoriesMenu = supportedCategories.map((category) => ({
  name: category,
  value: category.toLowerCase(),
}));

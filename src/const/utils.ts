export const supportedCategories = [
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

export const filtersDefaultState = {
  searchText: "",
  selectedDate: "",
  selectedSource: "",
  selectedCategory: "",
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

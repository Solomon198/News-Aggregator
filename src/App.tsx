import { MainHeader, Filters, Chips } from "./components";
import { StyledMainBody } from "./global.styled.components";
import { newsSourcesMenu, supportedCategoriesMenu } from "./const/utils";
import useFilters from "./utils/hooks/useFilters";

export default function App() {
  const {
    filters,
    filtersLabel,
    handleSelectedCategory,
    handleSelectedDate,
    handleSelectedSource,
    handleSetSearchText,
    handleRemoveFilter,
  } = useFilters();

  return (
    <>
      <MainHeader
        logoUrl="/images/logo.jpeg"
        rightButtonText="Personalize"
        searchPlaceHolder="Search news ..."
        searchValue={filters.searchText}
        onSearch={handleSetSearchText}
      />

      <StyledMainBody>
        <Filters
          categorySelected={filters.selectedCategory}
          onCategorySelected={handleSelectedCategory}
          categoryMenuItems={supportedCategoriesMenu}
          selectedSource={filters.selectedSource}
          onDateSelected={handleSelectedDate}
          sourceMenuItems={newsSourcesMenu}
          onSourceSelected={handleSelectedSource}
        />

        <Chips menuItems={filtersLabel} onSelected={handleRemoveFilter} />
      </StyledMainBody>
    </>
  );
}

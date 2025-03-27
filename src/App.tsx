import { MainHeader, Filters, Chips, PreferenceDrawer } from "./components";
import { StyledMainBody } from "./global.styled.components";
import { newsSourcesMenu, supportedCategoriesMenu } from "./const/utils";
import useFilters from "./utils/hooks/useFilters";
import { useState } from "react";

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

  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <MainHeader
        logoUrl="/images/logo.jpeg"
        rightButtonText="Customize"
        searchPlaceHolder="Search news ..."
        searchValue={filters.searchText.value}
        onSearch={handleSetSearchText}
        onClick={handleToggle}
      />

      <StyledMainBody>
        <Filters
          categorySelected={filters.selectedCategory.value}
          onCategorySelected={handleSelectedCategory}
          categoryMenuItems={supportedCategoriesMenu}
          selectedSource={filters.selectedSource.value}
          onDateSelected={handleSelectedDate}
          sourceMenuItems={newsSourcesMenu}
          onSourceSelected={handleSelectedSource}
        />

        <Chips menuItems={filtersLabel} onSelected={handleRemoveFilter} />
        <PreferenceDrawer open={open} onToggle={handleToggle} />
      </StyledMainBody>
    </>
  );
}

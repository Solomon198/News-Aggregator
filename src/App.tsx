import {
  MainHeader,
  Filters,
  Chips,
  PreferenceDrawer,
  Loader,
} from "./components";
import { StyledMainBody } from "./global.styled.components";
import { newsSourcesMenu, supportedCategoriesMenu } from "./const/utils";
import useFilters from "./utils/hooks/useFilters";
import { useState } from "react";
import NewsFeeds from "./components/Feeds";
import useAggregatedNews from "./utils/hooks/useAggregatedNews";

export default function App() {
  const {
    filters,
    searchText,
    filtersLabel,
    handleSelectedCategory,
    handleSelectedDate,
    handleSelectedSource,
    handleSetSearchText,
    handleRemoveFilter,
  } = useFilters();

  const { aggregatedData, isLoading } = useAggregatedNews(filters);

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
        searchValue={searchText}
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

        {isLoading && <Loader />}

        <PreferenceDrawer open={open} onToggle={handleToggle} />

        <NewsFeeds news={aggregatedData} />
      </StyledMainBody>
    </>
  );
}

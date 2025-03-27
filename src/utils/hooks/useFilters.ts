import { useReducer, useRef } from "react";
import filterReducer from "../reducers/filtersReducer";
import {
  filtersDefaultState,
  newsSourcesMenu,
  supportedCategoriesMenu,
} from "../../const/utils";
import dayjs from "dayjs";
import moment from "moment";

const useFilters = () => {
  const [filters, dispatch] = useReducer(filterReducer, filtersDefaultState);
  const filterValues = useRef({
    ...filtersDefaultState,
  });

  const filtersLabel = Object.values(filters).filter((filter) => filter.trim());

  const handleSelectedCategory = (value: string) => {
    const category = supportedCategoriesMenu.find(
      (category) => category.value === value
    );
    filterValues.current["selectedCategory"] = value;
    dispatch({
      type: "SET_FILTER_VALUE",
      field: "selectedCategory",
      value: category!.name,
    });
  };
  const handleSetSearchText = (value: string) => {
    filterValues.current["searchText"] = value;
    dispatch({ type: "SET_FILTER_VALUE", field: "searchText", value });
  };
  const handleSelectedDate = (value: dayjs.Dayjs) => {
    filterValues.current["selectedDate"] = value.toISOString();
    dispatch({
      type: "SET_FILTER_VALUE",
      field: "selectedDate",
      value: moment(value.toDate()).fromNow(),
    });
  };
  const handleSelectedSource = (value: string) => {
    const source = newsSourcesMenu.find((source) => source.value === value);
    dispatch({
      type: "SET_FILTER_VALUE",
      field: "selectedSource",
      value: source!.name,
    });
  };

  const handleRemoveFilter = (label: string) => {
    const filtersKeys = Object.keys(filters) as (keyof typeof filters)[];
    filtersKeys.forEach((key: keyof typeof filters) => {
      if (filters[key] === label) {
        dispatch({ type: "SET_FILTER_VALUE", field: key, value: "" });
      }
    });
  };
  return {
    filtersLabel,
    filters,
    handleRemoveFilter,
    handleSelectedCategory,
    handleSetSearchText,
    handleSelectedSource,
    handleSelectedDate,
  };
};

export default useFilters;

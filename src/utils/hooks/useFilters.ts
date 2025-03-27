import { useReducer } from "react";
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
  const filtersLabel = Object.values(filters)
    .filter((filter) => filter.value)
    .map((filter) => filter.label);

  const handleSelectedCategory = (value: string) => {
    const category = supportedCategoriesMenu.find(
      (category) => category.value === value
    );
    dispatch({
      type: "SET_FILTER_VALUE",
      field: "selectedCategory",
      value: value,
      label: category!.name,
    });
  };

  const handleSetSearchText = (value: string) => {
    dispatch({
      type: "SET_FILTER_VALUE",
      field: "searchText",
      value: value,
      label: value,
    });
  };

  const handleSelectedDate = (value: dayjs.Dayjs) => {
    dispatch({
      type: "SET_FILTER_VALUE",
      field: "selectedDate",
      label: moment(value.toDate()).fromNow(),
      value: value.toISOString(),
    });
  };

  const handleSelectedSource = (value: string) => {
    const source = newsSourcesMenu.find((source) => source.value === value);
    dispatch({
      type: "SET_FILTER_VALUE",
      field: "selectedSource",
      label: source!.name,
      value: value,
    });
  };

  const handleRemoveFilter = (label: string) => {
    const filtersKeys = Object.keys(filters) as (keyof typeof filters)[];
    filtersKeys.forEach((key: keyof typeof filters) => {
      if (filters[key].label === label) {
        dispatch({
          type: "SET_FILTER_VALUE",
          field: key,
          value: "",
          label: "",
        });
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

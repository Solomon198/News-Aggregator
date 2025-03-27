import { Box, IconButton } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { StyledFlexBoxCenter } from "../../global.styled.components";
import { StyledFilterContainer } from "./styled.components";
import CategoryFilter from "./CategoryFilter";
import { IFilterProps } from "../../types";
import CustomDatePickerFilter from "./DatePickerFilter";
import SourceFilter from "./SourceFilter";

const Filters = ({
  categoryMenuItems,
  categorySelected,
  selectedSource,
  sourceMenuItems,
  onSourceSelected,
  onDateSelected,
  onCategorySelected,
}: IFilterProps) => {
  return (
    <StyledFilterContainer>
      <CategoryFilter
        selected={categorySelected}
        menuItems={categoryMenuItems}
        onSelected={onCategorySelected}
      />

      <StyledFlexBoxCenter>
        <Box>
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Box>

        <CustomDatePickerFilter onDateSelected={onDateSelected} />

        <SourceFilter
          menuItems={sourceMenuItems}
          selected={selectedSource}
          onSelected={onSourceSelected}
        />
      </StyledFlexBoxCenter>
    </StyledFilterContainer>
  );
};

export default Filters;

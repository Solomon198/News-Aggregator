import { Box, styled } from "@mui/material";
import { StyledFlexBoxCenter } from "../../global.styled.components";

export const StyledFilterContainer = styled(StyledFlexBoxCenter)(() => ({
  justifyContent: "space-between",
}));

export const StyledCategoryContainer = styled(Box)(() => ({
  overflow: "hidden",
  textWrap: "nowrap",
  whiteSpace: "nowrap",
  display: "inline-block",
}));

export const StyledCustomDatePicker = styled(StyledFlexBoxCenter)(() => ({
  border: "solid 1px lightgray",
  padding: "3px 4px",
  margin: "0px 5px",
  borderRadius: 10,
}));

export const StyledSourceContainer = styled(StyledFlexBoxCenter)(() => ({
  m: 1,
  margin: "0px 5px",
  border: "solid 1px lightgray",
  padding: "3px 4px",
  borderRadius: 10,
}));

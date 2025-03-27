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

export const StyledCustomDatePicker = styled(StyledFlexBoxCenter)``;

export const StyledSourceContainer = styled(StyledFlexBoxCenter)(() => ({
  m: 1,
  border: "solid 1px lightgray",
  padding: "3px 4px",
  borderRadius: 10,
}));

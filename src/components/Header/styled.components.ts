import { Container, Paper, styled } from "@mui/material";

export const StyledHeader = styled(Container)(() => ({
  padding: "2px 4px",
  display: "flex",
  flex: 1,
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  left: 0,
  right: 0,
}));

export const StyledSearchBar = styled(Paper)(() => ({
  display: "flex",
  alignItems: "center",
  borderRadius: 20,
  width: "40%",
}));

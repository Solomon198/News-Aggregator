import { Container, styled } from "@mui/material";

export const StyledHeader = styled(Container)(() => ({
  padding: "2px 4px",
  display: "flex",
  flex: 1,
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  left: 0,
  right: 0,
  top: 0,
  background: "#fff",
}));

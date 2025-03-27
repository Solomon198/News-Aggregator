import { Box, Container, styled } from "@mui/material";

export const StyledMainBody = styled(Container)(() => ({
  marginTop: 80,
}));

export const StyledFlexBoxCenter = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
}));

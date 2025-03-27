import { InputLabel, MenuItem, Select } from "@mui/material";
import { ISelectComponent } from "../../../types";
import { StyledSourceContainer } from "../styled.components";

const SourceFilter = ({
  selected,
  onSelected,
  menuItems,
}: ISelectComponent) => {
  return (
    <StyledSourceContainer>
      <InputLabel sx={{ marginRight: 3, fontSize: 14 }}>Source</InputLabel>
      <Select
        value={selected}
        disableUnderline
        variant="standard"
        onChange={(e) => {
          onSelected?.(e.target.value);
        }}
      >
        {menuItems.map(({ name, value }) => (
          <MenuItem value={value}>{name}</MenuItem>
        ))}
      </Select>
    </StyledSourceContainer>
  );
};

export default SourceFilter;

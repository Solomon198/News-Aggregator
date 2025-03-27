import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { ISelectComponent } from "../../types";

interface Props extends Pick<ISelectComponent, "menuItems"> {
  label: string;
  selected: string[];
  onSelected: (value: string[]) => void;
}

const SelectComponent = ({ menuItems, selected, label, onSelected }: Props) => {
  return (
    <div>
      <FormControl sx={{ my: 1, width: 300 }}>
        <InputLabel>{label}</InputLabel>
        <Select
          multiple
          value={selected}
          onChange={(e) => onSelected?.(e.target.value as string[])}
          input={<OutlinedInput label="Name" />}
        >
          {menuItems.map(({ name, value }) => (
            <MenuItem key={name} value={value}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectComponent;

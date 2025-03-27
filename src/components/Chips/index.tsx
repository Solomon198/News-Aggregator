import { Chip } from "@mui/material";
import { ISelectComponent } from "../../types";

const Chips = ({
  menuItems,
  onSelected,
}: { menuItems: string[] } & Pick<ISelectComponent, "onSelected">) => {
  return menuItems.map((name) => (
    <Chip
      sx={{ m: 0.5 }}
      key={name}
      label={name}
      onDelete={() => onSelected?.(name)}
    />
  ));
};

export default Chips;

import { Chip } from "@mui/material";
import { ISelectComponent } from "../../types";

const Chips = ({
  menuItems,
  onSelected,
}: { menuItems: string[] } & Pick<ISelectComponent, "onSelected">) => {
  return menuItems.map((name) => (
    <Chip sx={{ mr: 1 }} label={name} onDelete={() => onSelected?.(name)} />
  ));
};

export default Chips;

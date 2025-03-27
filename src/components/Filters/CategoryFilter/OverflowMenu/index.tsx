import { Button, Menu, MenuItem } from "@mui/material";
import useMenu from "../../../../utils/hooks/useMenu";
import { ISelectComponent } from "../../../../types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const OverFlowMenu = ({
  menuItems,
  selected,
  onSelected,
}: ISelectComponent) => {
  const { open, anchorEl, handleClick, handleClose } = useMenu();
  const handleSelected = (value: string) => {
    onSelected?.(value);
    handleClose();
  };
  return (
    <>
      <Button
        color="inherit"
        endIcon={<ExpandMoreIcon />}
        onClick={handleClick}
      >
        ...
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menuItems.map(({ name, value }) => (
          <MenuItem
            sx={{ fontWeight: selected === value ? "bold" : null }}
            key={value}
            onClick={() => handleSelected(value)}
          >
            {name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default OverFlowMenu;

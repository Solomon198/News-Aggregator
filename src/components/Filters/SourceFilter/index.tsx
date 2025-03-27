import { Button, Menu, MenuItem } from "@mui/material";
import { ISelectComponent } from "../../../types";
import { StyledSourceContainer } from "../styled.components";
import useMenu from "../../../utils/hooks/useMenu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SourceFilter = ({
  selected,
  onSelected,
  menuItems,
}: ISelectComponent) => {
  const { open, anchorEl, handleClick, handleClose } = useMenu();
  const handleSelected = (value: string) => {
    onSelected?.(value);
    handleClose();
  };
  return (
    <StyledSourceContainer>
      <Button
        color="inherit"
        endIcon={<ExpandMoreIcon />}
        onClick={handleClick}
        sx={{ textTransform: "capitalize" }}
      >
        Sources
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
    </StyledSourceContainer>
  );
};

export default SourceFilter;

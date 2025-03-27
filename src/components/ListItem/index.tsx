import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

interface Props {
  checked: boolean;
  onClick: () => void;
  label: string;
}

const CustomListItem = ({ checked, label, onClick }: Props) => {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClick} role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};

export default CustomListItem;

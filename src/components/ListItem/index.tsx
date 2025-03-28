import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio,
} from "@mui/material";

interface Props {
  checked: boolean;
  onClick: () => void;
  label: string;
  type?: "radio" | "checkbox";
}

const CustomListItem = ({
  checked,
  label,
  onClick,
  type = "checkbox",
}: Props) => {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClick} role={undefined} dense>
        <ListItemIcon>
          {type === "checkbox" ? (
            <Checkbox
              edge="start"
              checked={checked}
              tabIndex={-1}
              disableRipple
            />
          ) : (
            <Radio checked={checked} />
          )}
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};

export default CustomListItem;

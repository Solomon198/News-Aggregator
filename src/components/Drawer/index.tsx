import {
  Container,
  Divider,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { newsSourcesMenu, supportedCategoriesMenu } from "../../const/utils";
import SelectComponent from "../SelectComponent";
import CustomListItem from "../ListItem";
import usePreferences from "../../utils/hooks/usePreferences";
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
const menus = names.map((r) => ({ name: r, value: r }));

interface Props {
  open: boolean;
  onToggle: () => void;
}
const PreferenceDrawer = ({ onToggle, open }: Props) => {
  const { preferences, handleSetAuthors, handleSetItems } = usePreferences();

  return (
    <Drawer
      sx={{ width: window.screen.width }}
      onClose={onToggle}
      anchor="right"
      open={open}
    >
      <Container sx={{ width: window.screen.width }}>
        <IconButton onClick={onToggle}>
          <CloseIcon />
        </IconButton>

        <Typography variant="h6">Personalization</Typography>
        <Divider sx={{ my: 2 }} />

        <SelectComponent
          selected={preferences?.authors ?? []}
          label="Arthors"
          menuItems={menus}
          onSelected={handleSetAuthors}
        />

        <Typography fontWeight="bold">Categories</Typography>
        {supportedCategoriesMenu.map(({ name, value }) => {
          const checked = preferences.selectedCategories.includes(value);
          return (
            <CustomListItem
              checked={checked}
              key={value}
              onClick={() => handleSetItems(value, "selectedCategories")}
              label={name}
            />
          );
        })}

        <Divider sx={{ my: 1.5 }} />

        <Typography fontWeight="bold">News Sources</Typography>
        {newsSourcesMenu.map(({ name, value }) => {
          const checked = preferences.selectedSources.includes(value);
          return (
            <CustomListItem
              checked={checked}
              key={value}
              onClick={() => handleSetItems(value, "selectedSources")}
              label={name}
            />
          );
        })}
      </Container>
    </Drawer>
  );
};

export default PreferenceDrawer;

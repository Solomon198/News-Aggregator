import {
  Container,
  Divider,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  newsSourcesMenu,
  randomArthors,
  supportedCategoriesMenu,
} from "../../const/utils";
import SelectComponent from "../SelectComponent";
import CustomListItem from "../ListItem";
import usePreferences from "../../utils/hooks/usePreferences";

const menus = randomArthors.map((r) => ({ name: r, value: r }));

interface Props {
  open: boolean;
  onToggle: () => void;
}
const PreferenceDrawer = ({ onToggle, open }: Props) => {
  const {
    preferences,
    preferencesChanged,
    handleSetAuthors,
    handleSetCategory,
    handleSetSelectedSource,
  } = usePreferences();
  const handleToggle = () => {
    if (preferencesChanged) {
      window.location.reload();
    } else {
      onToggle();
    }
  };
  return (
    <Drawer
      sx={{ width: window.screen.width }}
      onClose={handleToggle}
      anchor="right"
      open={open}
    >
      <Container sx={{ width: window.screen.width }}>
        <IconButton onClick={handleToggle}>
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
              type="radio"
              key={value}
              onClick={() => handleSetCategory(value)}
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
              onClick={() => handleSetSelectedSource(value)}
              label={name}
            />
          );
        })}
      </Container>
    </Drawer>
  );
};

export default PreferenceDrawer;

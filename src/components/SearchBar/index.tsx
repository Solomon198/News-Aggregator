import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { StyledSearchBar } from "../styled.components";

interface Props {
  searchPlaceHolder: string;
  searchValue?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
const SearchBar = ({ searchPlaceHolder, searchValue, onChange }: Props) => (
  <StyledSearchBar>
    <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
      <SearchIcon />
    </IconButton>
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder={searchPlaceHolder}
      onChange={onChange}
      value={searchValue}
    />
  </StyledSearchBar>
);

export default SearchBar;

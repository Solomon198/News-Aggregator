import { Avatar, Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { StyledHeader } from "./styled.components";
import SearchBar from "./searchBar";

interface Props {
  logoUrl: string;
  logoAlt?: string;
  rightButtonText: string;
  searchPlaceHolder: string;
  searchValue?: string;
  onSearch?: (text: string) => void;
  onClick?: () => void;
}
export default function MainHeader({
  logoUrl,
  logoAlt,
  searchPlaceHolder,
  searchValue,
  rightButtonText,
  onSearch,
  onClick,
}: Props) {
  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (onSearch) onSearch(e.target.value);
  };
  return (
    <StyledHeader maxWidth={false}>
      <Avatar sx={{ width: 56, height: 56 }} alt={logoAlt} src={logoUrl} />

      <SearchBar
        searchValue={searchValue}
        onChange={handleTextChange}
        searchPlaceHolder={searchPlaceHolder}
      />

      <Box>
        <Button
          sx={{ textTransform: "none", borderRadius: 10 }}
          size="small"
          onClick={onClick}
          variant="outlined"
          color="inherit"
          startIcon={<EditIcon />}
        >
          {rightButtonText}
        </Button>
      </Box>
    </StyledHeader>
  );
}

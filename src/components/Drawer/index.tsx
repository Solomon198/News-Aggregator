import { Container, Drawer } from "@mui/material";

interface Props {
  open: boolean;
  onToggle: () => void;
}
const PreferenceDrawer = ({ onToggle, open }: Props) => {
  return (
    <Drawer sx={{ width: 500 }} onClose={onToggle} anchor="right" open={open}>
      <Container sx={{ width: 500 }}>
        <div>Welcome</div>
      </Container>
    </Drawer>
  );
};

export default PreferenceDrawer;

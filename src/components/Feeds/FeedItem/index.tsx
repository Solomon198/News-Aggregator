import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { INews } from "../../../types";

interface Props extends INews {
  onClick: () => void;
}

const FeedItem = ({
  urlToImage,
  title,
  publishedAt,
  sourceName,
  sourceLogo,
  onClick,
}: Props) => {
  return (
    <Grid component="div" size={{ xs: 12, md: 4 }}>
      <Card onClick={onClick} sx={{ height: "100%" }}>
        <CardMedia
          component="img"
          height="250"
          image={urlToImage!}
          alt={title}
        />
        <CardContent>
          <Typography variant="h6">{title}</Typography>
        </CardContent>
        <CardActions>
          <Avatar sx={{ height: 20, width: 20 }} src={sourceLogo} />
          <Typography variant="caption">{sourceName}</Typography>
          <Typography variant="caption">- {publishedAt}</Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default FeedItem;

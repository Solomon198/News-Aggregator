import Grid from "@mui/material/Grid";
import FeedItem from "./FeedItem";
import { INews } from "../../types";

interface Props {
  news: INews[];
}
const NewsFeeds = ({ news }: Props) => {
  const handleOpenLink = (url: string) => {
    window.open(url, "__blank");
  };
  return (
    <Grid sx={{ mt: 3 }} container spacing={2}>
      {news.map(({ articleUrl, ...article }, index) => (
        <FeedItem
          {...article}
          key={index}
          articleUrl={articleUrl}
          onClick={() => handleOpenLink(articleUrl)}
        />
      ))}
    </Grid>
  );
};

export default NewsFeeds;

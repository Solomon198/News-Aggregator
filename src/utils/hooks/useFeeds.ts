import news from "../../data/news.json";
import { INews } from "../../types";
import { getClearbitLogo, getRelativeTime } from "../helpers/functions";

const useFeeds = () => {
  const feeds: INews[] = news.articles.map(
    ({ title, publishedAt, urlToImage, url, source }) => ({
      title,
      publishedAt: getRelativeTime(publishedAt),
      urlToImage: urlToImage!,
      articleUrl: url,
      sourceLogo: getClearbitLogo(url),
      sourceName: source.name,
    })
  );

  return { feeds };
};

export default useFeeds;

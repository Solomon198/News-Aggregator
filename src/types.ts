import dayjs from "dayjs";

export type ISelectableItem = {
  name: string;
  value: string;
};

export interface ISelectComponent {
  menuItems: ISelectableItem[];
  selected: string;
  onSelected?: (text: string) => void;
}

export interface IFilterProps {
  categoryMenuItems: ISelectableItem[];
  sourceMenuItems: ISelectableItem[];
  categorySelected: string;
  onCategorySelected?: (text: string) => void;
  selectedSource: string;
  onDateSelected?: (value: dayjs.Dayjs) => void;
  onSourceSelected?: (value: string) => void;
}

export interface INews {
  id?: string;
  urlToImage: string;
  title: string;
  articleUrl: string;
  publishedAt: string;
  sourceName: string;
  sourceLogo: string;
}

export interface IPreferences {
  authors: string[];
  selectedCategories: string[];
  selectedSources: string[];
}

export interface INewsAPIResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

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

// The Gaurdian

export interface IGuardianApiResponse {
  response: {
    status: string;
    userTier: string;
    total: number;
    startIndex: number;
    pageSize: number;
    currentPage: number;
    pages: number;
    orderBy: string;
    results: Article[];
  };
}

interface Article {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  fields?: ArticleFields;
  isHosted: boolean;
  pillarId?: string;
  pillarName?: string;
}

interface ArticleFields {
  thumbnail?: string;
}

export interface INytApiResponse {
  status: string;
  copyright: string;
  response: {
    docs: NYTArticle[];
    meta: {
      hits: number;
      offset: number;
      time: number;
    };
  };
}

interface NYTArticle {
  web_url: string;
  snippet: string;
  print_page?: number;
  print_section?: string;
  source: string;
  multimedia: Multimedia[];
  headline: Headline;
  keywords: Keyword[];
  pub_date: string;
  document_type: string;
  news_desk?: string;
  section_name?: string;
  byline?: Byline;
  type_of_material?: string;
  _id: string;
  word_count?: number;
  uri: string;
}

interface Multimedia {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption?: string;
}

interface Headline {
  main: string;
  kicker?: string;
  content_kicker?: string;
  print_headline?: string;
  name?: string;
  seo?: string;
  sub?: string;
}

interface Keyword {
  name: string;
  value: string;
  rank?: number;
  major?: string;
}

interface Byline {
  original?: string;
  person?: {
    firstname?: string;
    middlename?: string;
    lastname?: string;
    qualifier?: string;
    title?: string;
    role?: string;
    organization?: string;
    rank?: number;
  }[];
  organization?: string;
}

import { NewsArticle } from "./NewsArticle";

export type NewsContextType = {
  newsList: NewsArticle[];
  getNews: () => Promise<void>;
};

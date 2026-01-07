import { NewsArticle } from "@/models/NewsArticle";
import { NewsContextType } from "@/models/NewsContextType";
import { createContext, ReactNode, useEffect, useState } from "react";

export const NewsContext = createContext<NewsContextType>({
  newsList: [],
  getNews: async () => {},
});

export const NewsContextProvider = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  const [newsList, setNewsList] = useState<NewsArticle[]>([]);

  const getNews = async () => {
    try {
      console.log("GETTING...");
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=Apple&from=2026-01-07&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`
      );
      const data = await response.json();
      if (data.status === "error") {
        console.log(`Some error occured on getting the news: ${data.message}`);
        return;
      }
      setNewsList(data.articles);
    } catch (error) {
      console.log("Some error occured on getting the news");
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <NewsContext.Provider value={{ newsList, getNews }}>
      {children}
    </NewsContext.Provider>
  );
};

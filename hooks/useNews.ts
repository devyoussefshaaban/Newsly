import { NewsContext } from "@/context/newsContext";
import { useContext } from "react";

const useNews = () => {
  return useContext(NewsContext);
};

export default useNews;

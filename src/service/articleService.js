import axios from "axios";

export const fetchArticles = async (searchQuery, page) => {
  try {
    const url = `${import.meta.env.VITE_NYTIMES_API_BASE_URL}?api-key=${
      import.meta.env.VITE_NYTIMES_API_KEY
    }&q=${searchQuery}&page=${page}`;
    const response = await axios.get(url);
    return {
      newArticles: response.data.response.docs,
      totalHits: response.data.response.meta.hits,
      error: null,
    };
  } catch (error) {
    return { newArticles: [], totalHits: 0, error: error.message };
  }
};

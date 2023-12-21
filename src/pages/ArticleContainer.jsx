import { useState, useEffect } from "react";
import CardArticle from "../components/CardArticle";
import SkeletonLoader from "../components/SkeletonLoader";
import ErrorMessage from "../components/ErrorMessage";
import SearchBar from "../components/SearchBar";
import NotFound from "../components/NotFound";
import { fetchArticles } from "../service/articleService";

const ArticleContainer = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [totalHits, setTotalHits] = useState(0);
  const hasMoreArticles = articles.length < totalHits;

  useEffect(() => {
    const loadArticles = async () => {
      setLoading(true);
      setError(null);

      const { newArticles, totalHits, error } = await fetchArticles(
        searchQuery,
        page
      );

      if (!error) {
        setArticles((prev) =>
          page === 0 ? newArticles : [...prev, ...newArticles]
        );
        setTotalHits(totalHits);
      } else {
        setError(error);
      }

      setLoading(false);
    };

    loadArticles();
  }, [searchQuery, page]);

  const handleSearch = (query) => {
    setLoading(true);
    setSearchQuery(query);
    setPage(0);
  };

  const handleLoadMore = () => {
    setLoading(true);
    setPage((prevPage) => prevPage + 1);
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          {Array.from({ length: 10 }, (_, index) => (
            <SkeletonLoader key={index} />
          ))}
        </div>
      );
    }

    if (error) {
      return <ErrorMessage message={error} />;
    }

    if (articles.length === 0) {
      return <NotFound />;
    }

    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
          {articles.map((article) => (
            <CardArticle key={article._id} article={article} />
          ))}
        </div>
        {hasMoreArticles && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handleLoadMore}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 my-4"
            >
              Load More
            </button>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="container mx-auto px-5">
      <h1 className="font-bold text-4xl my-5 text-center">New York Times</h1>
      <SearchBar onSearch={handleSearch} />
      {renderContent()}
    </div>
  );
};

export default ArticleContainer;

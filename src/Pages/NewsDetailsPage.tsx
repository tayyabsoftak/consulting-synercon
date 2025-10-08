import { Link, useParams } from "react-router-dom";
import { newsFeeds } from "../Utils/data";
import { Share2 } from "lucide-react";
import { slugify } from "../Utils/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import type { NewsItem } from "../types";

function NewsDetail() {
  const [copied, setCopied] = useState<boolean>(false);
  const { title } = useParams<{ title: string }>();

  const newsItem: NewsItem | undefined = newsFeeds.find((news) => slugify(news.title) === title);
  if (!newsItem)
    return <p className="text-center py-20 mx-auto">News not found.</p>;

  const shareLink = (): void => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const relatedNews = newsFeeds
    .filter((news) => news.id !== newsItem.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <section>
      {/* Hero Banner */}
      <motion.div
        className="py-40 lg:h-[80vh] bg-banner flex items-center justify-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-5xl font-semibold">
          Stay updated with the <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            latest news, and stories
          </span>
        </h2>
      </motion.div>

      {/* Main News Detail */}
      <div className="px-6 md:px-0">
        <motion.div
          className="md:w-[800px] w-full mx-auto my-16 overflow-hidden border-2 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={newsItem.image}
            alt={newsItem.title}
            className="w-full object-cover max-h-[400px] rounded-t-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="p-6">
            <div className="flex justify-start gap-3 items-center mb-6">
              <button
                onClick={shareLink}
                className="flex items-center text-blue-500 hover:text-blue-700 transition"
              >
                <Share2 className="mr-1" size={18} /> Share
              </button>
              {copied && (
                <span className="ml-2 text-green-500 font-semibold">
                  Copied!
                </span>
              )}
            </div>
            <h1 className="text-2xl md:text-4xl mb-2">{newsItem.title}</h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {newsItem.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-4xl font-semibold mb-8">
            Related News
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedNews.map((news) => (
              <Link to={`/news/${slugify(news.title)}`} key={news.id}>
                <div className="overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <h3 className="p-3 font-semibold">{news.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default NewsDetail;

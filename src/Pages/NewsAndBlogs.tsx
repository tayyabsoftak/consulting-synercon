import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { newsFeeds } from "../Utils/data";
import { slugify } from "../Utils/utils";

function NewsAndBlogs() {
  // If there's no news data, show coming soon message
  if (!newsFeeds || newsFeeds.length === 0) {
    return (
      <section>
        {/* Header Section */}
        <motion.div
          className="py-40 lg:h-[80vh] bg-banner flex items-center justify-center"
          initial={{ opacity: 0, y: -50 }}
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

        {/* Coming Soon Section */}
        <section className="bg-white py-20 px-6 md:px-20 rounded-lg shadow-lg">
          <motion.div
            className="text-center pb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Coming Soon
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                We're working hard to bring you the latest news and updates.
              </p>
              <motion.div
                className="flex justify-center space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div
                  className="w-3 h-3 bg-secondary rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-primary rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </section>
    );
  }

  // If there is news data, show the actual news content
  const [mainNews, ...otherNews] = newsFeeds;

  return (
    <section>
      {/* Header Section */}
      <motion.div
        className="py-40 lg:h-[80vh] bg-banner flex items-center justify-center"
        initial={{ opacity: 0, y: -50 }}
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

      <section className="bg-white py-20 px-6 md:px-20 rounded-lg shadow-lg">
        {/* Trending News */}
        <motion.h1
          className="text-start text-2xl md:text-4xl font-semibold mb-10 md:ml-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trending News
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Trending Image */}
          <div className="relative w-full md:w-[600px] aspect-[3/2]">
            <motion.img
              src={mainNews.image}
              alt={mainNews.title}
              className="absolute w-full h-full object-cover rounded-lg top-0 left-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Trending Content */}
          <div className="mt-6 md:mt-0 flex-1 max-w-full md:max-w-2xl">
            <Link
              to={`/news/${slugify(mainNews.title)}`}
              key={mainNews.id}
              className="hover:underline"
            >
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2"
                whileHover={{ color: "#0284c7" }}
              >
                {mainNews.title}
              </motion.h2>
            </Link>
            <div className="text-gray-600 text-sm md:text-base leading-relaxed">
              <p className="text-gray-700 mt-2">
                {mainNews.description.length > 300
                  ? mainNews.description.slice(0, 300) + "..."
                  : mainNews.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Latest News */}
        {otherNews.length > 0 && (
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center md:text-left">
              Latest News
            </h3>

            <motion.div
              className="flex flex-col gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {otherNews.map((news) => (
                <motion.div
                  key={news.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full sm:w-56 h-44 object-cover rounded flex-shrink-0"
                  />
                  <div className="flex flex-col gap-2">
                    <Link
                      to={`/news/${slugify(news.title)}`}
                      className="hover:underline"
                    >
                      <span className="text-xl sm:text-2xl font-semibold">
                        {news.title}
                      </span>
                    </Link>
                    <span className="text-blue-400 text-sm sm:text-base">
                      <p className="text-gray-700 mt-2">
                        {news.description.length > 300
                          ? news.description.slice(0, 300) + "..."
                          : news.description}
                      </p>
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </section>
    </section>
  );
}

export default NewsAndBlogs;

import { ArrowRight } from "lucide-react";
import React from "react";
import { newsFeeds } from "../Utils/data";
import { Link } from "react-router-dom";
import { slugify } from "../Utils/utils";

const firstNews = newsFeeds[0];
const NewsFeed: React.FC = () => (
  <div className="flex flex-col lg:flex-row items-center justify-center text-white py-20 px-6 lg:px-20">
    <div>
      <div className="relative border border-aqua rounded-3xl w-[300px] h-[200px] md:w-[600px] md:h-[400px]">
        <img
          src={firstNews.image}
          alt={firstNews.title}
          className="absolute w-full h-full object-cover rounded-lg mb-4 top-3 right-3 md:top-5 md:right-5"
        />
      </div>

      <div className="mt-8 max-w-2xl">
        <Link to={`/news/${slugify(firstNews.title)}`}>
          <h2 className="text-2xl font-bold hover:underline">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {firstNews.title}
            </span>
          </h2>
        </Link>
        <p className="mt-2">
          {firstNews.description.length > 400
            ? firstNews.description.slice(0, 400) + "..."
            : firstNews.description}
        </p>
      </div>
    </div>

    {/* Sidebar Latest News */}
    <div className="md:ml-6 mt-6 md:mt-0">
      <h3 className="text-3xl font-semibold mb-4">Latest News</h3>
      {newsFeeds.slice(1, 5).map((news, index) => {
        return (
          <div
            key={index}
            className="flex items-center mb-4 gap-1 md:gap-4 text-white"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-36 h-28 object-cover rounded mr-4"
            />
            <Link
              to={`/news/${slugify(news.title)}`}
              className="hover:underline flex justify-center gap-2 items-center"
            >
              <span className="">
                {news.title.length > 40
                  ? news.title.slice(0, 40) + "..."
                  : news.title}
              </span>
              <ArrowRight className="hidden md:inline w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        );
      })}
      <Link to="/news" className="flex justify-end mt-10 max-w-6xl mx-auto">
        <div className="mt-4 self-end inline-block p-[2px] rounded-lg bg-gradient-to-r from-primary to-secondary">
          <button className="px-6 py-2 font-medium text-white bg-accent rounded-lg hover:bg-gradient-to-r from-primary to-secondary">
            Explore All
          </button>
        </div>
      </Link>
    </div>
  </div>
);

export default NewsFeed;

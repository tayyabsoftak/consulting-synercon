import { Link } from "react-router-dom";
import {
  footerSocials,
  industrylinks,
  locations,
  newsFeeds,
} from "../Utils/data";
import { slugify } from "../Utils/utils";

const Footer = () => {
  return (
    <footer className="bg-highlight border-t-2 border-secondary text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Socials */}
        <div>
          <Link
            to="/"
            className="bg-white rounded-md inline-flex items-center p-2"
          >
            <img src="/logo.svg" alt="Synercon Logo" className="h-14" />
          </Link>
          <div className="flex space-x-4 mt-6">
            {footerSocials.map((social, i) => (
              <Link
                key={i}
                to={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <img
                  src={social.icon}
                  alt={social.alt}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* INDUSTRY Section */}
        <div>
          <h3 className="font-semibold mb-4 text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {industrylinks.title}
          </h3>
          <ul className="space-y-2">
            {industrylinks.links.map((link, i) => (
              <li key={i}>
                <Link
                  target="blank"
                  to={link.href || ''}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* LATEST NEWS Section */}
        <div>
          <h3 className="font-semibold mb-4 text-xl bg-gradient-to-r  from-primary to-secondary bg-clip-text text-transparent">
            LATEST NEWS
          </h3>
          {newsFeeds && newsFeeds.length > 0 ? (
            <ul className="space-y-2">
              {newsFeeds.slice(0, 5).map((news,i) => (
                <li key={i}>
                  <Link
                    to={`/news/${slugify(news?.title)}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {news.title.length > 35
                      ? news.title.substring(0, 35) + "..."
                      : news.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="space-y-2">
              <li>Coming Soon</li>
            </ul>
          )}
        </div>

        {/* LOCATIONS Section */}
        <div>
          <h3 className="font-semibold mb-4 text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {locations.title}
          </h3>
          <ul className="space-y-2">
            {locations.names.map((loc, i) => (
              <li key={i}>
                <p className="hover:text-white transition-colors duration-200">
                  {loc.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

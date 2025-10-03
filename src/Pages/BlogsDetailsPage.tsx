import { Link, useParams } from "react-router-dom";
import { blogs } from "../Utils/data";
import { Share2 } from "lucide-react";
import { slugify } from "../Utils/utils";
import { motion } from "framer-motion";
import { useState } from "react";

function BlogsDetail() {
  const [copied, setCopied] = useState(false);
  const { title } = useParams();

  const blogItem = blogs.find((blog) => slugify(blog.title) === title);

  const relatedBlogs = blogs
    .filter((blog) => blog.id !== blogItem?.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  if (!blogItem)
    return <p className="text-center py-20 mx-auto">Blog not found.</p>;

  const shareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  };
  setTimeout(() => {
    setCopied(false);
  }, 3000);

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
          <span className="bg-gradient-to-r from-brown to-lightbrown bg-clip-text text-transparent">
            latest news, and stories
          </span>
        </h2>
      </motion.div>

      {/* Blog Detail */}
      <div className="px-6 md:px-0">
        <motion.div
          className="md:w-[800px] w-full mx-auto my-16 overflow-hidden border-2 rounded-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={blogItem.image}
            alt={blogItem.title}
            className="w-full object-cover max-h-[400px] rounded-t-lg"
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
            <h1 className="text-2xl md:text-4xl mb-2">{blogItem.title}</h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {blogItem.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-4xl font-semibold mb-8">
            Related Blogs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedBlogs.map((blog) => (
              <Link to={`/blog/${slugify(blog.title)}`} key={blog.id}>
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <h3 className="p-3 font-semibold">{blog.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default BlogsDetail;

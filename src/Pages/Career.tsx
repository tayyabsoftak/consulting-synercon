import { motion } from "framer-motion";
import { Briefcase, Search, XCircle } from "lucide-react";

const jobs = [];

function Career() {
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
          Invest In Your Career, <br /> Growth With{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Synercon
          </span>
        </h2>
      </motion.div>
      <section className="max-w-7xl mx-auto px-6 py-10">
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-gray-200 p-2 flex flex-col md:flex-row md:divide-x md:divide-gray-200 gap-4 md:gap-0 md:items-center md:justify-between mb-10"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Search */}
          <div className="relative w-full md:w-1/3 px-4">
            <input
              type="text"
              placeholder="Search For Job"
              className="w-full px-4 py-2 pl-10 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <Search className="absolute left-7 top-2.5 text-gray-400 w-5 h-5" />
          </div>

          {/* Category */}
          <div className="w-full md:w-1/4 px-4">
            <select className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400">
              <option selected disabled>Categories</option>
            </select>
          </div>

          {/* Location */}
          <div className="w-full md:w-1/4 px-4">
            <select className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400">
              <option selected disabled>Locations</option>
            </select>
          </div>

          {/* Button */}
          <div className="w-full md:w-auto px-4">
            <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 px-6 rounded-lg font-medium shadow-md hover:opacity-90 transition">
              Find Job
            </button>
          </div>
        </motion.div>
      </section>

      {/* Job Section */}
      <div className="text-center py-10 mx-auto">
        {jobs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <XCircle className="w-14 h-14 text-red-400" />
            <p className="text-gray-700 text-xl font-semibold">
              No job openings right now
            </p>
            <p className="text-gray-500 text-sm">
              Stay tuned for upcoming opportunities
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <Briefcase className="w-14 h-14 text-blue-500" />
            <p className="text-gray-800 text-2xl font-semibold">
              {jobs.length} Job{jobs.length !== 1 ? "s" : ""} Available
            </p>
            <p className="text-gray-500 text-sm">
              Explore exciting career opportunities with us ✨
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Career;

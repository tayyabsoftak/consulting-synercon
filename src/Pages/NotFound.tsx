import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "404 — Page Not Found";
  }, []);

  return (
    <section className="py-48 text-center bg-[#E6F9FF]">
      <div className="max-w-2xl mx-auto px-6">
        {/* Illustration */}
        <div className="mx-auto w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center mb-8">
          <svg
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-full h-full"
          >
            <rect x="8" y="24" width="144" height="112" rx="12" fill="#fff" />
            <path d="M22 40h116" stroke="#D9F6FF" strokeWidth="2" />
            <path
              d="M40 72c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20z"
              fill="#C7F4FF"
            />
            <path
              d="M84 88c0 6-6 12-12 12s-12-6-12-12 6-12 12-12 12 6 12 12z"
              fill="#78EDFF"
            />
            <path
              d="M104 46l18 18M122 46l-18 18"
              stroke="#4DCBEB"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <circle cx="106" cy="116" r="10" fill="#1B9EBF" />
            <path
              d="M100 112l12 8"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Oops — page not found
        </h1>

        {/* Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-[#1B9EBF] to-[#78EDFF] text-white font-medium shadow hover:opacity-95 transition"
            aria-label="Go to homepage"
          >
            Go to homepage
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

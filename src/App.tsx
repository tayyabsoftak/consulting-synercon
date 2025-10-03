import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ui/ScrollToTop";
import Career from "./Pages/Career";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import NewsAndBlogs from "./Pages/NewsAndBlogs";
import NewsDetail from "./Pages/NewsDetailsPage";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="md:-mt-24">
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsAndBlogs />} />
          <Route path="/news/:title" element={<NewsDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Career />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

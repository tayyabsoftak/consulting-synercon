import NewsFeed from "../Components/NewsFeeds";
import OfferingSection from "../Components/OfferingSection";
import { offeringsData } from "../Utils/data";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full">
        <img
          src="/home-hero.png"
          alt="Hero"
          className="w-full vh-9 object-cover"
        />

        {/* Overlay text */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 bg-black/60 text-white">
          <h1 className="max-w-3xl text-5xl font-bold">Consulting</h1>
        </div>
      </div>
      <div className="bg-accent">
        <div className="flex flex-col gap-4 text-white py-20 max-w-5xl mx-auto px-6 md:px-0">
          <h1 className="text-center font-semibold text-4xl">
            Partnering for Impact in{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Emerging Markets
            </span>
          </h1>
          <p className="text-lg text-center">
            Synercon Consulting is a dynamic organization delivering
            comprehensive management consulting services. Our innovative
            solutions drive growth, create jobs, and competitiveness in emerging
            and developing markets. Partnering with governments, NGOs, and
            bilateral and multilateral donors, we foster sustainable development
            and enhance public and private sector performance. We enable our
            clients to achieve their goals and make a meaningful impact. Our
            commitment to excellence is reflected in our innovative approach and
            tailored solutions that exceed client expectations and drive
            exponential results.
          </p>
        </div>
        <OfferingSection offerings={offeringsData} />
        <NewsFeed />
      </div>
    </>
  );
}

export default Home;

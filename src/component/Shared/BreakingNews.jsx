import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="container mx-auto my-4 flex justify-between bg-gray-100 p-2">
      <button className="btn bg-red-300 rounded">Latest</button>
      <Marquee
        speed={60}
        gradient={false}
        pauseOnHover={true}
        className="bg-gray-100 text-black py-2 font-medium"
      >
        Breaking News: Stay tuned for the latest updates!
      </Marquee>
    </div>
  );
};

export default BreakingNews;

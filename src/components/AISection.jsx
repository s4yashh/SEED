import React from "react";

const AISection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 px-16">
      {/* Static Illustration on the Left (removed Spline 3D model) */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <img
          src="/assets/image1.svg"
          alt="AI Illustration"
          className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] object-contain"
        />
      </div>

      {/* AI Text Content slightly shifted right */}
      <div className="w-full md:w-1/2 text-left md:ml-20"> 
        <h2 className="text-4xl md:text-6xl font-bold text-gray-100 leading-tight">
          With The Power of <br />
          <span className="text-blue-400">AI</span> At Your Disposal.
        </h2>
      </div>
    </section>
  );
};

export default AISection;

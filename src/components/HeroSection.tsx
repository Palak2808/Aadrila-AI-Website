import doc1 from "../assets/doc1.png";

import doc2 from "../assets/doc2.png";
import doc3 from "../assets/doc3.png";

const HeroSection = () => {
  return (
    <section className="px-4 lg:px-20">
      {/* Background waves */}

      <div className="mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <p className="text-orange-600 font-bold text-4xl mb-4 decoration-blue-500">
            AI-Powered
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Document Automation
            <br />& Fraud Detection
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl text-lg">
            Enhance security, accuracy, and efficiency with our cutting-edge AI
            solutions for seamless document processing and fraud prevention.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-[#3E6EB4] hover:bg-[#3E6EB4]/90 transition text-white px-8 py-3 rounded-full text-base font-medium">
              Get a Demo
            </button>

            <button className="bg-[#3E6EB4] hover:bg-[#3E6EB4]/90 transition text-white px-8 py-3 rounded-full text-base font-medium">
              Explore Solutions
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center w-full">
          {/* Left Background Card */}
          <img
            src={doc2}
            alt="Graph Document"
            className="w-74 rounded-lg  blur-xs"
          />

          <img
            src={doc1}
            alt="Driving License"
            className="w-96 lg:w-[420px] rounded-xl relative z-20"
          />

          {/* Right Background Card */}
          <img
            src={doc3}
            alt="Table Document"
            className="w-74 rounded-lg blur-xs"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

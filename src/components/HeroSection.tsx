import doc1 from "../assets/doc1.png";
import doc2 from "../assets/doc2.png";
import doc3 from "../assets/doc3.png";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 260,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: easeOut,
    },
  },
};

const HeroSection = () => {
  return (
    <section className="px-4 lg:px-20">
      {/* Background waves */}

      <div className="mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <p className="bg-gradient-to-r from-[#CD6028] to-[#3E6EB4] bg-clip-text text-transparent font-bold text-5xl mb-4">
            AI-Powered
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#141219]">
            Document Automation
            <br />& Fraud Detection
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl text-xl">
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

        <motion.div
          className="flex items-center justify-center w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Background Card */}
          <motion.img
            variants={cardVariants}
            whileHover={{ y: -8 }}
            src={doc2}
            alt="Graph Document"
            className="w-74 rounded-lg  blur-xs"
          />

          <motion.img
            src={doc1}
            alt="Driving License"
            className="w-96 lg:w-[420px] rounded-xl relative z-20"
            variants={cardVariants}
            whileHover={{ y: -8 }}
          />

          {/* Right Background Card */}
          <motion.img
            src={doc3}
            alt="Table Document"
            className="w-74 rounded-lg blur-xs"
            variants={cardVariants}
            whileHover={{ y: -8 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

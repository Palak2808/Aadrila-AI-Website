import doc1 from "../assets/doc1.png";
import doc2 from "../assets/doc2.png";
import doc3 from "../assets/doc3.png";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useState } from "react";
const images = [doc1, doc2, doc3];

const positions = [
  {
    x: -280,
    scale: 0.75,
    filter: "blur(3px)",
    zIndex: 1,
  },
  {
    x: 0,
    scale: 1.1,
    filter: "blur(0px)",
    zIndex: 3,
  },
  {
    x: 280,
    scale: 0.85,
    filter: "blur(3px)",
    zIndex: 1,
  },
];

const cardVariant1: Variants = {
  hidden: { opacity: 0, x: -260 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: easeOut },
  },
};

const HeroSection = () => {
  const [order, setOrder] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder(([a, b, c]) => [c, a, b]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 sm:px-6 lg:px-20 overflow-hidden pt-12 lg:pt-0">
      <motion.div
        className="mx-auto py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        variants={cardVariant1}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <p className="bg-gradient-to-r from-[#CD6028] to-[#3E6EB4] bg-clip-text text-transparent font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            AI-Powered
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#141219]">
            Document Automation
            <br className="hidden sm:block" />& Fraud Detection
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg md:text-xl">
            Enhance security, accuracy, and efficiency with our cutting-edge AI
            solutions for seamless document processing and fraud prevention.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="bg-[#3E6EB4] hover:bg-[#3E6EB4]/90 transition text-white px-8 py-3 rounded-full text-base font-medium">
              Get a Demo
            </button>

            <button className="bg-[#3E6EB4] hover:bg-[#3E6EB4]/90 transition text-white px-8 py-3 rounded-full text-base font-medium">
              Explore Solutions
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center h-[420px]">
          {order.map((imgIndex, positionIndex) => {
            const pos = positions[positionIndex];

            return (
              <motion.img
                key={imgIndex}
                src={images[imgIndex]}
                alt=""
                animate={pos}
                transition={{
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="absolute w-64 sm:w-80 rounded-xl"
                style={{ zIndex: pos.zIndex }}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

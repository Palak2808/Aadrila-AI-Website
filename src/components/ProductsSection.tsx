import dots from "../assets/dots.png";
import ring from "../assets/ring.png";
import ring2 from "../assets/ring2.png";
import docsim from "../assets/product.png";
import docpilot from "../assets/product2.png";
import doxtract from "../assets/product3.png";

import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";

const cardVariant1: Variants = {
  hidden: { opacity: 0, x: -260 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: easeOut },
  },
};

const cardVariant2: Variants = {
  hidden: { opacity: 0, x: 260 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: easeOut },
  },
};

export default function ProductsSection() {
  return (
    <section className="relative bg-white overflow-hidden px-6 lg:px-20 py-12 lg:py-24">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-14px); }
          }
        `}
      </style>

      {/* Background Rings */}
      <img
        src={ring}
        className="hidden md:block absolute right-0 top-150 lg:top-32 w-[500px] lg:w-[600px] opacity-80"
        alt=""
      />
      <img
        src={ring2}
        className="hidden md:block absolute left-0 bottom-250 w-[440px] lg:bottom-170 lg:w-[550px] opacity-80"
        alt=""
      />
      <img
        src={ring}
        className="hidden md:block absolute right-0 bottom-0 lg:bottom-5 w-[500px] lg:w-[600px] opacity-70"
        alt=""
      />

      {/* Floating dots */}
      <img
        src={dots}
        className="hidden md:block absolute top-20 lg:left-24 w-52 opacity-80"
        style={{ animation: "float 3s ease-in-out infinite" }}
        alt=""
      />

      {/* Heading */}
      <div className="text-center mb-12 lg:mb-24">
        <p className="text-lg sm:text-xl lg:text-2xl bg-gradient-to-r from-[#CD6028] to-[#3E6EB4] bg-clip-text text-transparent font-medium tracking-wide">
          features and benefits.
        </p>
        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#141219]">
          Our Products
        </h2>
      </div>

      {/* Products */}
      <div className="mx-auto space-y-24 sm:space-y-32 lg:space-y-40">
        <ProductSection
          tag="DocSim"
          title="AI-Powered Document Similarity Engine"
          features={[
            "Detects near-duplicates and tampered documents.",
            "Identifies fraudulent patterns across repositories.",
            "Multi-language support for global adaptability.",
          ]}
          benefits={[
            "Save 30% time on manual checks.",
            "Reduce document fraud by up to 40%.",
          ]}
          image={docsim}
          cardVariants={cardVariant2}
          textVariants={cardVariant1}
        />

        <ProductSection
          tag="DocPilot"
          title="Streamline Document Workflows with Automation"
          features={[
            "Automated document collection and routing.",
            "Real-time tracking with dashboards.",
            "Seamless API integrations.",
          ]}
          benefits={[
            "Reduce turnaround times by 50%.",
            "Improve operational efficiency.",
          ]}
          image={docpilot}
          reverse
          cardVariants={cardVariant1}
          textVariants={cardVariant2}
        />

        <ProductSection
          tag="Doxtract"
          title="Extract, Validate, and Process Documents with Ease"
          features={[
            "OCR & NLP-based data extraction.",
            "Handles unstructured documents.",
            "Validates fields via external sources.",
          ]}
          benefits={[
            "Process 10,000+ documents in minutes.",
            "Achieve 99% data accuracy.",
          ]}
          image={doxtract}
          cardVariants={cardVariant2}
          textVariants={cardVariant1}
        />
      </div>
    </section>
  );
}

type ProductSectionProps = {
  tag: string;
  title: string;
  features: string[];
  benefits: string[];
  image: string;
  reverse?: boolean;
  cardVariants: Variants;
  textVariants?: Variants;
};

export function ProductSection({
  tag,
  title,
  features,
  benefits,
  image,
  reverse = false,
  cardVariants,
  textVariants,
}: ProductSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-16 items-center">
      {/* Text */}
      <motion.div
        className={reverse ? "order-1 lg:order-2" : ""}
        variants={textVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <span className="inline-block px-4 sm:px-5 py-1 rounded-full bg-gradient-to-r from-orange-500 to-blue-600 text-white text-sm sm:text-base lg:text-lg">
          {tag}
        </span>

        <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900">
          {title}
        </h3>

        <h4 className="mt-8 font-semibold text-gray-700">Features:</h4>
        <ul className="mt-4 space-y-3 text-gray-600 font-light text-sm sm:text-base">
          {features.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>

        <h4 className="mt-6 font-semibold text-gray-700">Benefits:</h4>
        <ul className="mt-4 space-y-3 text-gray-600 font-light text-sm sm:text-base">
          {benefits.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-4">
          <button className="px-6 sm:px-7 py-3 rounded-full text-white transition bg-[#3E6EB4] hover:bg-[#3E6EB4]/90">
            Learn More
          </button>
          <button className="px-6 sm:px-7 py-3 rounded-full bg-[#3E6EB4] hover:bg-[#3E6EB4]/90 text-white transition">
            Schedule a Demo
          </button>
        </div>
      </motion.div>

      {/* Image */}
      <motion.img
        src={image}
        alt={tag}
        className={`rounded-3xl shadow-2xl w-full max-w-[520px] lg:max-w-[600px] h-auto z-10 mx-auto ${
          reverse ? "order-2 lg:order-1" : ""
        }`}
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      />
    </div>
  );
}

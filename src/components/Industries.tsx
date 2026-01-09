import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";
import dots from "../assets/dots.png";
import healthcare from "../assets/healthcare.png";
import lending from "../assets/lending.png";
import insurance from "../assets/insurance.png";
import ring2 from "../assets/ring2.png";
import verticalDots from "../assets/verticalDots.png";

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 260 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: easeOut,
    },
  },
};

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-24 px-6 lg:px-20">
      {/* Background Ring */}
      <img
        src={ring2}
        className="absolute left-0 top-10 w-[320px] sm:w-[420px] lg:w-[550px] opacity-80"
        alt=""
      />

      {/* Dotted patterns */}
      <div className="hidden md:block absolute left-140 lg:left-270 top-32 w-52">
        <img
          src={verticalDots}
          alt=""
          style={{ animation: "float 3s ease-in-out infinite" }}
        />
      </div>

      <div className="hidden md:block absolute lg:left-350 md:bottom-44 lg:bottom-24 w-64">
        <img
          src={dots}
          alt=""
          style={{ animation: "float 3s ease-in-out infinite" }}
        />
      </div>

      <div className="relative mx-auto px-2 sm:px-6">
        <p className="mb-3 text-lg sm:text-xl lg:text-2xl font-medium bg-gradient-to-r from-[#CD6028] to-[#3E6EB4] bg-clip-text text-transparent">
          AI-driven innovation for growth.
        </p>

        <h2 className="mb-12 sm:mb-16 lg:mb-20 max-w-xl text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141219]">
          Industries We Empower
        </h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-12 place-items-center"
        >
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="mt-0 md:mt-40"
          >
            <Card
              title="Insurance"
              desc="Automate claims processing with accurate document validation."
              icon={insurance}
            />
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="mt-0 md:mt-8"
          >
            <Card
              title="Lending"
              desc="Ensure faster loan approvals with fraud detection and instant verification."
              icon={lending}
            />
          </motion.div>
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="mt-0 md:-mt-28"
          >
            <Card
              title="Healthcare"
              desc="Streamline patient record management and ensure compliance with HIPAA standards."
              icon={healthcare}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Card({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    <div className="lg:h-[300px] h-[320px] lg:w-[280px] w-[300px] md:h-72 md:w-64 rounded-2xl bg-white p-4 lg:p-8 text-center shadow-md">
      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl">
        <img src={icon} alt="" className="w-10 h-10 object-contain" />
      </div>

      <h3 className="mb-3 text-xl sm:text-2xl font-semibold text-gray-900">
        {title}
      </h3>
      <p className="leading-relaxed text-gray-500 text-sm sm:text-base">
        {desc}
      </p>
    </div>
  );
}

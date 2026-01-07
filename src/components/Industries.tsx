import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";
import dots from "../assets/dots.png";
import healthcare from "../assets/healthcare.png";
import lending from "../assets/lending.png";
import insurance from "../assets/insurance.png";
import ring2 from "../assets/ring2.png";
import verticalDots from "../assets/verticalDots.png";

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

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-white py-24 px-4 lg:px-20">
      <img
        src={ring2}
        className="absolute left-0 w-[550px] opacity-80"
        alt=""
      />

      {/* Dotted patterns */}
      <div className="absolute left-270 top-32 w-52">
        <img
          src={verticalDots}
          alt=""
          style={{ animation: "float 3s ease-in-out infinite" }}
        />
      </div>

      <div className="absolute left-350 bottom-24 w-64">
        <img
          src={dots}
          alt=""
          style={{ animation: "float 3s ease-in-out infinite" }}
        />
      </div>

      <div className="relative mx-auto px-6">
        <p className="mb-3 text-2xl font-medium text-orange-600">
          AI-driven innovation for growth.
        </p>

        <h2 className="mb-20 max-w-xl text-5xl font-bold text-gray-900">
          Industries We Empower
        </h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 gap-12 md:grid-cols-3"
        >
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="mt-40"
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
            className="mt-8"
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
            className="-mt-28"
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
    <div className="h-[320px] w-[300px] rounded-2xl bg-white p-10 text-center shadow-md">
      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl text-orange-600">
        <img src={icon} alt="" />
      </div>

      <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="leading-relaxed text-gray-500">{desc}</p>
    </div>
  );
}

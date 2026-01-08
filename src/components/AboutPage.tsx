import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import bg from "../assets/aboutBg.png";
import TeamSection from "./TeamSection";
import ContactPage from "./ContactPage";
import Navbar from "./Navbar";
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

const cardVariant1: Variants = {
  hidden: {
    opacity: 0,
    x: -260,
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

const cardVariant2: Variants = {
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

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <motion.div
          className="relative mx-auto pt-28 pb-32 space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AboutHeader />

          <InfoStrip
            title="Our Vision"
            align="right"
            text="To redefine document management with cutting-edge technology that ensures accuracy, efficiency, and trust."
            image={vision}
          />

          <InfoStrip
            title="Our Mission"
            align="left"
            text="To redefine document management with cutting-edge technology that ensures accuracy, efficiency, and trust."
            image={mission}
          />
        </motion.div>
      </section>
      <TeamSection />
      <ContactPage />
    </>
  );
}
function AboutHeader() {
  return (
    <div className="mx-auto max-w-xl rounded-2xl bg-white shadow-2xl px-12 py-10 text-center">
      <h1 className="text-5xl font-semibold text-[#141219]">About Us</h1>

      <p className="mt-4 text-xl bg-gradient-to-r from-[#CD6028] to-[#3E6EB4] bg-clip-text text-transparent">
        Meet the Minds Shaping Document Automation.
      </p>
    </div>
  );
}
function InfoStrip({
  title,
  text,
  align,
  image,
}: {
  title: string;
  text: string;
  align: "left" | "right";
  image: string;
}) {
  const isLeft = align === "left";

  return (
    <motion.div
      className={`flex items-center gap-10 bg-white shadow-xl px-12 py-5 max-w-4xl ${
        isLeft ? "ml-0 mr-auto rounded-r-full" : "ml-auto mr-0 rounded-l-full"
      }`}
      variants={align === "left" ? cardVariant1 : cardVariant2}
    >
      {/* Icon */}
      <div className="flex-shrink-0">
        <div className="h-20 w-20 rounded-full bg-[#3E6EB4] flex items-center justify-center shadow-lg">
          <img src={image} alt="" className="size-10" />
        </div>
      </div>
      <span className="h-16 w-[3px] bg-orange-500 rounded-full" />

      {/* Content */}
      <div className="flex items-start gap-6">
        <h3 className="text-2xl font-bold text-[#141219] w-20">{title}</h3>
        <p className="text-[#141219] font-medium text-base max-w-md leading-relaxed">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

import { useState } from "react";
import { motion, easeOut } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import dots from "../assets/dots.png";
import ring2 from "../assets/ring2.png";
import mansi from "../assets/mansi1.png";
import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import type { Variants } from "framer-motion";

const cardVariant: Variants = {
  hidden: { opacity: 0, x: 260 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: easeOut },
  },
};

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "CDO FutureSphere",
    image: member1,
    description:
      "For this time-constrained generation in a NOW economy, we would want to play our parts. We intend to make Banking not feel out of place.",
  },
  {
    id: 2,
    name: "MANSI SHUKLA",
    role: "CEO FutureSphere",
    image: mansi,
    description:
      "For this time-constrained generation in a NOW economy, we would want to play our parts. We intend to make Banking not feel out of place.",
  },
  {
    id: 3,
    name: "Alex Brown",
    role: "CTO FutureSphere",
    image: member2,
    description:
      "For this time-constrained generation in a NOW economy, we would want to play our parts. We intend to make Banking not feel out of place.",
  },
];

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);

  const handlePrev = () =>
    setActiveIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));

  const activeMember = teamMembers[activeIndex];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-14px); }
          }
        `}
      </style>

      {/* Floating dots */}
      <div className="absolute lg:left-40 lg:top-20 w-40 md:w-64">
        <img
          src={dots}
          alt=""
          style={{ animation: "float 3s ease-in-out infinite" }}
        />
      </div>

      {/* Ring */}
      <img
        src={ring2}
        className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-72 md:w-[450px] lg:w-[550px] opacity-80"
        alt=""
      />

      {/* Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto px-4"
        variants={cardVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#141219]">
          Meet our team
        </h2>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-[#CD6028] to-[#3E6EB4] bg-clip-text text-transparent">
          Meet our passionate and talented team, committed to delivering
          exceptional results, driving innovation, and transforming your vision
          into reality.
        </p>
      </motion.div>

      {/* Navigation Arrows */}
      <div className="mt-12 md:mt-16 flex justify-center gap-4">
        <ArrowLeft
          size={36}
          onClick={handlePrev}
          className="bg-[#3E6EB4] rounded-md text-white p-2 md:p-3 cursor-pointer hover:scale-105 transition"
        />
        <ArrowRight
          size={36}
          onClick={handleNext}
          className="bg-[#3E6EB4] rounded-md text-white p-2 md:p-3 cursor-pointer hover:scale-105 transition"
        />
      </div>

      {/* Avatars */}
      <motion.div
        className="flex justify-center items-center gap-6 sm:gap-10 md:gap-16 lg:gap-20 mt-12 md:mt-16 relative z-10"
        variants={cardVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            animate={{
              scale: index === activeIndex ? 1.1 : 0.9,
              opacity: index === activeIndex ? 1 : 0.6,
            }}
            transition={{ duration: 0.3 }}
            className={`rounded-full overflow-hidden ${
              index === activeIndex
                ? "w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 border-2 border-orange-400"
                : "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
            }`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Info Card */}
      <motion.div
        key={activeMember.id}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative max-w-4xl mx-4 md:mx-auto mt-12 md:mt-20 bg-[#4A6FB3] text-white rounded-2xl md:rounded-3xl px-6 md:px-10 py-8 md:py-12"
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[16px] border-b-[#4A6FB3]" />

        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          {activeMember.name}
        </h3>
        <p className="text-center text-[#CD6028] mt-1 text-lg md:text-xl lg:text-2xl">
          {activeMember.role}
        </p>

        <p className="mt-4 md:mt-6 text-center text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          {activeMember.description}
        </p>
      </motion.div>
    </section>
  );
}

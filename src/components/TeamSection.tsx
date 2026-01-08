import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import dots from "../assets/dots.png";
import ring2 from "../assets/ring2.png";
import mansi from "../assets/mansi1.png";
import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    image: member1,
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
    image: member2,
  },
];

export default function TeamSection() {
  const [activeIndex] = useState(1);
  const activeMember = teamMembers[activeIndex];

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-14px); }
          }
        `}
      </style>
      <div className="absolute left-350 w-64">
        <img
          src={dots}
          alt=""
          style={{ animation: "float 3s ease-in-out infinite" }}
        />
      </div>
      {/* Background Rings */}
      <img
        src={ring2}
        className="absolute left-0 w-[550px] opacity-80"
        alt=""
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-5xl font-semibold text-gray-900">Meet our team</h2>
        <p className="mt-4 text-2xl bg-gradient-to-r from-[#CD6028] to-[#3E6EB4] bg-clip-text text-transparent">
          Meet our passionate and talented team, committed to delivering
          exceptional results, driving innovation, and transforming your vision
          into reality.
        </p>
      </div>

      {/* Navigation Arrows */}
      <div className="mt-16 flex justify-center gap-4">
        <ArrowLeft
          size={40}
          className="bg-[#3E6EB4] rounded-md text-white p-3"
        />
        <ArrowRight
          size={40}
          className="bg-[#3E6EB4] rounded-md text-white p-3"
        />
      </div>

      {/* Avatars */}
      <div className="flex justify-center items-center gap-20 mt-16 relative z-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: index === activeIndex ? 1 : 0.6 }}
            className={`rounded-full overflow-hidden ${
              index === activeIndex
                ? "w-44 h-44 border-2 border-orange-400"
                : "w-28 h-28"
            }`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Info Card */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative max-w-4xl mx-auto mt-20 bg-[#4A6FB3] text-white rounded-3xl px-10 py-12"
      >
        {/* Arrow */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[16px] border-b-[#4A6FB3]" />

        <h3 className="text-4xl font-bold text-center">{activeMember.name}</h3>
        <p className="text-center text-[#CD6028] mt-1 text-2xl">
          {activeMember.role}
        </p>

        <p className="mt-6 text-center text-base leading-relaxed max-w-2xl mx-auto">
          {activeMember.description}
        </p>
      </motion.div>
    </section>
  );
}

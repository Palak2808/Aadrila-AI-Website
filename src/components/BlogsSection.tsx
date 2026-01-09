import { ArrowLeft, ArrowRight } from "lucide-react";
import verticalDots from "../assets/verticalDots.png";
import dots from "../assets/dots.png";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";

const blogs = [
  {
    title: "How AI is Revolutionizing Document Management for Enterprises",
    date: "24 July, 2023",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
  },
  {
    title: "Top 5 Fraud Prevention Strategies for Financial Institutions",
    date: "24 July, 2023",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
  },
  {
    title: "The Future of OCR: From Basic Extraction to AI-Driven Intelligence",
    date: "24 July, 2023",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
  },
];

const cardVariant: Variants = {
  hidden: {
    opacity: 0,
    x: 200,
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

export default function BlogsSection() {
  return (
    <section className="relative bg-white py-12 lg:py-28 overflow-hidden px-4 lg:px-20">
      {/* Decorative dots */}
      <div className="absolute hidden md:block left-20 top-32 w-52">
        <img
          src={verticalDots}
          alt=""
          style={{ animation: "float 3s ease-in-out infinite" }}
        />
      </div>

      <div className="absolute hidden md:block lg:right-24 bottom-[100px] w-64">
        <img
          src={dots}
          alt=""
          style={{ animation: "float 3s ease-in-out infinite" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#141219]">
            Blogs
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl">
            <span className="bg-gradient-to-r from-[#CD6028] to-[#3E6EB4] bg-clip-text text-transparent">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#CD6028] to-[#3E6EB4] bg-clip-text text-transparent">
              Lorem Ipsum has been the industry’s standard.
            </span>
          </p>
        </div>

        {/* Blog cards */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogs.map((blog, i) => (
            <BlogCard key={i} {...blog} />
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-12 sm:mt-16 flex justify-center gap-4">
          <ArrowLeft
            size={40}
            className="bg-[#3E6EB4] rounded-md text-white p-3 cursor-pointer"
          />
          <ArrowRight
            size={40}
            className="bg-[#3E6EB4] rounded-md text-white p-3 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

type BlogCardProps = {
  title: string;
  date: string;
  desc: string;
};

function BlogCard({ title, date, desc }: BlogCardProps) {
  return (
    <div className="relative">
      {/* Gradient shadow */}
      <div className="absolute inset-0 translate-y-6 rounded-2xl bg-gradient-to-r from-purple-200 to-blue-200 opacity-70 h-32 sm:h-36 lg:h-40 top-36 sm:top-40" />

      <motion.div
        className="relative z-10 rounded-2xl bg-white p-5 sm:p-6 shadow-sm m-4 sm:m-5 h-auto sm:h-72"
        variants={cardVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h3 className="text-sm sm:text-base font-semibold text-[#141219] leading-snug">
          {title}
        </h3>

        <p className="mt-2 sm:mt-3 text-xs text-[#719AD0]">{date}</p>

        <p className="mt-3 sm:mt-4 text-[#696969] text-sm leading-relaxed">
          {desc}
        </p>
      </motion.div>
    </div>
  );
}

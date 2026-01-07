import { ArrowLeft, ArrowRight } from "lucide-react";
import verticalDots from "../assets/verticalDots.png";
import dots from "../assets/dots.png";

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

export default function BlogsSection() {
  return (
    <section
      className="relative bg-white py-28 overflow-hidden px-4 lg:px-20
    "
    >
      <div className="absolute left-20 top-32 w-52">
        <img
          src={verticalDots}
          alt=""
          style={{ animation: "float 3s ease-in-out infinite" }}
        />
      </div>
      <div className="absolute left-350 bottom-100 w-64">
        <img
          src={dots}
          alt=""
          style={{ animation: "float 3s ease-in-out infinite" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-900">Blogs</h2>
          <p className="mt-6 text-lg">
            <span className="text-orange-500">
              Lorem Ipsum is simply dummy text
            </span>{" "}
            of the printing and typesetting industry.
            <br />
            <span className="text-gray-500">
              Lorem Ipsum has been the industry’s standard.
            </span>
          </p>
        </div>

        {/* Blog cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog, i) => (
            <BlogCard key={i} {...blog} />
          ))}
        </div>

        {/* Navigation */}
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
      <div className="absolute inset-0 translate-y-6 rounded-2xl bg-gradient-to-r from-purple-200 to-blue-200 opacity-70 h-40 top-40" />

      <div className="relative z-10 rounded-2xl bg-white p-6 shadow-sm m-5 h-72">
        <h3 className="text-lg font-semibold text-gray-900 leading-snug">
          {title}
        </h3>

        <p className="mt-3 text-sm text-blue-500">{date}</p>

        <p className="mt-4 text-gray-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

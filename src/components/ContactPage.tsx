import { MapPin } from "lucide-react";
import dots from "../assets/dots.png";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";

const cardVariant1: Variants = {
  hidden: {
    opacity: 0,
    x: -120,
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
    x: 120,
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

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute hidden lg:block -left-10 top-12 w-64">
        <img
          src={dots}
          alt=""
          style={{ animation: "float 3s ease-in-out infinite" }}
        />
      </div>

      <section className="bg-white px-4 lg:px-20">
        <div className="mx-auto px-4 sm:px-6 pt-20 sm:pt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <FooterBar />
    </div>
  );
}

function ContactInfo() {
  return (
    <motion.div
      className="lg:pb-16"
      variants={cardVariant1}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#141219]">
        Contact Us
      </h1>

      <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed">
        <span className="bg-gradient-to-r from-[#CD6028] to-[#3E6EB4] bg-clip-text text-transparent">
          Lorem Ipsum is simply dummy text of the printing and{" "}
        </span>
        <br />
        <span className="bg-gradient-to-r from-[#CD6028] to-[#3E6EB4] bg-clip-text text-transparent">
          typesetting industry Lorem Ipsum has been the industry’s.
        </span>
      </p>

      {/* US Office */}
      <div className="mt-8">
        <h4 className="font-bold text-sm sm:text-base text-[#000000] flex items-center gap-2 underline">
          <MapPin className="size-4 text-[#CD6129]" />
          U.S. Office
        </h4>
        <p className="mt-2 text-[#000000] leading-relaxed max-w-md text-sm">
          Aadrila Technologies INC, <br />8 The Green, Ste R, in the City of
          Dover County of Kent Zip Code 19901.
        </p>
      </div>

      {/* India Office */}
      <div className="mt-6">
        <h4 className="font-bold text-sm sm:text-base text-[#000000] flex items-center gap-2 underline">
          <MapPin className="size-4 text-[#CD6129]" />
          India Office
        </h4>
        <p className="mt-2 text-[#000000] leading-relaxed max-w-md text-sm">
          Aadrila Technologies Private Limited, <br />
          Unit 707, Lotus Trade Centre, Sahakar Nagar, New Link Road, Near
          D.N.Nagar, Andheri West, Mumbai, Maharashtra 400053.
        </p>
      </div>
    </motion.div>
  );
}

function ContactForm() {
  return (
    <motion.div
      className="bg-white rounded-3xl shadow-2xl p-6 lg:p-12 
      relative lg:absolute lg:right-44 lg:bottom-20 w-full max-w-xl mx-auto"
      variants={cardVariant2}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <form className="space-y-5 sm:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <InputField placeholder="Full Name" />
          <InputField placeholder="Email" />
          <InputField placeholder="Phone Number" />
          <InputField placeholder="Company Name" />
        </div>

        <InputField placeholder="Inquiry Type" />

        <textarea
          placeholder="Message"
          className="w-full h-40 sm:h-48 rounded-xl border border-[#959595] px-5 py-4 text-[#959595] font-light text-base focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />

        <button
          type="submit"
          className="w-full rounded-full bg-[#3E6EB4] py-3 sm:py-4 text-white text-base font-semibold hover:bg-[#3E6EB4]/90 transition cursor-pointer"
        >
          Send Inquiry
        </button>
      </form>
    </motion.div>
  );
}

function InputField({ placeholder }: { placeholder: string }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-xl border border-[#959595] px-5 py-4 text-[#959595] font-light text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

function FooterBar() {
  return (
    <footer className="bg-[#3E6EB4] py-8 sm:py-10 text-[#FFFFFF] mt-10 lg:mt-0">
      <div className="mx-auto px-6 sm:px-12 lg:pl-24 text-xs sm:text-sm leading-relaxed">
        <p>
          © 2025 by Aadrila Technologies Private Limited CIN
          U74999UP2017PTC094688
        </p>

        <p className="mt-3 sm:mt-4 max-w-xl">
          Registered Address: B-1, 127/K, Sector-K Aliganj, Lucknow, Lucknow,
          Uttar Pradesh, India, 226024
        </p>
      </div>
    </footer>
  );
}

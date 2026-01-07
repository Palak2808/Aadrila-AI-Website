import { MapPin } from "lucide-react";
import dots from "../assets/dots.png";

export default function ContactPage() {
  return (
    <div className="relative">
      <div className="absolute -left-10 w-64">
        <img
          src={dots}
          alt=""
          style={{ animation: "float 3s ease-in-out infinite" }}
        />
      </div>
      <section className="bg-white px-4 lg:px-20">
        <div className="mx-auto px-6 pt-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
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
    <div className="pb-24">
      <h1 className="text-5xl font-semibold text-[#141219]">Contact Us</h1>

      <p className="mt-6 text-xl leading-relaxed">
        <span className="bg-gradient-to-r from-[#CD6028] to-[#3E6EB4] bg-clip-text text-transparent">
          Lorem Ipsum is simply dummy text of the printing and{" "}
        </span>
        <br />
        <span className="bg-gradient-to-r from-[#CD6028] to-[#3E6EB4] bg-clip-text text-transparent">
          typesetting industry Lorem Ipsum has been the industry’s.
        </span>
      </p>

      {/* US Office */}
      <div className="mt-10">
        <h4 className="font-bold text-base text-[#000000] flex items-center gap-2 underline">
          <MapPin className="size-4 text-[#CD6129]" />
          U.S. Office
        </h4>
        <p className="mt-2 text-[#000000] leading-relaxed max-w-md text-sm">
          Aadrila Technologies INC, <br />8 The Green, Ste R, in the City of
          Dover County of Kent Zip Code 19901.
        </p>
      </div>

      {/* India Office */}
      <div className="mt-8">
        <h4 className="font-bold text-base text-[#000000] flex items-center gap-2 underline">
          <MapPin className="size-4 text-[#CD6129]" />
          India Office
        </h4>
        <p className="mt-2 text-[#000000] leading-relaxed max-w-md text-sm">
          Aadrila Technologies Private Limited, <br />
          Unit 707, Lotus Trade Centre, Sahakar Nagar, New Link Road, Near
          D.N.Nagar, Andheri West, Mumbai, Maharashtra 400053.
        </p>
      </div>
    </div>
  );
}
function ContactForm() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-12 lg:absolute right-44 bottom-20">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField placeholder="Full Name" />
          <InputField placeholder="Email" />
          <InputField placeholder="Phone Number" />
          <InputField placeholder="Company Name" />
        </div>

        <InputField placeholder="Inquiry Type" />

        <textarea
          placeholder="Message"
          className="w-full h-48 rounded-xl border border-[#959595] px-5 py-4 text-[#959595] font-light text-base focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />

        <button
          type="submit"
          className="w-full rounded-full bg-[#3E6EB4] py-4 text-white text-base font-semibold hover:[#3E6EB4]/90 transition cursor-pointer"
        >
          Send Inquiry
        </button>
      </form>
    </div>
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
    <footer className="bg-[#3E6EB4] py-10 text-[#FFFFFF]">
      <div className="pl-24 mx-auto px-6 text-sm leading-relaxed">
        <p>
          © 2025 by Aadrila Technologies Private Limited CIN
          U74999UP2017PTC094688
        </p>

        <p className="mt-4 max-w-xl">
          Registered Address: B-1, 127/K, Sector-K Aliganj, Lucknow, Lucknow,
          Uttar Pradesh, India, 226024
        </p>
      </div>
    </footer>
  );
}

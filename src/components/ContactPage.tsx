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
      <h1 className="text-5xl font-semibold text-gray-900">Contact Us</h1>

      <p className="mt-6 text-xl leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has been the industry’s.
      </p>

      {/* US Office */}
      <div className="mt-10">
        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
          📍 U.S. Office
        </h4>
        <p className="mt-2 text-gray-600 leading-relaxed max-w-md">
          Aadrila Technologies INC, <br />8 The Green, Ste R, in the City of
          Dover County of Kent Zip Code 19901.
        </p>
      </div>

      {/* India Office */}
      <div className="mt-8">
        <h4 className="font-semibold text-gray-900 flex items-center gap-2">
          📍 India Office
        </h4>
        <p className="mt-2 text-gray-600 leading-relaxed max-w-md">
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
          className="w-full h-48 rounded-xl border border-gray-300 px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />

        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-[#3E6EB4] py-4 text-white text-lg font-medium hover:[#3E6EB4]/90 transition cursor-pointer"
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
      className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
function FooterBar() {
  return (
    <footer className="bg-[#3E6EB4] py-10 text-white">
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

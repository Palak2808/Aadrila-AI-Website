import dots from "../assets/dots.png";
import ring from "../assets/ring.png";
import ring2 from "../assets/ring2.png";
import docsim from "../assets/product.png";
import docpilot from "../assets/product.png";
import doxtract from "../assets/product.png";

export default function ProductsSection() {
  return (
    <section className="relative bg-white overflow-hidden px-4 lg:px-20 py-24">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-14px); }
          }
        `}
      </style>

      <img
        src={ring}
        className="absolute right-0 top-32 w-[600px] opacity-80"
        alt=""
      />
      <img
        src={ring2}
        className="absolute left-0 bottom-170 w-[550px] opacity-80"
        alt=""
      />
      <img
        src={ring}
        className="absolute right-0 bottom-5 w-[600px] opacity-70"
        alt=""
      />

      <img
        src={dots}
        className="absolute top-16 left-24 w-52 opacity-80"
        style={{ animation: "float 3s ease-in-out infinite" }}
        alt=""
      />

      <div className="text-center mb-24">
        <p className="text-sm text-orange-500 font-medium tracking-wide">
          features and benefits.
        </p>
        <h2 className="mt-2 text-4xl font-semibold text-gray-900">
          Our Products
        </h2>
      </div>

      <div className="mx-auto space-y-40">
        {/* DOCSIM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-5 py-1 rounded-full bg-gradient-to-r from-orange-500 to-blue-600 text-white text-sm">
              DocSim
            </span>

            <h3 className="mt-6 text-3xl font-bold text-gray-900">
              AI-Powered Document Similarity Engine
            </h3>

            <h4 className="mt-8 font-semibold text-gray-700">Features:</h4>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>• Detects near-duplicates and tampered documents.</li>
              <li>• Identifies fraudulent patterns across repositories.</li>
              <li>• Multi-language support for global adaptability.</li>
            </ul>

            <h4 className="mt-6 font-semibold text-gray-700">Benefits:</h4>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>• Save 30% time on manual checks.</li>
              <li>• Reduce document fraud by up to 40%.</li>
            </ul>

            <div className="mt-10 flex gap-4">
              <button className="px-7 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                Learn More
              </button>
              <button className="px-7 py-3 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
                Schedule a Demo
              </button>
            </div>
          </div>

          <img
            src={docsim}
            className="rounded-3xl shadow-2xl w-[600px] h-[504px]"
            style={{ animation: "float 4s ease-in-out infinite" }}
            alt=""
          />
        </div>

        {/* DOCPILOT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <img
            src={docpilot}
            className="rounded-3xl shadow-2xl order-2 lg:order-1  w-[600px] h-[504px]"
            style={{ animation: "float 4.5s ease-in-out infinite" }}
            alt=""
          />

          <div className="order-1 lg:order-2">
            <span className="inline-block px-5 py-1 rounded-full bg-gradient-to-r from-orange-500 to-blue-600 text-white text-sm">
              DocPilot
            </span>

            <h3 className="mt-6 text-3xl font-bold text-gray-900">
              Streamline Document Workflows with Automation
            </h3>

            <h4 className="mt-8 font-semibold text-gray-700">Features:</h4>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>• Automated document collection and routing.</li>
              <li>• Real-time tracking with dashboards.</li>
              <li>• Seamless API integrations.</li>
            </ul>

            <h4 className="mt-6 font-semibold text-gray-700">Benefits:</h4>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>• Reduce turnaround times by 50%.</li>
              <li>• Improve operational efficiency.</li>
            </ul>

            <div className="mt-10 flex gap-4">
              <button className="px-7 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                Learn More
              </button>
              <button className="px-7 py-3 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>

        {/* DOXTRACT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-5 py-1 rounded-full bg-gradient-to-r from-orange-500 to-blue-600 text-white text-sm">
              Doxtract
            </span>

            <h3 className="mt-6 text-3xl font-bold text-gray-900">
              Extract, Validate, and Process Documents with Ease
            </h3>

            <h4 className="mt-8 font-semibold text-gray-700">Features:</h4>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>• OCR & NLP-based data extraction.</li>
              <li>• Handles unstructured documents.</li>
              <li>• Validates fields via external sources.</li>
            </ul>

            <h4 className="mt-6 font-semibold text-gray-700">Benefits:</h4>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>• Process 10,000+ documents in minutes.</li>
              <li>• Achieve 99% data accuracy.</li>
            </ul>

            <div className="mt-10 flex gap-4">
              <button className="px-7 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                Learn More
              </button>
              <button className="px-7 py-3 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition">
                Schedule a Demo
              </button>
            </div>
          </div>

          <img
            src={doxtract}
            className="rounded-3xl shadow-2xl  w-[600px] h-[504px]"
            style={{ animation: "float 5s ease-in-out infinite" }}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

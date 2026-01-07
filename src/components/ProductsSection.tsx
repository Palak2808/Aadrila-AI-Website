import dots from "../assets/dots.png";
import ring from "../assets/ring.png";
import ring2 from "../assets/ring2.png";
import docsim from "../assets/product.png";
import docpilot from "../assets/product2.png";
import doxtract from "../assets/product3.png";

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
        <p className="text-sm bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent font-medium tracking-wide">
          features and benefits.
        </p>
        <h2 className="mt-2 text-4xl font-semibold text-gray-900">
          Our Products
        </h2>
      </div>

      <div className="mx-auto space-y-40">
        <ProductSection
          tag="DocSim"
          title="AI-Powered Document Similarity Engine"
          features={[
            "Detects near-duplicates and tampered documents.",
            "Identifies fraudulent patterns across repositories.",
            "Multi-language support for global adaptability.",
          ]}
          benefits={[
            "Save 30% time on manual checks.",
            "Reduce document fraud by up to 40%.",
          ]}
          image={docsim}
          floatDuration="4s"
        />

        <ProductSection
          tag="DocPilot"
          title="Streamline Document Workflows with Automation"
          features={[
            "Automated document collection and routing.",
            "Real-time tracking with dashboards.",
            "Seamless API integrations.",
          ]}
          benefits={[
            "Reduce turnaround times by 50%.",
            "Improve operational efficiency.",
          ]}
          image={docpilot}
          reverse
          floatDuration="4.5s"
        />

        <ProductSection
          tag="Doxtract"
          title="Extract, Validate, and Process Documents with Ease"
          features={[
            "OCR & NLP-based data extraction.",
            "Handles unstructured documents.",
            "Validates fields via external sources.",
          ]}
          benefits={[
            "Process 10,000+ documents in minutes.",
            "Achieve 99% data accuracy.",
          ]}
          image={doxtract}
          floatDuration="5s"
        />
      </div>
    </section>
  );
}

type ProductSectionProps = {
  tag: string;
  title: string;
  features: string[];
  benefits: string[];
  image: string;
  reverse?: boolean;
  floatDuration?: string;
};

export function ProductSection({
  tag,
  title,
  features,
  benefits,
  image,
  reverse = false,
  floatDuration = "4s",
}: ProductSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Text */}
      <div className={reverse ? "order-1 lg:order-2" : ""}>
        <span className="inline-block px-5 py-1 rounded-full bg-gradient-to-r from-orange-500 to-blue-600 text-white text-lg">
          {tag}
        </span>

        <h3 className="mt-6 text-3xl font-bold text-gray-900">{title}</h3>

        <h4 className="mt-8 font-semibold text-gray-700">Features:</h4>
        <ul className="mt-4 space-y-3 text-gray-600 font-light">
          {features.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>

        <h4 className="mt-6 font-semibold text-gray-700">Benefits:</h4>
        <ul className="mt-4 space-y-3 text-gray-600 font-light">
          {benefits.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>

        <div className="mt-10 flex gap-4">
          <button className="px-7 py-3 rounded-full text-white transition bg-[#3E6EB4] hover:bg-[#3E6EB4]/90">
            Learn More
          </button>
          <button className="px-7 py-3 rounded-full bg-[#3E6EB4] hover:bg-[#3E6EB4]/90 text-white transition">
            Schedule a Demo
          </button>
        </div>
      </div>

      {/* Image */}
      <img
        src={image}
        alt={tag}
        className={`rounded-3xl shadow-2xl w-[600px] h-[504px] ${
          reverse ? "order-2 lg:order-1" : ""
        }`}
        style={{ animation: `float ${floatDuration} ease-in-out infinite` }}
      />
    </div>
  );
}

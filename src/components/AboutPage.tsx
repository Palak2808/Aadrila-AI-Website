import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import bg from "../assets/aboutBg.png";

export default function AboutPage() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="relative mx-auto pt-28 pb-32 space-y-20">
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
      </div>
    </section>
  );
}
function AboutHeader() {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-white shadow-2xl px-12 py-10 text-center">
      <h1 className="text-5xl font-semibold text-gray-900">About Us</h1>

      <p className="mt-4 text-lg">
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
    <div
      className={`flex items-center gap-10 bg-white shadow-xl px-12 py-5 max-w-4xl ${
        isLeft ? "ml-0 mr-auto rounded-r-full" : "ml-auto mr-0 rounded-l-full"
      }`}
    >
      {/* Icon */}
      <div className="flex-shrink-0">
        <div className="h-20 w-20 rounded-full bg-[#3E6EB4] flex items-center justify-center shadow-lg">
          <img src={image} alt="" className="size-10" />
        </div>
      </div>
      <span className="h-16 w-[3px] bg-orange-500 rounded-full" />

      {/* Content */}
      <div
        className={`flex items-start gap-6 ${
          isLeft ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-3 text-gray-600 max-w-md leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
}

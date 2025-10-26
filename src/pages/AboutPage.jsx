import React from "react";
import { ShieldCheck, Globe2, Clock, Award, Truck, Leaf } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-[#C66A1F]" />,
    title: "Uncompromised Quality",
    desc: "We follow strict international standards to ensure every product meets the highest quality benchmarks.",
  },
  {
    icon: <Globe2 className="w-10 h-10 text-[#C66A1F]" />,
    title: "Global Reach",
    desc: "Serving clients across continents with reliable logistics and consistent export excellence.",
  },
  {
    icon: <Clock className="w-10 h-10 text-[#C66A1F]" />,
    title: "On-Time Delivery",
    desc: "We value your time — ensuring fast, efficient, and timely delivery for every shipment.",
  },
  {
    icon: <Award className="w-10 h-10 text-[#C66A1F]" />,
    title: "Trusted by Partners",
    desc: "Our long-term relationships with global clients stand as proof of our reliability and integrity.",
  },
  {
    icon: <Truck className="w-10 h-10 text-[#C66A1F]" />,
    title: "Strong Supply Chain",
    desc: "Efficient procurement, packaging, and logistics systems to maintain consistency and reliability.",
  },
  {
    icon: <Leaf className="w-10 h-10 text-[#C66A1F]" />,
    title: "Sustainability Focused",
    desc: "We’re committed to eco-friendly and ethical export practices that protect our planet.",
  },
];

const AboutPage = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-[#FFFFFF] to-[#F5E9DA] overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#C66A1F]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#5C3A00]/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#3A3A3A] mb-6">
          Why Choose <span className="text-[#C66A1F]">SK Foodz</span>?
        </h2>
        <p className="text-[#5C3A00]/80 text-lg mb-16 max-w-2xl mx-auto">
          Your trusted export partner for quality, reliability, and global excellence.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] rounded-2xl shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-[#F5E9DA] group"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#3A3A3A] mb-3 group-hover:text-[#C66A1F] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#5C3A00]/80 text-base leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

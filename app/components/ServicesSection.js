// components/ServicesSection.js
import Image from "next/image";

const ServiceCard = ({ iconSrc, title, services, idx, total }) => (
  <div className={`flex flex-col px-8 py-14 border space-y-4 ${idx + 1 === total.length ? "" : "lg:border-r-0"}`}>
    <Image src={iconSrc} alt={`${title} icon`} width={64} height={64} className="blue-tint" />
    <h2 className="text-xl font-bold">{title}</h2>
    <ul className="w-full space-y-2">
      {services.map((service, idx) => (
        <li key={idx} className="text-gray-700 flex items-center gap-2" style={{ color: "black" }}>
          <div className="w-1.5 h-1.5 bg-primary"></div>
          {service}
        </li>
      ))}
    </ul>
  </div>
);

const ServicesSection = () => {
  const servicesData = [
    {
      iconSrc: "/assets/translate-1.png",
      title: "Technical Translation",
      services: ["Legal Document", "Certified Legal Services", "Reduce Your Workload"],
    },
    {
      iconSrc: "/assets/translation-1.png",
      title: "Translation Services",
      services: ["Legal Document", "Certified Legal Services", "Reduce Your Workload"],
    },
    {
      iconSrc: "/assets/dictionary.png",
      title: "Business Translation",
      services: ["Legal Document", "Certified Legal Services", "Reduce Your Workload"],
    },

    {
      iconSrc: "/assets/legal.png",
      title: "Legal Translation",
      services: ["Legal Document", "Certified Legal Services", "Reduce Your Workload"],
    },
  ];

  return (
    <section id="service" className="py-5 lg:py-28 container">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {servicesData.map((service, idx, total) => (
          <ServiceCard key={idx} {...service} idx={idx} total={total} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

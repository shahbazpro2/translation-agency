// components/HeroSection.js
import talk from "../../public/assets/talk.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image on the left */}
        <div>
          <Image src={talk} alt="Description of Image" />
        </div>

        {/* Title, Text and Buttons on the right */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold ">MsPunkt Translation Agency</h1>
          <p className="mb-6 my-7 text-gray-700">Do you need competent translations of texts, documents, purchase certificates, birth certificates or other documents? We provide you with sworn and non-sworn translators in all languages.</p>
          <div className="flex gap-4">
            <button className="p-btn">Read More</button>
            <button className="s-btn">All Service</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

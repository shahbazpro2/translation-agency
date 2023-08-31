// components/AboutMe.js

import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="container py-28">
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <div className="w-full">
          <Image src="/assets/hero.jpg" alt="About me image" width={500} height={500} className="" />
        </div>
        <div className="w-full">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Who is actually behind the Meeting & Service point? </h2>
          <p className="text-gray-700 mb-6">
            Many years of experience in the field of doctoral studies coupled with training as a travel agent (IHK Hamburg) and foreign language correspondent (Colón Schule, Hamburg) , now a sworn and publicly appointed interpreter and translator for
            the Hanseatic City of Hamburg and the Spanish Ministry of Foreign Affairs in Madrid and 18 years of professional experience in Marbella, have created this service agency.
          </p>
          <button className="bg-primary text-white px-7 py-3">Learn More</button>
        </div>
      </div>
    </div>
  );
}

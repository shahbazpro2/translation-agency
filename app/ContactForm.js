// components/ConsultancyForm.js

import Image from "next/image";

export default function ContactForm() {
  return (
    <div id="contact" className="bg-gray-50 lg:mt-20">
      <div className="container py-20 ">
        <div className="grid grid-cols-5 gap-10">
          {" "}
          {/* Flex container */}
          {/* TranslationParagraphs */}
          <div className="flex items-center col-span-5 lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 w-full ">
              <div className="flex items-start gap-3">
                <div>
                  {" "}
                  <Image src={"/assets/translate-1.png"} alt={`icon`} width={100} height={100} />
                </div>
                <div>
                  <div className="text-xl font-bold">Technical Translation</div>
                  <p className="mt-1">Approve, edit and enhance your website translations within your team</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div>
                  {" "}
                  <Image src={"/assets/translation-1.png"} alt={`icon`} width={100} height={100} />
                </div>
                <div>
                  <div className="text-xl font-bold">Translation Services</div>
                  <p className="mt-1">Approve, edit and enhance your website translations within your team </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div>
                  {" "}
                  <Image src={"/assets/dictionary.png"} alt={`icon`} width={100} height={100} />
                </div>
                <div>
                  <div className="text-xl font-bold">Business Translation</div>
                  <p className="mt-1">Approve, edit and enhance your website translations within your team </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div>
                  {" "}
                  <Image src={"/assets/legal.png"} alt={`icon`} width={100} height={100} />
                </div>
                <div>
                  <div className="text-xl font-bold">Legal Translation</div>
                  <p className="mt-1">Saves time and ensures all the content of your website is 100% translated. </p>
                </div>
              </div>
            </div>
          </div>
          {/* ConsultancyForm */}
          <div className="p-8 shadow-md w-full col-span-5 lg:col-span-2 bg-white">
            <h2 className="text-3xl font-bold text-center mb-6">Quick Online Consultancy</h2>
            <form>
              <div className="mb-4">
                <label className="block text-black mb-2">Full Name</label>
                <input type="text" className="w-full p-2 rounded border" placeholder="Your Name" required />
              </div>
              <div className="mb-4">
                <label className="block text-black mb-2">Email Address</label>
                <input type="email" className="w-full p-2 rounded border" placeholder="Your Email" required />
              </div>
              <div className="mb-4">
                <label className="block text-black mb-2">Contact Number</label>
                <input type="tel" className="w-full p-2 rounded border" placeholder="Your Contact Number" required />
              </div>
              <div className="mb-4">
                <label className="block text-black mb-2">Brief Description</label>
                <textarea className="w-full p-2 rounded border" rows="5" placeholder="Describe your inquiry" required></textarea>
              </div>
              <button className="p-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

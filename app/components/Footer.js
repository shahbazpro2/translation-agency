import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.png";

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="mb-6 sm:mb-0">
            <Link className="ml-5" href="/">
              <Image src={logo} alt="Logo" width={120} height={120} />
            </Link>
            <h1 className="text-xl font-bold mt-4">Meeting & Service Punkt Marbella Hamburg Berlin</h1>
            <p className="text-sm sm:text-base mt-2">Centro De Negocios, Av. Jacaranda, 123, Oficina 10, Izquierda</p>
            <p className="text-sm sm:text-base">29604 El Rosario, Málaga</p>
          </div>
        </div>
        <div className="mt-10 text-sm border-t pt-3 lg:text-end flex flex-col lg:flex-row justify-between gap-5">
          <div className="space-y-0 space-x-4">
            <a href="#" className="text-sm inline-block hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-sm inline-block hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="text-sm inline-block hover:underline">
              Contact Us
            </a>
          </div>
          <div>
            <p>&copy; {new Date().getFullYear()} Meeting & Service Punkt Marbella Hamburg Berlin. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

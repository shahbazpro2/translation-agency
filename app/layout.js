import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import "../app/styles/global.css";
import Header from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MSPunkt",
  description: "Meeting & Service Punkt Translation Service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

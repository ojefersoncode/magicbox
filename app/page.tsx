import Banner from "@/components/HomeComponents/Banner";
import Cards from "@/components/HomeComponents/Cards";
import Footer from "@/components/HomeComponents/Footer";
import Navbar from "@/components/HomeComponents/Navbar";
import { Navbottom } from "@/components/HomeComponents/Navbottom";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen max-md:p-4 md:p-6 bg-gradient-to-b bg-blue-950 via-blue-900 to-blue-950 text-white">
      <Navbar />

      <div className="w-full pt-6">
        <Cards />
      </div>

      <div className="w-full max-md:pb-20">
        <Footer />
      </div>
    </div>
  );
}

import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Nav";
import Image from "next/image";
import Head from "../components/Head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <div className=" relative font-Montserrat min-h-screen w-screen">
        <Image
          layout="fill"
          className="object-center object-cover pointer-events-none opacity-20"
          src="/background.jpg"
          alt="Background Image"
        />
        <div className="relative z-1 min-h-screen w-full">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;

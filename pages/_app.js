import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Nav";
import Image from "next/image";
import Head from "../components/Head";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
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
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          className="relative z-1 min-h-screen w-full"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <Navbar />
          <Component {...pageProps} />
        </motion.div>
      </div>
    </>
  );
}

export default MyApp;

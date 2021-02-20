import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Nav";

import Head from "../components/Head";
import { motion } from "framer-motion";
import BackgroundImage from "../components/BackgroundImage";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head />
      <div className=" relative font-Montserrat min-h-screen w-screen">
        <BackgroundImage/>
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

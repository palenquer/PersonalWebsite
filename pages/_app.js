import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-Montserrat h-screen w-screen">
      <Navbar/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

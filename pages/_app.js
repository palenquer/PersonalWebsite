import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-Montserrat h-screen w-screen">
      <Nav/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

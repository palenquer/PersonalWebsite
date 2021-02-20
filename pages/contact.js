import SvgEmail from "../components/Contact/SvgEmail";
import SvgLinkedin from "../components/Contact/SvgLinkedin";
import SvgPhone from "../components/Contact/SvgPhone";
import SvgGithub from "../components/Contact/SvgGithub";

export default function Contact() {
  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen text-gray-700 bg-purple-400 leading-loose px-4">
      <ul className="flex flex-col justify-center items-center text-white w-full md:w-1/2 h-96">
        <li className="flex items-center">
          <SvgEmail />
          <span className="ml-2 mb-2">pauloalenquer@gmail.com</span>
        </li>
        <li className="flex items-center">
          <SvgPhone />
          <span className="ml-2">(21) 96932-8671</span>
        </li>
        <ul className="flex justify-center items-center w-full mt-4">
          <li className="mr-4">
            <SvgLinkedin />
          </li>
          <li className="">
            <SvgGithub />
          </li>
        </ul>
      </ul>
    </main>
  );
}

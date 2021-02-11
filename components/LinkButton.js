import Link from "next/link";

const LinkButton = ({ text, href }) => {
  return (
    <Link href={href}>
      <a className="block bg-purple-500 w-28 mt-8 rounded-md h-12 text-white transform hover:rotate-6 hover:shadow-3xl transition duration-500 focus:outline-none text-center leading-12">
        {text}
      </a>
    </Link>
  );
};
export default LinkButton;

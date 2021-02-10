import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full text-gray-700 leading-loose">
      <div className="max-w-xs">
        <h2 className="text-purple-500 text-2xl font-bold">Hello I'm</h2>
        <h1 className="text-6xl font-Teko font-black text-gray-800">
          PAULO ALENQUER
        </h1>
        <h3 className="font-semibold">Web Developer</h3>
        <h4 className="text-gray-500 text-sm">
          My name is Paulo Alenquer, I'm 23 years old, I love Technology,
          Programming and Art.
        </h4>
        <Link href="/about">
          <a className="block bg-purple-500 w-28 mt-8 rounded-md h-12 text-white transform hover:rotate-6 hover:shadow-3xl transition duration-500 focus:outline-none text-center leading-12">
            Hire me
          </a>
        </Link>
      </div>
    </div>
  );
}

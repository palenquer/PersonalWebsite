import SvgArrow from "../../components/SvgArrow";
import GithubIcon from "../../components/Portfolio/GithubIcon";
import Link from "next/link";

export default function ReactForm() {
  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen">
      <section className="flex justify-center items-center h-full w-full border-solid min-h-full">
        <div className="flex justify-center items-center flex-col h-full w-full md:h-4/5 md:w-3/5 border-purple-400 bg-purple-400 border-4">
          <div className=" relative flex h-14 flex-col justify-center items-center text-center w-full">
            <Link href="/portfolio">
              <div className="absolute transform rotate-90 left-2 cursor-pointer">
                <SvgArrow className="fill-current text-white" />
              </div>
            </Link>
            <h1 className="text-white font-bold text-lg">DEMO</h1>

            <a
              href="https://github.com/palenquer/ReactForm"
              className="absolute rounded text-white font-bold text-lg right-2 h-10 w-24 bg-yellow-400 flex justify-evenly items-center transition duration-150 hover:bg-yellow-500"
            >
              <GithubIcon />
              Github
            </a>
          </div>

          <iframe
            src="https://react-form.palenquer.vercel.app"
            title="Reusable React Input"
            className="w-full h-full bg-white border-2 border-solid"
          />
        </div>
      </section>
    </main>
  );
}

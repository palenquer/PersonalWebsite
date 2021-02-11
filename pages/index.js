import LinkButton from "../components/LinkButton";
import HomeText from "../components/Home/HomeText";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-full text-gray-700 leading-loose">
      <section className="max-w-xs md:max-w-sm">
        <HomeText name="PAULO ALENQUER" text="in love with technology, programming and art." business="Web Developer"/>
        <LinkButton text="Hire me" href="/about" />
      </section>
    </main>
  );
}

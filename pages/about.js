import "isomorphic-fetch";
import UserInfo from "../components/About/UserInfo";
import UserName from "../components/About/UserName";
import ItemSkill from "../components/About/ItemSkill";
import Image from "next/image";

export default function About({ userInfo }) {
  return (
    <main className="flex flex-col md:flex-row md:justify-evenly justify-center items-center w-full min-h-screen text-gray-700 leading-loose z-0">
      <section className="flex flex-col justify-center items-center md:mt-0 border-b-2 w-full h-screen md:w-6/12 pt-28 pb-2 bg-purple-100">
        <div className="border-purple-500 border-2 p-4 rounded-xl relative w-80 md:mb-20">
          <div className="absolute -top-5 left-20 z-20 bg-purple-100 h-6 w-40">
            <UserName name={userInfo.name} />
          </div>

          <figure className="relative border-solid border-4 border-purple-500 w-full">
            <Image
              layout="responsive"
              className="object-center object-cover pointer-events-none"
              width={100}
              height={100}
              src={userInfo.avatar_url}
              alt="Avatar Image"
            />
          </figure>
          <div className="flex justify-center flex-col w-full text-sm pt-4 border-b-2 border-purple-500">
            <UserInfo info="Age" text="23" />
            <UserInfo info="Location" text={userInfo.location} />
          </div>
          <div className="mt-2 w-full">
            <h2 className="font-bold">Web Development Skills</h2>
            <div className=" flex flex-wrap mt-2">
              <ItemSkill text="HTML" color="red-600" />
              <ItemSkill text="CSS" color="blue-700" />
              <ItemSkill text="Javascript" color="yellow-400" />
              <ItemSkill text="Node.js" color="green-600" />
              <ItemSkill text="React.js" color="blue-400" />
              <ItemSkill text="Vue.js" color="green-500" />
              <ItemSkill text="Git" color="red-400" />
              <ItemSkill text="Next.js" color="black" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center px-6 w-full md:w-3/6 md:mt-0 h-screen">
        <div className="p-6">
          <h1>
            My name is Paulo Alenquer, I'm 23 years old, I love Technology,
            Programming and Art. I am looking for work experience, to develop as
            a professional and add value to the company.
          </h1>
        </div>
      </section>
    </main>
  );
}

About.getInitialProps = async () => {
  const response = await fetch("https://api.github.com/users/palenquer");
  const userInfo = await response.json();
  return { userInfo };
};

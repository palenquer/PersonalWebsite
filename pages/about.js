import "isomorphic-fetch";
import Image from "next/image";

export default function About({ userInfo }) {
  return (
    <main className="flex flex-col justify-center items-center w-full h-full text-gray-700 leading-loose">
      <section className="flex flex-col justify-center items-center border-solid border-4 w-3/5 p-4">
        <div className="rounded-full border-solid border-4 border-purple-500 w-60">
          <Image
            layout="responsive"
            className="rounded-full"
            width={100}
            height={100}
            src={userInfo.avatar_url}
            alt="Avatar Image"
          />
        </div>
        <div className="max-w-1/2">
          <h1>{userInfo.name}</h1>
          <div className="flex justify-between">
            <span>Age</span>
            <span>23</span>
          </div>

          <h1>Location {userInfo.location}</h1>
        </div>
      </section>
      <section></section>
    </main>
  );
}

About.getInitialProps = async () => {
  const response = await fetch("https://api.github.com/users/palenquer");
  const userInfo = await response.json();
  return { userInfo };
};

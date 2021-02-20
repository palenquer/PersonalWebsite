import Image from "next/image";

const Background = () => {
  return (
    <figure>
      <Image
        layout="fill"
        className="object-center object-cover pointer-events-none opacity-20"
        src="/background.jpg"
        alt="Background Image"
        priority
      />
    </figure>
  );
};

export default Background;

import Image from "next/image";

const ProjectImage = ({src, alt, onMouseEnter, onMouseLeave, className}) => {
  return (
    <figure className={className}>
      <Image
        layout="responsive"
        width={300}
        height={200}
        quality={100}
        src={src}
        alt={alt}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </figure>
  );
}

export default ProjectImage;

import Image from 'next/image';

type Props = { src: string; alt: string };

const AuthorImage = ({ src, alt }: Props) => {
  return (
    <div className="relative w-64 h-64 group sm:w-auto sm:h-auto">
      <Image
        src={src}
        alt={alt}
        width={300}
        height={400}
        className="rounded shadow-xl"
      />
      <div className="absolute inset-0"></div>
    </div>
  );
};

export default AuthorImage;

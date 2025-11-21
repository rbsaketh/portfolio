// src/components/AuthorImage.tsx
import Image from 'next/image';

type AuthorImageProps = {
  src: string;
  alt: string;
};

const AuthorImage = ({ src, alt }: AuthorImageProps) => {
  return (
    <div
      className="
        relative
        w-80           /* ~240px wide */
        h-96            /* ~320px tall */
        overflow-hidden
        rounded-2xl
        shadow-lg
      "
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="240px"
        className="object-cover scale-120 transform"
        priority
      />
    </div>
  );
};

export default AuthorImage;

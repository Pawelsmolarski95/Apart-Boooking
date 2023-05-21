"use client";

import Image from "next/image";
interface AvatarProps {
  src: string | undefined | null;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      alt="avatar"
      className="rounded-full "
      height={30}
      width={30}
      src={src || "/images/placeholder.jpeg"}
    />
  );
};

export default Avatar;

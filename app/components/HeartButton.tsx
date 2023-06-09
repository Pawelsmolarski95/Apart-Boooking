import React from "react";
import { SafeUser } from "../types";
import {
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import useFavorite from "../hooks/useFavorite";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
 const { hasFavorite, toggleFavorite} = useFavorite({ listingId,currentUser});
  return (
    <div
      className="relative cursor-pointer transition hover:opacity-80"
      onClick={toggleFavorite}
    >
      <AiOutlineHeart
        size={28}
        className="absolute -right-[2px] -top-[2px] fill-white"
      />
      <AiFillHeart
        size={24}
        className={
          hasFavorite
            ? "fill-rose-500"
            : "fill-neutral-500/70"
        }
      />
    </div>
  );
};

export default HeartButton;

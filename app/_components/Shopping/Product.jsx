"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/lib/auth"; // Import the utility function

function Product({
  name,
  rate,
  id,
  sold,
  price,
  discount,
  img,
  imgClass,
  cardClass,
  state,
}) {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  console.log(id);
  const handleHeartClick = (e) => {
    e.preventDefault();
    if (!isLoggedIn()) {
      toast("You need to log in to add this item to your favorites");
      router.push("/login");
    } else {
      setIsHeartFilled(!isHeartFilled);
    }
  };

  const handleLinkClick = (e) => {
    if (!isLoggedIn()) {
      e.preventDefault();
      toast("You need to log in to view the details of this item");
      router.push("/login");
    }
  };

  return (
    <Link href={`/details/${id}`} onClick={handleLinkClick}>
      <div className="flex items-center gap-2 mt-4">
        <div className={`${imgClass} rounded-2xl bg-white shadow-md p-2`}>
          <div
            className={`w-full ${cardClass} bg-gray-400 rounded-xl relative`}
          >
            <Image
              className="rounded-xl"
              width={0}
              height={0}
              sizes="100vw"
              objectFit="cover"
              fill
              src={img}
            />
            <span
              className="absolute top-1 right-1 bg-white py-1 px-2 rounded-full cursor-pointer"
              onClick={handleHeartClick}
            >
              <Heart
                className={`w-4 ${
                  isHeartFilled ? "text-red-500" : "text-gray-400"
                }`}
                fill={isHeartFilled ? "red" : "none"}
              />
            </span>

            {state === "JUST IN" && (
              <span className="absolute top-2 left-2 font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                JUST IN
              </span>
            )}
            {state === "Sold out" && (
              <span className="absolute top-2 left-2 font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                SOLD OUT
              </span>
            )}
          </div>
          <div className="content flex flex-col gap-1">
            <h5 className="font-semibold">{name}</h5>
            <span className="flex gap-1">
              <Star fill="yellow" strokeWidth={0} className="w-4" />
              <span className="flex items-center gap-2">
                <span className="text-xs font-medium">{rate}</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-500 font-light text-xs">
                  {sold} items sold
                </span>
              </span>
            </span>
            <h6 className="text-xs font-medium text-gray-300">
              {discount ? "Rials" : ""} {discount}
            </h6>
            <h5 className="font-semibold">Rials {price}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;

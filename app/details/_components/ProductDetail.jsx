"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import product from "../_images/p-2.webp";
import brand from "../_images/nike.png";
import verify from "../_images/verify.png";
import { CircleCheck, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

function ProductDetail({
  dName,
  dPrice,
  dBrand,
  dSold,
  dSizes,
  dImg,
  dDiscount,
  details,
}) {
  const [selectedSize, setSelectedSize] = useState(dSizes ? dSizes[0] : null);
  const [imageUrls, setImageUrls] = useState([]);
  const [mainImage, setMainImage] = useState(dImg); // State for the main image
  const discountedPrice = dPrice - (dPrice * dDiscount) / 100;

  useEffect(() => {
    if (details?.attributes?.image?.data) {
      const urls = details.attributes.image.data.map(
        (img) => process.env.NEXT_PUBLIC_STRAPI_URL + img.attributes.url
      );
      setImageUrls(urls);
      console.log(urls);
    } else {
      console.log("No images found");
    }
  }, [details]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <div className="col-span-1 md:col-span-1 lg:col-span-1 p-4">
        <div className="flex flex-col gap-2">
          <div className="w-full h-[300px] relative rounded-lg">
            <img
              src={mainImage}
              alt="Main product image"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="flex items-center justify-between mt-2 gap-4 sm:gap-0">
            {imageUrls.map((img, index) => (
              <div
                key={index}
                className="w-32 sm:w-20 h-[90px] relative rounded-lg"
                onClick={() => setMainImage(img)} // Update main image on click
              >
                <img
                  src={img}
                  alt={`Product thumbnail ${index + 1}`}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-1 lg:col-span-2 p-4">
        <h2 className="font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
          NEW ARRIVAL!
        </h2>
        <h1 className="font-semibold text-3xl mt-2">{dName}</h1>
        <span className="flex items-center gap-3 mt-4">
          <div className="relative rounded-full h-10 w-10 border-2 border-gray-200">
            <img
              src={brand}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <h3 className="font-semibold flex items-center gap-2">
            {dBrand} <Image src={verify} width={17} height={17} />
            <span className="text-gray-300">•</span>
            <Star fill="yellow" strokeWidth={0} className="w-4" />
            <span className="text-xs font-medium">4.9</span>
            <span className="text-gray-500 font-light text-xs">
              (1290 Reviews)
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-500 font-light text-xs">
              {dSold} Sold
            </span>
          </h3>
        </span>
        <h1 className="font-semibold text-2xl mt-5">
          {dDiscount ? discountedPrice : dPrice} R
        </h1>

        <div className="flex flex-col space-y-7 mt-10 md:mt-0 lg:mt-10">
          <div>
            <h3 className="font-semibold text-lg">Available Size</h3>
            <div className="flex items-center gap-4 mt-4">
              {dSizes?.map((size) => (
                <span
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`cursor-pointer relative w-[120px] flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-lg font-semibold text-lg ${
                    selectedSize === size ? "text-white" : "text-gray-400"
                  }`}
                >
                  {size}
                  {selectedSize === size && (
                    <CircleCheck className="absolute top-2 right-2 text-white" />
                  )}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-14">
            <Button className="px-10 py-2 bg-black text-white rounded-full">
              Buy Now
            </Button>
            <Button className="px-10 py-2 bg-black text-white rounded-full flex items-center gap-2">
              <ShoppingBag />
              Add To Bag
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

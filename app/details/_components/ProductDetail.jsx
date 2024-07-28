"use client";

import React, { useState, useEffect } from "react";
import { CircleCheck, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BeatLoader } from "react-spinners";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToShop } from "@/redux/features/shop-slice";
import { addToCart } from "@/redux/features/cart-slice";
import verify from "../_images/verify.png";

function ProductDetail({
  dName,
  dPrice,
  dBrand,
  dSold,
  dSizes,
  dImg,
  dDiscount,
  details,
  dbrandLogo,
}) {
  const [selectedSize, setSelectedSize] = useState(dSizes ? dSizes[0] : null);
  const [imageUrls, setImageUrls] = useState([]);
  const [mainImage, setMainImage] = useState(dImg);
  const [loading, setLoading] = useState(true);
  const discountedPrice = dPrice - (dPrice * dDiscount) / 100;
  const dispatch = useDispatch();

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  useEffect(() => {
    if (details?.attributes?.image?.data) {
      const urls = details.attributes.image.data.map(
        (img) => process.env.NEXT_PUBLIC_STRAPI_URL + img.attributes.url
      );
      setImageUrls(urls);
      if (urls.length > 0) {
        setMainImage(urls[0]); // Set the first image as the main image
      }
    } else {
      console.log("No images found");
    }
  }, [details]);

  const handleAddToCart = () => {
    const item = {
      image: mainImage,

      id: details?.id,
      name: dName,
      price: dDiscount ? discountedPrice : dPrice,
      size: selectedSize,
    };
    dispatch(addToCart(item));
  };

  const handleShop = () => {
    dispatch(
      addToShop({
        image: dImg,
        name: dName,
        price: dPrice,
        brand: dBrand,
        size: selectedSize,
      })
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <div className="col-span-1 md:col-span-1 lg:col-span-1 p-4">
        <div className="flex flex-col gap-2">
          <div className="w-full h-[300px] relative rounded-lg bg-gray-200 flex items-center justify-center">
            {loading && (
              <BeatLoader
                color="#F66E14"
                loading={loading}
                cssOverride={override}
                size={40}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            )}
            <img
              src={mainImage}
              alt="Main product image"
              className={`rounded-lg object-cover w-full h-full ${
                loading ? "hidden" : "block"
              }`}
              onLoad={() => setLoading(false)}
            />
          </div>
          <div className="flex items-center justify-between mt-2 gap-4 sm:gap-0">
            {imageUrls.map((img, index) => (
              <div
                key={index}
                className="w-32 sm:w-20 h-[90px] relative rounded-lg"
                onClick={() => {
                  setMainImage(img);
                  setLoading(true); // Show loading spinner until the new image loads
                }}
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
          <div className="relative rounded-full h-10 w-10 border-2 border-gray-200 overflow-hidden">
            <img src={dbrandLogo} className="object-contain w-full h-full" />
          </div>

          <h3 className="font-semibold flex items-center gap-2">
            {dBrand} <img src={verify} width={17} height={17} />
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
                    selectedSize === size ? "text-white" : "text-gray-200"
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
            {selectedSize ? (
              <Link href={`${details?.id}/payment`}>
                <Button
                  onClick={handleShop}
                  className="px-10 py-2 bg-black text-white rounded-full"
                >
                  Buy Now
                </Button>
              </Link>
            ) : (
              <Button
                disabled
                className="px-10 py-2 bg-black text-white rounded-full"
              >
                Buy Now
              </Button>
            )}
            <Button
              className="px-10 py-2 bg-black text-white rounded-full flex items-center gap-2"
              onClick={handleAddToCart}
              disabled={!selectedSize}
            >
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

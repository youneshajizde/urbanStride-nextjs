import React from "react";
import Image from "next/image";
import banner from "../_images/banner.webp";
import { Button } from "@/components/ui/button";
function Advertise() {
  return (
    <div className="w-full h-[350px] bg-slate-900 rounded-3xl mt-16 relative">
      <Image
        className="rounded-3xl"
        src={banner}
        width={0}
        height={0}
        sizes="100vw"
        objectFit="cover"
        fill
        alt="Banner Image"
      />
      <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
      <div className="absolute inset-0 flex flex-col gap-6 justify-center items-center text-white p-4">
        <h2 className="text-4xl font-semibold mb-2">
          BRINGING YOU TO UPDATE FANTASTIC URBANSTRIDE
        </h2>
        <p className="text-lg">Discover the best products and offers here</p>
        <Button
          className="rounded-full font-semibold p-5 text-black"
          variant="outline"
        >
          More about us
        </Button>
      </div>
    </div>
  );
}

export default Advertise;

import React from "react";
import Image from "next/image";
function InnerBrandCardImg({ img }) {
  return (
    <div className="bg-gray-300 flex justify-center items-center h-[100px] rounded-xl relative">
      <Image
        src={img}
        alt="Brand"
        width={0}
        height={0}
        sizes="100vw"
        objectFit="cover"
        fill
        className="rounded-xl "
      />
    </div>
  );
}

export default InnerBrandCardImg;

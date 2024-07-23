import React from "react";
import Image from "next/image";
function InnerBrandCardImg({ img }) {
  return (
    <div className="bg-gray-300 flex justify-center items-center h-[100px] rounded-xl relative">
      <Image
        src={img}
        alt="Brand"
        width={0} // Set to a fixed size for better control
        height={0} // Set to a fixed size for better control
        sizes="100vw"
        objectFit="cover"
        fill
        className="rounded-xl "
      />
    </div>
  );
}

export default InnerBrandCardImg;

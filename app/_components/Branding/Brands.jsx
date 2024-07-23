"use client";

import React, { useEffect, useState } from "react";
import BrandCard from "./BrandCard";
import GlobalApi from "@/lib/GlobalApi";

function Brands() {
  const [allBrands, setAllBrands] = useState([]);

  const getBrandsList = () => {
    GlobalApi.getBrands().then((resp) => {
      setAllBrands(resp.data.data);
    });
  };

  useEffect(() => {
    getBrandsList();
  }, []);

  const items = allBrands.map((category, index) => {
    const logoUrl = category?.attributes?.logo?.data[0]?.attributes?.url;
    const fullUrl = logoUrl
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${logoUrl}`
      : "";
    return (
      <BrandCard
        key={index}
        title={category?.attributes?.brand}
        logo={fullUrl}
      />
    );
  });
  return (
    <section className="mt-24 mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-semibold">
          The Official Store Of The Amazing Brand
        </h1>
        <p className="text-sm text-gray-500">
          We work together with high-quality brands and their stockholders
          around the world
          <br /> in order to deliver the best product you may desire
        </p>
      </div>

      <div className="flex justify-center items-center gap-6 mt-10 mx-auto  flex-wrap">
        {items}
      </div>
    </section>
  );
}

export default Brands;

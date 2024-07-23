import React, { useEffect, useState } from "react";
import InnerBrandCardImg from "./InnerBrandCardImg";
import GlobalApi from "@/lib/GlobalApi";

function InnerBrandCard() {
  const [allProducts, setAllProducts] = useState([]);

  const getAllBrandProducts = () => {
    GlobalApi.getAllProducts().then((resp) => {
      setAllProducts(resp.data.data);
    });
  };
  useEffect(() => {
    getAllBrandProducts();
  }, []);

  const items = allProducts
    .slice(0, 4)
    .map((product, index) => (
      <InnerBrandCardImg
        key={index}
        img={
          process.env.NEXT_PUBLIC_STRAPI_URL +
          product?.attributes?.image?.data[0]?.attributes?.url
        }
      />
    ));

  return <div className="grid grid-cols-2 gap-2 mt-3">{items}</div>;
}

export default InnerBrandCard;

"use client";

import { ChevronRight, MoveLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import product from "../_images/p-2.webp";
import Paths from "../_components/Paths";
import ProductDetail from "../_components/ProductDetail";
import Information from "../_components/information/Information";
import GlobalApi from "@/lib/GlobalApi";
function page({ params }) {
  const [details, setDetails] = useState(null);
  const [brandDetails, setBrandDetails] = useState([]);
  useEffect(() => {
    if (params?.id) {
      fetchProductDetails();
    }
    fetchCategories();
  }, [params?.id]);

  const fetchProductDetails = async () => {
    try {
      const resp = await GlobalApi.getProductById(params.id);
      setDetails(resp.data.data);
    } catch (error) {
      console.error("Failed to fetch product details:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      GlobalApi.getBrands().then((resp) => {
        setBrandDetails(resp.data.data);
      });
    } catch (error) {
      console.log("failed to fetch categories details:", error);
    }
  };
  useEffect(() => {
    if (brandDetails.length > 0) {
      console.log(
        process.env.NEXT_PUBLIC_STRAPI_URL + brandDetails[0].attributes
      ); 
    }
  }, [brandDetails]);

  return (
    <main className="w-[94%] mx-auto ">
      <Paths details={details?.attributes?.name} />
      <ProductDetail
        dName={details?.attributes?.name}
        dPrice={details?.attributes?.price}
        dBrand={details?.attributes?.brand}
        dSold={details?.attributes?.soldamount}
        dSizes={details?.attributes?.shoeSize?.shoeSizes}
        dImg={
          process.env.NEXT_PUBLIC_STRAPI_URL +
          details?.attributes?.image?.data?.[0]?.attributes?.url
        }
        details={details}
        dDiscount={details?.attributes?.discount}
        dbrandLogo={brandDetails}
      />

      <Information details={details} />
    </main>
  );
}

export default page;

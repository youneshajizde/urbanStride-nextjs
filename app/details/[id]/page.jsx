import { ChevronRight, MoveLeft } from "lucide-react";
import React from "react";
import Image from "next/image";
import product from "../_images/p-2.webp";
import Paths from "../_components/Paths";
import ProductDetail from "../_components/ProductDetail";
import Information from "../_components/information/Information";
function page({ params }) {
  return (
    <main className="w-[94%] mx-auto ">
      <Paths />
      <ProductDetail />
      <Information />
    </main>
  );
}

export default page;

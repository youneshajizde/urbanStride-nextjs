"use client";
import React, { useEffect, useState } from "react";
import Product from "./Shopping/Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GlobalApi from "@/lib/GlobalApi";
function DailyDeals() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,

    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [newProducts, setNewProducts] = useState([]);
  const getDailyDealsList = () => {
    GlobalApi.getDailyDeals().then((resp) => {
      const discountedProducts = resp.data.data.filter(
        (product) => product.attributes.discount > 0
      );
      setNewProducts(discountedProducts);
    });
  };
  useEffect(() => {
    getDailyDealsList();
  }, []);

  const items = newProducts.map((product) => {
    const { price, discount } = product.attributes;
    const discountedPrice = price - (price * discount) / 100;

    return (
      <Product
        key={product.id}
        id={product.id}
        name={product.attributes.name}
        rate={product.attributes.rate}
        sold={product.attributes.soldamount}
        discount={product.attributes.price}
        price={discountedPrice.toFixed(0)}
        img={
          process.env.NEXT_PUBLIC_STRAPI_URL +
          product?.attributes?.image?.data[0]?.attributes?.url
        }
        imgClass={"w-[200px]"}
        cardClass={"h-28"}
      />
    );
  });
  return (
    <section className=" bg-gray-100 rounded-3xl w-full mt-4 p-4 ">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">Today Best Deals!</h3>
        <span className="bg-gradient-to-r from-orange-500 to-orange-700 rounded-full py-1 px-3 text-white font-medium text-sm">
          Ends in : 12 : 09 : 38
        </span>
      </div>

      <Slider {...settings}>{items}</Slider>
    </section>
  );
}

export default DailyDeals;

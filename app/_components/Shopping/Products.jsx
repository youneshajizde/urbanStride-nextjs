import React from "react";
import Product from "./Product";

function Products({ products, visibleCount, showMore }) {
  const items = products
    .slice(0, visibleCount)
    .map((product) => (
      <Product
        key={product.id}
        id={product.id}
        name={product.attributes.name}
        rate={product.attributes.rate}
        sold={product.attributes.soldamount}
        price={product.attributes.price}
        img={
          process.env.NEXT_PUBLIC_STRAPI_URL +
          product?.attributes?.image?.data?.[0]?.attributes?.url
        }
        imgClass={"w-[300px]"}
        cardClass={"h-52"}
        state={product.attributes.state}
      />
    ));

  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center">
        {items}
      </div>
      {visibleCount < products.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={showMore}
            className="px-4 rounded-full py-2 bg-black text-white hover:bg-gray-800 transition duration-200 mt-5"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default Products;

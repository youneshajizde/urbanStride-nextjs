"use client";

import React, { useEffect, useState } from "react";
import Products from "./Products";
import Filters from "./Filters";
import GlobalApi from "@/lib/GlobalApi";

function Shop() {
  const [allProducts, setAllProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const getProducts = async () => {
    let allProducts = [];
    let page = 1;
    let pageSize = 25;
    let total = 0;

    try {
      do {
        const response = await GlobalApi.getAllProducts(page, pageSize);
        const data = response.data;
        total = data.meta.pagination.total;
        allProducts = [...allProducts, ...data.data];
        page += 1;
      } while (allProducts.length < total);

      const uniqueProducts = Array.from(
        new Map(allProducts.map((product) => [product.id, product])).values()
      );
      setAllProducts(uniqueProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const showMore = () => {
    setVisibleCount(visibleCount + 8);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleGroupChange = (group) => {
    setSelectedGroup(group);
  };

  const filteredProducts = allProducts.filter((product) => {
    const matchesBrand =
      !selectedBrand || product.attributes.brand === selectedBrand;
    const matchesPrice =
      !selectedPrice ||
      (selectedPrice === "Lowest" && product.attributes.price < 600000) ||
      (selectedPrice === "Mid" &&
        product.attributes.price >= 600000 &&
        product.attributes.price <= 900000) ||
      (selectedPrice === "Highest" && product.attributes.price > 900000);
    const matchesSize =
      !selectedSize || product.attributes.shoeSize.shoeSizes.includes(parseInt(selectedSize));
    const matchesColor =
      !selectedColor || product.attributes.color === selectedColor;
    const matchesGroup =
      !selectedGroup || product.attributes.gender.toLowerCase() === selectedGroup;

    return matchesBrand && matchesPrice && matchesSize && matchesColor && matchesGroup;
  });

  return (
    <section className="mt-24">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-semibold">Shop Now, Goodlook Later</h1>
        <p className="text-sm text-gray-500">
          We have a bunch of collections for you! Let's go explore and <br />{" "}
          find your dream shoes, make it happen
        </p>
      </div>

      <Filters
        onBrandChange={handleBrandChange}
        onPriceChange={handlePriceChange}
        onSizeChange={handleSizeChange}
        onColorChange={handleColorChange}
        onGroupChange={handleGroupChange}
      />

      <div className="mx-auto">
        <Products
          products={filteredProducts}
          visibleCount={visibleCount}
          showMore={showMore}
        />
      </div>
    </section>
  );
}

export default Shop;

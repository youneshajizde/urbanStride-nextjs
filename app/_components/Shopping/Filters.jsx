"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SlidersHorizontal } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import shoeSizes from "@/lib/shoeSizes";
import GlobalApi from "@/lib/GlobalApi";

function Filters({
  onBrandChange,
  onPriceChange,
  onSizeChange,
  onColorChange,
  onGroupChange,
}) {
  const [categories, setCategories] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("Brand");
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const getCats = () => {
    GlobalApi.getBrands().then((resp) => {
      setCategories(resp.data.data);
    });
  };

  useEffect(() => {
    getCats();
  }, []);

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    onBrandChange(brand);
  };

  const handlePriceSelect = (price) => {
    onPriceChange(price);
  };

  const handleSizeSelect = (size) => {
    onSizeChange(size);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    onColorChange(color);
  };

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
    onGroupChange(group);
  };

  const handleReset = () => {
    setSelectedBrand("Brand");
    onBrandChange(null);
    onPriceChange(null);
    onSizeChange(null);
    setSelectedColor(null);
    onColorChange(null);
    setSelectedGroup(null);
    onGroupChange(null);
  };

  return (
    <div className="filters flex items-center gap-2 bg-white border-2 rounded-full max-w-[550px] h-16 mx-auto mt-7 p-3">
      <Select onValueChange={handleBrandSelect}>
        <SelectTrigger className="w-[170px] rounded-full bg-gray-200 font-semibold">
          <SelectValue placeholder="Brand" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category, index) => (
            <SelectItem key={index} value={category?.attributes?.brand}>
              <div className="flex items-center gap-1">
                <Image
                  src={
                    process.env.NEXT_PUBLIC_STRAPI_URL +
                    category?.attributes?.logo?.data[0]?.attributes?.url
                  }
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="w-6"
                  objectFit="cover"
                />
                <span>{category?.attributes?.brand}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={handlePriceSelect}>
        <SelectTrigger className="w-[120px] rounded-full bg-gray-200">
          <SelectValue placeholder="Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Lowest">Lowest</SelectItem>
          <SelectItem value="Mid">Mid</SelectItem>
          <SelectItem value="Highest">Highest</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={handleSizeSelect}>
        <SelectTrigger className="w-[120px] rounded-full bg-gray-200">
          <SelectValue placeholder="Sizes" />
        </SelectTrigger>
        <SelectContent>
          {shoeSizes.map((size) => (
            <SelectItem key={size.value} value={size.value}>
              {size.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Popover>
        <PopoverTrigger asChild className="bg-gray-200 rounded-full">
          <Button
            variant="outline"
            className="flex items-center gap-1 rounded-full"
          >
            More Filters{" "}
            <SlidersHorizontal className="font-semibold w-4 text-gray-700" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <h6 className="text-sm font-semibold mb-2">Choose a color</h6>

          <RadioGroup
            defaultValue={selectedColor}
            onValueChange={handleColorSelect}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="white" id="color-white" />
              <Label htmlFor="color-white">White</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="black" id="color-black" />
              <Label htmlFor="color-black">Black</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="green" id="color-green" />
              <Label htmlFor="color-green">Green</Label>
            </div>
          </RadioGroup>

          <h6 className="text-sm font-semibold mb-2 mt-4">Choose a Group</h6>

          <RadioGroup
            defaultValue={selectedGroup}
            onValueChange={handleGroupSelect}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="men" id="group-male" />
              <Label htmlFor="group-male">Men</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="women" id="group-woman" />
              <Label htmlFor="group-woman">Women</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="kids" id="group-kids" />
              <Label htmlFor="group-kids">Kids</Label>
            </div>
          </RadioGroup>
        </PopoverContent>
      </Popover>
      <button
        onClick={handleReset}
        className="rounded-full bg-gray-200 text-black hover:bg-gray-100 py-2 px-4 font-normal"
      >
        Reset
      </button>
    </div>
  );
}

export default Filters;

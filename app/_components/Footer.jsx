import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 p-6 text-white h-auto lg:h-[400px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-[length:200%_200%] animate-gradient-bg">
      <div className="col-span-1 lg:col-span-2 p-4">
        <div className="flex flex-col justify-between h-full">
          <div className="space-y-4">
            <h2 className="flex items-baseline space-x-1">
              <span className="text-sm font-medium">urban</span>
              <span className="font-semibold text-lg">Stride</span>
            </h2>
            <p className="text-xs">
              UrbanStride has been the middle-man for shoes across the globe
              since 2006. Since 2024, our course of action has turned
              tremendously due to mainly the help of our stockholders.
            </p>
          </div>
          <div className="bg-slate-700 rounded-2xl p-4 mt-6 lg:mt-0">
            <h1 className="font-semibold text-lg text-white">
              Don't Wanna Miss Our Offers?
            </h1>
            <p className="text-white text-xs mt-2">
              Drop all you got and subscribe to our newsletter to get
              notifications every now and then for free!
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Input
                type="text"
                placeholder="Enter your email"
                className="w-full py-2.5 px-3 text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
              />
              <Button className="bg-white text-black rounded-full font-semibold px-4 py-2">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1 p-4">
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Products</h2>
          <ul className="space-y-2 text-sm">
            <li>Shoes</li>
            <li>Sandals</li>
            <li>New arrivals</li>
            <li>Sale</li>
            <li>Start selling</li>
          </ul>
        </div>
      </div>

      <div className="col-span-1 p-4">
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Information</h2>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

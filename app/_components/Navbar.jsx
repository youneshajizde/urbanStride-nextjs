"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Bell, CircleX, Menu, ShoppingBag, SquareX, Star } from "lucide-react";
import avatar from "../_images/avatar.jpg";
import verify from "../_images/verify.png";
import notifPhoto from "../_images/p-2.webp";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import guest from "../_images/avatar-u.webp";
import Notification from "./Popovers/Notification";
import Cart from "./Popovers/Cart";
import GlobalApi from "@/lib/GlobalApi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showBadge, setShowBadge] = useState(false);

  const getProducts = () => {
    GlobalApi.getAllProducts().then((resp) => {
      setAllProducts(resp.data.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const token = sessionStorage.getItem("jwt");
    const user = JSON.parse(sessionStorage.getItem("user"));
    setIsLogged(!!token);
    if (user) {
      setUsername(user.username);
      setShowBadge(true);
    }
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value) {
      const filtered = allProducts.filter((product) =>
        product.attributes.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNotificationOpen = () => {
    setShowBadge(false); // Remove the badge when the notification popover is opened
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between w-full gap-7 py-4 px-10 shadow-sm">
        <Link href={"/"}>
          <h2>
            <span className="text-sm font-medium">urban</span>
            <span className="font-semibold text-lg">Stride</span>
          </h2>
        </Link>

        <div className="w-[600px] relative">
          <Input
            className="rounded-full w-full  outline-none focus:outline-none focus:ring-0"
            placeholder="try 'NIKE air jordan'"
            value={search}
            onChange={handleSearch}
          />
          {filteredProducts.length > 0 && (
            <div className="result-div absolute w-full max-h-[300px] rounded-xl bg-white shadow-lg z-30 mt-2 overflow-y-auto transition-transform transform scale-y-0 origin-top animate-open">
              <h3 className="text-md font-semibold p-3">
                Search Result ({filteredProducts.length})
              </h3>
              <hr className="border-gray-200" />
              <div className="p-3">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between mb-2"
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        sizes="100vw"
                        width={0}
                        height={0}
                        objectFit="cover"
                        className="w-[4.4rem] h-[4rem] rounded-lg"
                        src={
                          process.env.NEXT_PUBLIC_STRAPI_URL +
                          product.attributes.image.data[0].attributes.url
                        }
                        alt={product.attributes.name}
                      />
                      <span className="flex flex-col font-semibold">
                        <h3>{product.attributes.name}</h3>
                        <h6>{product.attributes.price.toLocaleString()}</h6>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <Popover onOpenChange={handleNotificationOpen}>
            <PopoverTrigger asChild className="relative">
              <Button
                variant="outline"
                className="flex items-center gap-1 rounded-full"
              >
                <Bell className="font-semibold w-4 text-gray-700" />
                {showBadge && (
                  <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-500 text-white text-xs font-bold rounded-full text-center leading-none">
                    1
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <div className="flex items-center justify-between text-gray-500 p-2">
                <h4 className="text-md">Notification</h4> <CircleX />
              </div>
              <hr />
              <div className="p-2">
                <h3 className="text-gray-500 font-medium text-xs">TODAY</h3>
                <div className="space-y-1 mt-2">
                  <h4 className="text-sm font-semibold flex items-center gap-1">
                    UrbanStride <Image src={verify} width={17} height={17} />
                  </h4>
                  <p className="text-gray-500 text-xs font-medium flex items-center gap-1">
                    You have logged in successfully Jonas Galliard! Don't miss
                    our special offers
                  </p>
                  <div className="flex gap-2 border border-gray-200 w-full h-[80px] rounded-lg p-2">
                    <div className="w-[30%] h-full bg-gray-300 rounded-md relative">
                      <Image
                        src={notifPhoto}
                        width={0}
                        height={0}
                        sizes="100vw"
                        objectFit="cover"
                        fill
                        className="rounded-md"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-xs font-semibold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                        Special offer
                      </h2>
                      <h5 className="text-sm font-semibold mt-1">
                        New Balance Br
                      </h5>
                      <span className="flex gap-1">
                        <Star fill="yellow" strokeWidth={0} className="w-4" />
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-medium">5</span>
                          <span className="text-gray-300">•</span>
                          <span className="text-gray-500 font-light text-xs">
                            8 items sold
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Cart />

          <Link href={"/login"}>
            <span className="flex items-center gap-2">
              <Image
                width={0}
                height={0}
                objectFit="cover"
                className="w-7 h-7 rounded-full"
                src={isLogged ? avatar : guest}
                alt=""
              />
              <span className="text-xs font-medium">
                {isLogged ? username : "Guest"}
              </span>
            </span>
          </Link>
        </div>
        <Menu className="sm:hidden w-8 h-8" onClick={toggleMenu} />
      </div>

      <div
        className={`fixed top-0 left-0 w-64 bg-white h-full shadow-lg z-10 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start gap-4 p-4">
          <Popover>
            <PopoverTrigger asChild className="bg-gray-200 rounded-full w-full">
              <Button
                variant="outline"
                className="flex items-center gap-1 rounded-full w-full"
              >
                <Bell className="font-semibold w-4 text-gray-700" />
                <span className="ml-2">Notifications</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <div className="flex items-center justify-between text-gray-500 p-2">
                <h4 className="text-md">Notification</h4> <CircleX />
              </div>
              <hr />
              <div className="p-2">
                <h3 className="text-gray-500 font-medium text-xs">TODAY</h3>
                <div className="space-y-1 mt-2">
                  <h4 className="text-sm font-semibold flex items-center gap-1">
                    UrbanStride <Image src={verify} width={17} height={17} />
                  </h4>
                  <p className="text-gray-500 text-xs font-medium flex items-center gap-1">
                    You have logged in successfully Jonas Galliard! Don't miss
                    our special offers
                  </p>
                  <div className="flex gap-2 border border-gray-200 w-full h-[80px] rounded-lg p-2">
                    <div className="w-[30%] h-full bg-gray-300 rounded-md relative">
                      <Image
                        src={notifPhoto}
                        width={0}
                        height={0}
                        sizes="100vw"
                        objectFit="cover"
                        fill
                        className="rounded-md"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-xs font-semibold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                        Special offer
                      </h2>
                      <h5 className="text-sm font-semibold mt-1">
                        New Balance Br
                      </h5>
                      <span className="flex gap-1">
                        <Star fill="yellow" strokeWidth={0} className="w-4" />
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-medium">5</span>
                          <span className="text-gray-300">•</span>
                          <span className="text-gray-500 font-light text-xs">
                            8 items sold
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild className="bg-gray-200 rounded-full w-full">
              <Button
                variant="outline"
                className="flex items-center gap-1 rounded-full w-full"
              >
                <h3 className="flex items-center gap-2 rounded-full md:py-2 md:px-2 py-2 px-3 text-xs font-medium">
                  <ShoppingBag className="w-4" />
                  <span className="text-xs hidden lg:block">2 items</span>
                </h3>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0">
              <div className="flex items-center justify-between text-gray-500 p-2">
                <h4 className="text-md">Your Basket</h4> <CircleX />
              </div>
              <hr />
              <div className="p-2">
                <div className="flex justify-between">
                  <div className="flex gap-2 border border-gray-200 w-full h-[100px] rounded-lg p-2">
                    <div className="w-[30%] h-full bg-gray-300 rounded-md relative">
                      <Image
                        src={notifPhoto}
                        width={0}
                        height={0}
                        sizes="100vw"
                        objectFit="cover"
                        fill
                        className="rounded-md"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h5 className="text-sm font-semibold mt-1">
                        New Balance Br
                      </h5>
                      <span className="flex gap-1">
                        <Star fill="yellow" strokeWidth={0} className="w-4" />
                        <span className="flex items-center gap-2">
                          <span className="text-xs font-medium">5</span>
                          <span className="text-gray-300">•</span>
                          <span className="text-gray-500 font-light text-xs">
                            8 items sold
                          </span>
                        </span>
                      </span>
                      <h3 className="text-xs text-gray-500 font-semibold">
                        Size: Medium
                      </h3>
                      <span className="flex justify-between items-center w-full">
                        <h3 className="text-xs font-semibold mt-1">$500</h3>
                        <SquareX className="w-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Link href={"/profile"}>
            <span className="flex items-center gap-2">
              <Image
                width={0}
                height={0}
                objectFit="cover"
                className="w-7 h-7 rounded-full"
                src={isLogged ? avatar : guest}
                alt=""
              />
              <span className="text-xs font-medium">
                {isLogged ? username : "Guest"}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

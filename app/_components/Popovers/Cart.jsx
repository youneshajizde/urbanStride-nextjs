"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CircleX, ShoppingBag, SquareX } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/features/cart-slice";
import { isLoggedIn } from "@/lib/auth";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <Popover>
      <PopoverTrigger asChild className="bg-gray-200 rounded-full">
        <Button
          variant="outline"
          className="flex items-center gap-1 rounded-full"
        >
          <h3 className="flex items-center gap-2 rounded-full md:py-2 md:px-2 py-2 px-3 text-xs font-medium">
            <ShoppingBag className="w-4" />
            <span className="text-xs hidden lg:block">
              {cartItems.length} items
            </span>
          </h3>
        </Button>
      </PopoverTrigger>
      {!isLoggedIn() ? (
        ""
      ) : (
        <PopoverContent className="w-80 p-0">
          <div className="flex items-center justify-between text-gray-500 p-2">
            <h4 className="text-md">Your Basket</h4> <CircleX />
          </div>
          <hr />
          <div className="p-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between mb-4 border border-gray-200 w-full h-[100px] rounded-lg p-2"
              >
                <div className="w-[30%] h-full bg-gray-300 rounded-md relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    objectFit="cover"
                    fill
                    className="rounded-md"
                  />
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <h5 className="text-sm font-semibold mt-1">{item.name}</h5>
                  <span className="font-bold">{item.price}</span>
                  <div className="flex items-center"></div>
                </div>
                <div className="flex items-center justify-center">
                  <SquareX
                    className="text-gray-500 cursor-pointer"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  />
                </div>
              </div>
            ))}
          </div>
        </PopoverContent>
      )}
    </Popover>
  );
}

export default Cart;

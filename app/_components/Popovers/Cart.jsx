import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CircleX, ShoppingBag, SquareX } from "lucide-react";
import Image from "next/image";
import React from "react";
import { isLoggedIn } from "@/lib/auth";

function Cart() {
  return (
    <Popover>
      <PopoverTrigger asChild className="bg-gray-200 rounded-full">
        <Button
          variant="outline"
          className="flex items-center gap-1 rounded-full"
        >
          <h3 className="flex items-center gap-2 rounded-full md:py-2 md:px-2 py-2 px-3 text-xs font-medium">
            <ShoppingBag className="w-4" />
            <span className="text-xs hidden lg:block">2 items</span>
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
            <div className="flex justify-between">
              <div className="flex gap-2 border border-gray-200 w-full h-[100px] rounded-lg p-2">
                <div className="w-[30%] h-full bg-gray-300 rounded-md relative">
                  <Image
                    //   src={notifPhoto}
                    width={0}
                    height={0}
                    sizes="100vw"
                    objectFit="cover"
                    fill
                    className="rounded-md"
                  />
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <h5 className="text-sm font-semibold mt-1">New Balance Br</h5>
                  <span className="font-bold">1,200,000</span>
                  <div className="flex items-center">
                    <div className="p-1 rounded-lg flex items-center space-x-3">
                      <button className="bg-slate-800 text-white px-2 rounded hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                        -
                      </button>
                      <span className="text-xs font-semibold">0</span>
                      <button className="bg-slate-800 text-white px-2 rounded hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <SquareX className="text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </PopoverContent>
      )}
    </Popover>
  );
}

export default Cart;

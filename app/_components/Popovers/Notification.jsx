import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bell, CircleX, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { isLoggedIn } from "@/lib/auth";
function Notification() {
  return (
    <Popover>
      <PopoverTrigger asChild className="bg-gray-200 rounded-full">
        <Button
          variant="outline"
          className="flex items-center gap-1 rounded-full"
        >
          <Bell className="font-semibold w-4 text-gray-700" />
        </Button>
      </PopoverTrigger>
      {!isLoggedIn() ? (
        ""
      ) : (
        <PopoverContent className="w-80 p-0">
          <div className="flex items-center justify-between text-gray-500 p-2">
            <h4 className="text-md">Notification</h4> <CircleX />
          </div>
          <hr />
          <div className="p-2">
            <h3 className="text-gray-500 font-medium text-xs">TODAY</h3>
            <div className="space-y-1 mt-2">
              <h4 className="text-sm font-semibold flex items-center gap-1">
                UrbanStride <Image width={17} height={17} />
              </h4>
              <p className="text-gray-500 text-xs font-medium flex items-center gap-1">
                You have logged in successfully Jonas Galliard! Don't miss our
                special offers
              </p>
              <div className="flex gap-2 border border-gray-200 w-full h-[80px] rounded-lg p-2">
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
                <div className="flex flex-col">
                  <h2 className="text-xs font-semibold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                    Special offer
                  </h2>
                  <h5 className="text-sm font-semibold mt-1">New Balance Br</h5>
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
      )}
    </Popover>
  );
}

export default Notification;

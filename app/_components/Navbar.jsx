import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Bell, Menu, ShoppingBag } from "lucide-react";
import React from "react";
import avatar from "../_images/avatar.jpg";
function Navbar() {
  return (
    <div className="flex items-center justify-between w-full gap-7 py-4 px-10 shadow-sm">
      <h2>
        <span className="text-sm font-medium">urban</span>
        <span className="font-semibold text-lg">Stride</span>
      </h2>
      <div className="w-[600px]">
        <Input
          className="rounded-full w-full  outline-none focus:outline-none focus:ring-0"
          placeholder="try 'NIKE air jordan'"
        />
      </div>
      <div className="hidden sm:flex items-center gap-6">
        <Bell className="w-5 hidden md:block" />
        <h3 className="flex items-center gap-2 bg-gray-200 rounded-full md:py-1  md:px-2  py-0 px-3 text-xs font-medium">
          <ShoppingBag className="w-4" />
          <span className="text-xs">2 items</span>
        </h3>
        <span className="flex items-center gap-2">
          <Image
            width={0}
            height={0}
            objectFit="cover"
            className="w-7 h-7 rounded-full"
            src={avatar}
            alt=""
          />
          <span className="text-xs font-medium">Jonas Galliard</span>
        </span>
      </div>

      <Menu className="sm:hidden w-16" />
    </div>
  );
}

export default Navbar;

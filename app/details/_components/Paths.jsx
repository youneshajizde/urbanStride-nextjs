import { ChevronRight, MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

function Paths({ details }) {
  return (
    <div className="flex items-center justify-between mt-6">
      <Link href={"/"}>
        <MoveLeft className="cursor-pointer" />
      </Link>
      <div>
        <h3 className="flex items-center gap-1 text-xs text-gray-400 ">
          <span>Home</span> <ChevronRight className="w-4" />{" "}
          <span>Product</span> <ChevronRight className="w-4" />
          <span className="text-black font-semibold">{details}</span>
        </h3>
      </div>
    </div>
  );
}

export default Paths;

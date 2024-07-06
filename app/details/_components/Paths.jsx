import { ChevronRight, MoveLeft } from "lucide-react";
import React from "react";

function Paths() {
  return (
    <div className="flex items-center justify-between">
      <MoveLeft className="cursor-pointer" />
      <div>
        <h3 className="flex items-center gap-1 text-xs text-gray-400 ">
          <span>Home</span> <ChevronRight className="w-4" />{" "}
          <span>Product</span> <ChevronRight className="w-4" />
          <span>Nike Golden</span>
        </h3>
      </div>
    </div>
  );
}

export default Paths;

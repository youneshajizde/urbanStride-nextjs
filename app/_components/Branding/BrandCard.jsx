import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import InnerBrandCard from "./InnerBrandCard";

function BrandCard({ title, logo }) {
  return (
    <div className="rounded-3xl w-[400px] p-4 border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-[3.6rem] h-[3.6rem] relative flex justify-center items-center border border-gray-200 rounded-xl">
            <Image
              src={logo}
              alt="Brand"
              width={48}
              height={48}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-0">
            <h2>{title}</h2>
            <span className="flex gap-1">
              <Star fill="yellow" strokeWidth={0} className="w-4" />
              <span className="flex items-center gap-2">
                <span className="text-xs font-medium">4.9</span>
                <span className="text-gray-500 font-light text-xs">
                  (1290 Reviews)
                </span>
              </span>
            </span>

            <span className="text-gray-500 font-light text-xs">
              7.2m Followers
            </span>
          </div>
        </div>

        <Button className="rounded-full font-semibold p-5" variant="outline">
          Visit
        </Button>
      </div>

      <InnerBrandCard />
    </div>
  );
}

export default BrandCard;

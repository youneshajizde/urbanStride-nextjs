import React from "react";
import Image from "next/image";
import bannerRight from "../_images/banner-right.png";
import { Button } from "@/components/ui/button";
function Events() {
  return (
    <div>
      {" "}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[380px] mt-6">
        <div className="md:col-span-2 h-[300px] md:h-auto bg-gray-100 p-4 rounded-3xl relative">
          <div className="">
            <h2 className="font-semibold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              NEW ARRIVAL!
            </h2>
            <h4 className="font-semibold text-[2.9rem] leading-[55px] mt-6">
              AIR JORDAN 6 G X <br />
              EASTSIDE
            </h4>

            <p className="hidden md:block text-gray-500 mt-8 w-[380px]">
              Feel unbeatable from the tee box to the final putt in a design
              that's pure early MJ: speed ,class.
            </p>
          </div>
          <div className="w-20 absolute bottom-5">
            <Button
              className="bg-black text-white rounded-full font-semibold p-5"
              variant="outline"
            >
              Event details
            </Button>
          </div>
        </div>
        <div className="md:col-span-1 h-[300px] md:h-auto bg-gray-300 p-4 rounded-3xl relative ">
          <Image
            className="rounded-3xl"
            src={bannerRight}
            width={0}
            height={0}
            sizes="100vw"
            fill
          />
          <div className="relative px-0 flex flex-col gap-4  ">
            <p className=" text-white font-medium text-[2.7rem] md:text-[1.7rem]  leading-[55px] md:leading-[30px] lg:text-[2.3rem] lg:leading-[45px] ">
              DISC UP TO 50% FOR SNEAKERS FEST IN 2025
            </p>
            <p className="text-white hidden md:block">
              Join the sneaker fest on 2025 on 2th october, We have more fun
              gigs too and supported by urbanStride
            </p>
          </div>
          <div className="w-20 absolute bottom-5">
            <Button
              className="rounded-full font-semibold p-5"
              variant="outline"
            >
              Event details
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;

"use client";

import React, { useState } from "react";
import {
  CirclePercent,
  Package,
  Star,
  Truck,
  CalendarRange,
} from "lucide-react";
import avatar from "./avatar.jpg";
import Image from "next/image";

function Information() {
  const [activeSection, setActiveSection] = useState("shipment");
  const [ratings, setRatings] = useState([
    {
      username: "Alexander Jarl",
      rating: 5,
      comment:
        "Nike golden is the most comfortable shoe I have worn so far. The laces are pretty neat and made with great materials!",
    },
  ]);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [userRating, setUserRating] = useState(5);
  const [userComment, setUserComment] = useState("");
  const calculateAverageRating = () => {
    if (ratings.length === 0) return 0;
    const totalRating = ratings.reduce((acc, curr) => acc + curr.rating, 0);
    return (totalRating / ratings.length).toFixed(1);
  };

  const averageRating = calculateAverageRating();

  const handleRatingChange = (e) => {
    setUserRating(Number(e.target.value));
  };

  const handleCommentChange = (e) => {
    setUserComment(e.target.value);
  };

  const handleSubmit = () => {
    if (user && userComment) {
      setRatings([
        ...ratings,
        { username: user.username, rating: userRating, comment: userComment },
      ]);
      setUserComment("");
      setUserRating(5); // Reset rating to default
    }
  };

  const ratingDistribution = [
    {
      rating: 5,
      percentage:
        (ratings.filter((r) => r.rating === 5).length / ratings.length) * 100,
    },
    {
      rating: 4,
      percentage:
        (ratings.filter((r) => r.rating === 4).length / ratings.length) * 100,
    },
    {
      rating: 3,
      percentage:
        (ratings.filter((r) => r.rating === 3).length / ratings.length) * 100,
    },
    {
      rating: 2,
      percentage:
        (ratings.filter((r) => r.rating === 2).length / ratings.length) * 100,
    },
    {
      rating: 1,
      percentage:
        (ratings.filter((r) => r.rating === 1).length / ratings.length) * 100,
    },
  ];

  return (
    <section className="grid grid-cols-2 mt-6 p-2 gap-5">
      <div>
        <h1 className="text-lg font-semibold">Product Info</h1>
        <span className="flex items-center gap-8 text-sm mt-2">
          <h3
            className={` font-light cursor-pointer ${
              activeSection === "overview"
                ? "font-semibold text-black"
                : "text-gray-400"
            }`}
            onClick={() => setActiveSection("overview")}
          >
            Overview
          </h3>
          <h3
            className={` font-medium cursor-pointer ${
              activeSection === "shipment"
                ? "font-semibold text-black"
                : "text-gray-400"
            }`}
            onClick={() => setActiveSection("shipment")}
          >
            Shipment Details
          </h3>
        </span>

        {activeSection === "shipment" && (
          <div className="shipment-details grid grid-cols-2 gap-4 py-4">
            <div className="flex items-center gap-2 p-4 border-gray-100 border-2 rounded-md ">
              <span className="p-1 bg-gray-400 rounded-full bg-gradient-to-r from-orange-500 to-orange-700">
                <CirclePercent className="text-white" />
              </span>
              <span>
                <h4 className="text-sm text-gray-400">Discount</h4>
                <p className="font-medium text-sm">1,200,000 R Disc 10%</p>
              </span>
            </div>
            <div className="flex items-center gap-2 p-4 border-gray-100 border-2 rounded-md ">
              <span className="p-1 bg-gray-400 rounded-full bg-gradient-to-r from-orange-500 to-orange-700">
                <CalendarRange className="text-white" />
              </span>
              <span>
                <h4 className="text-sm text-gray-400">Delivery Time</h4>
                <p className="font-medium text-sm">6 - 12 Working days</p>
              </span>
            </div>
            <div className="flex items-center gap-2 p-4 border-gray-100 border-2 rounded-md ">
              <span className="p-1 bg-gray-400 rounded-full bg-gradient-to-r from-orange-500 to-orange-700">
                <Package className="text-white" />
              </span>
              <span>
                <h4 className="text-sm text-gray-400">Package</h4>
                <p className="font-medium text-sm">Regular Premium Box</p>
              </span>
            </div>
            <div className="flex items-center gap-2 p-4 border-gray-100 border-2 rounded-md ">
              <span className="p-1 bg-gray-400 rounded-full bg-gradient-to-r from-orange-500 to-orange-700">
                <Truck className="text-white" />
              </span>
              <span>
                <h4 className="text-sm text-gray-400">Estimation Arrive</h4>
                <p className="font-medium text-sm">12 - 12 October 2024</p>
              </span>
            </div>
          </div>
        )}

        {activeSection === "overview" && (
          <div className="overview py-4">
            <h3 className="text-xl font-semibold">Jordan Airmax</h3>
            <p className="text-sm font-medium mt-5">
              The Nike Air Max 270 is a versatile and stylish shoe that combines
              both comfort and performance. Designed with a sleek silhouette, it
              features a breathable mesh upper that ensures maximum ventilation
              during activities. The highlight of this shoe is its signature Air
              Max unit, providing exceptional cushioning and impact protection,
              making it ideal for long walks or runs. Additionally, its durable
              rubber outsole offers excellent traction on various surfaces
            </p>
          </div>
        )}

        <div className="mt-7 space-y-6">
          <h3 className="font-semibold">Note*</h3>
          <p className="text-sm font-medium">
            As the name indicates, all Air Max shoes feature one or more
            translucent pouches of pressurized gas embedded in the midsole and
            visible from the outside of the shoe. Referred to as "Air units" or
            "airbags," their stated purpose is to provide superior cushioning to
            traditional foam while also reducing weight.
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-lg font-semibold">Rating and Reviews</h1>
        <div className="flex gap-8 mt-7">
          <div className="flex flex-col gap-2">
            <h1 className="text-8xl font-semibold">
              {averageRating}

              <span className="text-sm font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                / 5
              </span>
            </h1>
            <p className="text-gray-400 text-sm font-medium">
              ({ratings.length} reviews)
            </p>
          </div>

          <div>
            <div className="w-48 mx-auto">
              {ratingDistribution.map((item) => (
                <div key={item.rating} className="flex items-center my-1">
                  <div className="w-6 text-center text-sm font-semibold">
                    {item.rating}
                  </div>
                  <Star
                    fill="yellow"
                    strokeWidth={0}
                    className="text-goldenrod w-4 h-4 mr-2"
                  />
                  <div className="flex-grow bg-gray-300 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-goldenrod h-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col space-y-2">
          {ratings.map((review, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 p-3 border-gray-100 border-2 rounded-md "
            >
              <span className="flex items-center justify-between">
                <h3 className="font-medium">{review.username}</h3>
                <p className="flex items-center gap-1 text-sm font-medium">
                  {review.rating} <Star fill="yellow" strokeWidth={0} />{" "}
                </p>
              </span>
              <p className="text-sm font-medium">{review.comment}</p>
            </div>
          ))}

          <div className="flex flex-col gap-2 p-3 border-gray-100 border-2 rounded-md">
            <span className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  width={28}
                  height={28}
                  objectFit="cover"
                  className="w-7 h-7 rounded-full"
                  src={avatar}
                  alt=""
                />
                <h3 className="font-medium">{user.username}</h3>
              </div>
              <p className="flex items-center gap-1 text-sm font-medium">
                <select
                  value={userRating}
                  onChange={handleRatingChange}
                  className="border-b-2 border-gray-200 focus:outline-none focus:border-yellow-500"
                >
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
                </select>
                <Star
                  fill="yellow"
                  className="text-yellow-500"
                  strokeWidth={0}
                />
              </p>
            </span>
            <textarea
              placeholder="Your Comment"
              value={userComment}
              onChange={handleCommentChange}
              className="text-sm font-medium w-full border-b-2 border-gray-200 focus:outline-none focus:border-stone-500 h-24 resize-none"
            ></textarea>
            <button
              onClick={handleSubmit}
              className="self-end bg-gray-800 text-white px-3 py-1 rounded-md font-medium"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Information;

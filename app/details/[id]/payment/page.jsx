"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearShop } from "@/redux/features/shop-slice";

const PaymentPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const dispatch = useDispatch();
  const handleCardSelect = (cardType) => {
    setSelectedCard(cardType);
  };
  useEffect(() => {
    const handleBeforeUnload = () => {
      dispatch(clearShop());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [dispatch]);
  const product = useSelector((state) => state.shop.product);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-2">
      <div className="min-w-[400px] flex flex-col items-center justify-center bg-white p-8 rounded-lg">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-5 mb-6">
          <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
          <p className="text-gray-700 mb-2 ">{product.size}</p>
          <p className="text-xl font-bold">
            ${product.price?.toFixed(2)} Rials
          </p>
        </div>

        <h2 className="text-xl font-bold mb-4">Choose Your Payment Method</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div
            className={`p-4 rounded-lg shadow-md cursor-pointer transform transition-transform ${
              selectedCard === "Visa"
                ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white scale-105"
                : "bg-gradient-to-r from-blue-200 to-blue-400 text-blue-800"
            }`}
            onClick={() => handleCardSelect("Visa")}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="h-12 mx-auto mb-2"
            />
            <p className="text-center font-semibold">Visa</p>
          </div>
          <div
            className={`p-4 rounded-lg shadow-md cursor-pointer transform transition-transform ${
              selectedCard === "MasterCard"
                ? "bg-gradient-to-r from-red-600 to-red-800 text-white scale-105"
                : "bg-gradient-to-r from-red-200 to-red-400 text-red-800"
            }`}
            onClick={() => handleCardSelect("MasterCard")}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="MasterCard"
              className="h-12 mx-auto mb-2"
            />
            <p className="text-center font-semibold">MasterCard</p>
          </div>
          <div
            className={`p-4 rounded-lg shadow-md cursor-pointer transform transition-transform ${
              selectedCard === "PayPal"
                ? "bg-gradient-to-r from-blue-700 to-blue-900 text-white scale-105"
                : "bg-gradient-to-r from-blue-300 to-blue-500 text-blue-800"
            }`}
            onClick={() => handleCardSelect("PayPal")}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-12 mx-auto mb-2"
            />
            <p className="text-center font-semibold">PayPal</p>
          </div>
        </div>
        <button
          className="mt-6 px-4 py-1 text-white bg-black rounded hover:bg-gray-800 disabled:bg-gray-400"
          disabled={!selectedCard}
        >
          Pay with {selectedCard}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;

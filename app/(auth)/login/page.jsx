import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

function LoginPage() {
  return (
    <div className="p-20 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">
              Username
            </label>
            <Input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <Input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link className="text-gray-600 hover:underline" href="/register">
            Don't you have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

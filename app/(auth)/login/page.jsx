"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GlobalApi from "@/lib/GlobalApi";
import { toast } from "sonner";

function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();

  const onSignIn = (event) => {
    event.preventDefault();
    GlobalApi.signUpUser(email, password).then(
      (resp) => {
        console.log(resp.data.user);
        console.log(resp.data.jwt);
        sessionStorage.setItem("user", JSON.stringify(resp.data.user));
        sessionStorage.setItem("jwt", resp.data.jwt);
        toast("You logged in successfully");
        router.push("/");
      },
      (e) => {
        console.log(e);
        toast("A problem has occurred in the server");
      }
    );
  };

  useEffect(() => {
    const jwt = sessionStorage.getItem("jwt");

    if (jwt) {
      router.push("/");
    }
  }, []);
  return (
    <div className="p-20 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={onSignIn}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="Email">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
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

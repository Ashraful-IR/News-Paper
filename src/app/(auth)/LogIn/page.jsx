import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <fieldset className="fieldset container mx-auto mt-7  bg-base-200 border-base-300 rounded-box w-3xl border p-4 gap-5">
      <h1 className="text-[35px] font-semibold text-center mt-10">Login to Your Account</h1>
      <div className="flex flex-col justify-between items-start gap-5">
        <label className="label text-black font-semibold text-[20px]">
          Email address
        </label>
        <input
          type="email"
          className="input w-full h-13 text-[16px]"
          placeholder="Enter your email address"
        />
      </div>
      <div className="flex flex-col justify-between items-start gap-5">
        <label className="label text-black font-semibold text-[20px]">
          Password
        </label>
        <input
          type="password"
          className="input w-full h-13 text-[16px]"
          placeholder="Enter your password"
        />
      </div>
      <button className="btn btn-neutral mt-4 w-xl justify-self-center">
        Login
      </button>
      <p className="text-center text-lg font-semibold mt-4 gap-2.5 flex justify-center items-center">
        Dont’t Have An Account ?
        <Link href="/Registration" className="text-red-900 hover:underline">
          Register
        </Link>
      </p>
    </fieldset>
  );
};

export default LoginPage;

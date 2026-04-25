import Link from "next/link";
import React from "react";

const Registrationpage = () => {
  return (
    <form action="" method="post">
      <fieldset className="fieldset container mx-auto mt-7  bg-base-200 border-base-300 rounded-box w-3xl border p-4 gap-5">
        <h1 className="text-[35px] font-semibold text-center mt-10">
          Register your account
        </h1>
        <div className="flex flex-col justify-between items-start gap-5">
          <label className="label text-black font-semibold text-[20px]">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            className="input w-full h-13 text-[16px]"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col justify-between items-start gap-5">
          <label className="label text-black font-semibold text-[20px]">
            Photo URL
          </label>
          <input
            type="url"
            name="photoURL"
            className="input w-full h-13 text-[16px]"
            placeholder="Upload your photo URL"
          />
        </div>
        <div className="flex flex-col justify-between items-start gap-5">
          <label className="label text-black font-semibold text-[20px]">
            Email address
          </label>
          <input
            type="email"
            name="email"
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
            name="password"
            className="input w-full h-13 text-[16px]"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex justify-start items-start gap-5">
          <input
            type="checkbox"
            name="terms"
            defaultChecked
            className="checkbox checkbox-sm"
          />
          <p className="text-[14px] font-medium gap-0.5 flex justify-center items-center">
            I agree to the
            <span className="text-red-900 hover:underline cursor-pointer">
              Terms and Conditions
            </span>
          </p>
        </div>

        <button className="btn btn-neutral mt-4 w-xl justify-self-center">
          Register
        </button>
        <p className="text-center text-lg font-semibold mt-4 gap-2.5 flex justify-center items-center">
          Dont’t Have An Account ?
          <Link href="/LogIn" className="text-red-900 hover:underline">
            Log In
          </Link>
        </p>
      </fieldset>{" "}
    </form>
  );
};

export default Registrationpage;

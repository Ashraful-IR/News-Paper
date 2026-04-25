"use client";
import { Linden_Hill } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const link = usePathname();

  const isActive = link === href;
  return (
    <>
      <Link
        href={href}
        className={` ${isActive ? "border-b-2 border-pink-500" : ""} `}
      >
        {children}
      </Link>
    </>
  );
};

export default NavLink;

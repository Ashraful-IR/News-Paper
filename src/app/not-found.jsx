import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-between gap-5 p-4">
      <h2 className="text-4xl text-center mt-10">404 Not Found</h2>
      <p className="text-center mt-4">
        The page you are looking for does not exist.
      </p>
      <Link href="/">
        <button className="btn btn-primary block mx-auto mt-6">Go Back</button>
      </Link>
    </div>
  );
};

export default NotFound;

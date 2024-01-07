import Link from "next/link";
import React from "react";

const HomePage = () => {
  console.log("home page");
  return (
    <div>
      <h1 className="text-7xl mb-8 font-bold">Home Page</h1>
      <Link href="/client" className="btn btn-accent">
        Get Client
      </Link>
    </div>
  );
};

export default HomePage;

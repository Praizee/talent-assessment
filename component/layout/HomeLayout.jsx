// HomeLayout.jsx
import React from "react";
import Nav from "./Nav";
import Home from "../home/Home";

const HomeLayout = () => {
  return (
    <main className="md:mx-auto flex flex-col py-4 bg-hero-bg md:container w-full relative">
      <Nav />
      <div className="bg-transparent h- border-2">
        <Home />
      </div>
    </main>
  );
};

export default HomeLayout;

// HomeLayout.jsx
import React from "react";
import Nav from "./Nav";
import Home from "../home/Home";
import Footer from "./Footer";

const HomeLayout = () => {
  return (
    <main className="flex flex-col py-4 containe w-full relative">
      <div className="bg-transparent bg-hero-bg">
        <Nav />
        <Home />
      </div>
      <Footer />
    </main>
  );
};

export default HomeLayout;

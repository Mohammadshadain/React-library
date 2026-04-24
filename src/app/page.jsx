"use client";

import React from "react";
import Main from "../components/main";
import Footer from "../components/footer";
import Header from "../components/header";
import Card from "../components/card"; // ✅ added import

export default function Home() {
  return (
    <>
    {/* //hhhhhhhhhhhhhh */}
      <Header />
      <Main />
      <Card />
      <Footer />
    </>
  );
}

"use client"

import React from "react";
import Main from "../components/main";
import Footer from "../components/footer";
import Header from "../components/Header";
import { PlaceholdersAndVanishInputDemo } from "../components/PlaceholdersAndVanishInputDemo";
import Navbar from "../components/Navbar";

const HOME = () => {
  return (
    <>
      {/* <PlaceholdersAndVanishInputDemo/> */}
      <Header/>
      <Main/>
      {/* <Card /> */}

      <Footer />
      <Navbar/>
    </>
  );
};

export default HOME;

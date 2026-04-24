"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Listing = () => {
  const [libraryList, setLibraryList] = useState([]);
  const [masterList, setMasterList] = useState([]);

  const fetchLibraryData = async () => {
    const res = await axios.get("http://localhost:5000/library/getall");
    console.log(res.data);
    setLibraryList(res.data);
    setMasterList(res.data);
    // add this anywhere
// trigger redeploy
  };

  const searchPackage = (e) => {
    const value = e.target.value;
    setLibraryList(
      masterList.filter((lib) =>
        lib.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    fetchLibraryData();
  }, []);

  const displayLibraries = () => {
    if (libraryList.length > 0) {
      return libraryList.map((library) => (
        <Link
          key={library._id}   // ✅ FIXED (key added)
          className="group block rounded-xl overflow-hidden focus:outline-none"
          href={"/details/" + library._id}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img
                className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                src={library.image || "/logo-placeholder-image.png"}
                alt={library.name || "library image"} // ✅ FIXED alt
              />
            </div>

            <div className="grow">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                {library.name}
              </h3>

              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                {library.description}
              </p>

              {/* ❌ Removed nested Link (was causing issue) */}
              <span className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 font-medium">
                Read more →
              </span>
            </div>
          </div>
        </Link>
      ));
    }
  };

  return (
    <div className="bg-black">
      <>
        {/* Hero */}
        <div className="relative overflow-hidden">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-neutral-200">
                Libraries
              </h1>

              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                Most Powerful React Libraries
                <br />
                to Try for your Projects
                <br />
                Ready-to-use Libraries for your Apps
              </p>

              <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
                <form>
                  <div className="relative z-10 flex gap-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
                    <div className="w-full">
                      <input
                        type="text"
                        onChange={searchPackage}
                        className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Search article"
                      />
                    </div>
                  </div>
                </form>
              </div>

              {/* CATEGORY BUTTONS (UNCHANGED) */}
              <div className="mt-10 sm:mt-20">
                <a className="m-1 py-3 px-4 inline-flex items-center text-sm rounded-lg border bg-white">
                  Business
                </a>
                <a className="m-1 py-3 px-4 inline-flex items-center text-sm rounded-lg border bg-white">
                  Strategy
                </a>
                <a className="m-1 py-3 px-4 inline-flex items-center text-sm rounded-lg border bg-white">
                  Health
                </a>
                <a className="m-1 py-3 px-4 inline-flex items-center text-sm rounded-lg border bg-white">
                  Creative
                </a>
                <a className="m-1 py-3 px-4 inline-flex items-center text-sm rounded-lg border bg-white">
                  Environment
                </a>
                <a className="m-1 py-3 px-4 inline-flex items-center text-sm rounded-lg border bg-white">
                  Adventure
                </a>
              </div>
            </div>
          </div>
        </div>
      </>

      <>
        {/* Card Section */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-black">
          <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
            {displayLibraries()}
          </div>
        </div>
      </>
    </div>
  );
};

export default Listing;

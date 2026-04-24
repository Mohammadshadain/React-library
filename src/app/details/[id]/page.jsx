"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const LibDetails = () => {
  const { id } = useParams();
  const [libraryDetails, setLibraryDetails] = useState(null);

  const fetchLibarayData = () => {
    axios
      .get("http://localhost:5000/library/getbyid/" + id)
      .then((result) => {
        setLibraryDetails(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchLibarayData();
  }, [id]); // ✅ fixed dependency

  return (
    <section className="bg-white dark:bg-gray-900">
      {libraryDetails !== null ? (
        <div className="w-full py-8 px-12 mx-auto text-center lg:py-16 lg:px-16">
          <div className="mx-auto max-w-screen w-full">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
              React libraries Details
            </h2>
          </div>

          <div className="w-full grid mb-8 lg:mb-12 lg:grid-cols-1 mx-auto">
            <figure className="flex flex-col justify-center items-center p-8 bg-gray-50 dark:bg-gray-800">

              <figcaption className="flex items-center space-x-3 mb-8">

                {/* ✅ FIXED HERE */}
                <img
                  className="w-48 h-28 rounded-lg"
                  src={libraryDetails.image || '/logo-placeholder-image.png'}
                  alt="library"
                />

                <div className="font-bold text-5xl text-left text-white">
                  <div>{libraryDetails.name}</div>
                  <div className="text-lg text-gray-400">
                    {libraryDetails.version}
                  </div>
                </div>

              </figcaption>

              <blockquote className="max-w-2xl text-gray-400">
                <p className="my-4">
                  {libraryDetails.description}
                </p>

                <div className="space-y-3">

                  <p><strong>Name:</strong> {libraryDetails.name}</p>
                  <p><strong>Package:</strong> {libraryDetails.packageName}</p>
                  <p><strong>Version:</strong> {libraryDetails.version}</p>
                  <p><strong>Tags:</strong> {libraryDetails.tags}</p>
                  <p><strong>Description:</strong> {libraryDetails.description}</p>

                </div>
              </blockquote>

            </figure>
          </div>
        </div>
      ) : (
        <h1>Loading ...</h1>
      )}
    </section>
  );
};

export default LibDetails;

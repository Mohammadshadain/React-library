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
        console.log(result.data);
        setLibraryDetails(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchLibarayData();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      {libraryDetails !== null ? (
        <div className="w-full py-8 px-12 mx-auto  text-center lg:py-16 lg:px-16">
          <div className="mx-auto max-w-screen w-full">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              React libraries Details
            </h2>
            <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Explore the whole collection of open-source web components and
              elements built with the utility classes from Tailwind
            </p>
          </div>
          <div className="w-full grid mb-8 lg:mb-12 lg:grid-cols-1 mx-auto">
            <figure className="flex flex-col justify-center items-center p-8 bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <figcaption className="flex items-center space-x-3 mb-8">
                <img
                  className="w-12 h-12 rounded-full"
                  src={libraryDetails.image || '/logo-placeholder-image.png'}
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-bold dark:text-white text-left">
                  <div>{libraryDetails.name}</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  {libraryDetails.version}
                  </div>
                </div>
              </figcaption>
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {libraryDetails.category}
                </h3>
                <p className="my-4">
                 {libraryDetails.description}
                </p>
                
                <div className="space-y-3">
                  <dl className="flex flex-col sm:flex-row gap-1">
                    <dt className="min-w-40">
                      <span className="block text-sm text-gray-500 dark:text-neutral-500">
                        Name:
                      </span>
                    </dt>
                    <dd>
                      <p className="text-white">{libraryDetails.name}</p>
                    </dd>
                  </dl>
                  <dl className="flex flex-col sm:flex-row gap-1">
                    <dt className="min-w-40">
                      <span className="block text-sm text-gray-500 dark:text-neutral-500">
                        Package Name:
                      </span>
                    </dt>
                    <dd>
                     <p className="text-white"> {libraryDetails.packageName}</p>
                    </dd>
                  </dl>
                  <dl className="flex flex-col sm:flex-row gap-1">
                    <dt className="min-w-40">
                      <span className="block text-sm text-gray-500 dark:text-neutral-500">
                        Version:
                      </span>
                    </dt>
                    <dd>
                      <p className="text-white">{libraryDetails.version}</p>
                    </dd>
                  </dl>
                  <dl className="flex flex-col sm:flex-row gap-1">
                    <dt className="min-w-40">
                      <span className="block text-sm text-gray-500 dark:text-neutral-500">
                        tags:
                      </span>
                    </dt>
                    <dd>
                      <p className="text-white">{libraryDetails.tags}</p>
                    </dd>
                  </dl>
                  <dl className="flex flex-col sm:flex-row gap-1">
                    <dt className="min-w-40">
                      <span className="block text-sm text-gray-500 dark:text-neutral-500">
                        Description:
                      </span>
                    </dt>
                    <dd>
                      <p className="text-white">
                        {libraryDetails.description}
                      </p>
                    </dd>
                  </dl>
                </div>
              </blockquote>
            </figure>
          </div>

          <div>
            <></>
          </div>
        </div>
      ) : (
        <h1>Loading ... </h1>
      )}
    </section>
  );
};

export default LibDetails;

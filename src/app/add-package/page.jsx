"use client";

import React from "react";
// import Image from '@/hero.jpg'; 
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LoginSchema = Yup.object().shape({
  name: Yup.string()
  .min(2, "make it longer")
  .max(50, "too long")
  .required("Name is required"),
  
});

const Login = () => {
  const router = useRouter();

  const loginForm = useFormik({
    initialValues: {
      name: "",
      packageName: "",
      version: "",
      tags:"",
      description:"",
      image : ""
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("http://localhost:5000/library/add", values)
        .then((result) => {
          toast.success("add Successfully");
          
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message);
        });
    },
    validationSchema: LoginSchema,
  });

  const uploadToCloud = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const fd = new FormData();
    fd.append("file", file);
    fd.append("upload_preset", "msd5007");
    fd.append("cloud_name", "dqxnkd8jq");

    axios
      .post('https://api.cloudinary.com/v1_1/dqxnkd8jq/image/upload', fd, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .then((response) => {
        console.log(response.data);
        loginForm.setFieldValue("image", response.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-4 sm:p-12">
            <div className="mt-2 flex flex-col items-center">
              <div className="w-full flex-1 mt-2">
                <div className="flex flex-col items-center">
                  <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">

                    <span className="ml-4  text-xl">ADD LIBRARY</span>
                  </button>
                </div>
                <div className="my-12 border-b text-center">
                  <Link
                    href="./signup"
                    className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                  >
              
                  </Link>
                </div>
                <form
                  className="mx-auto max-w-xs"
                  onSubmit={loginForm.handleSubmit}
                >
                  <input
                    onChange={uploadToCloud}
                    className="w-full px-5 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="file"
                  />
                  <input
                    id="name"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.name}
                    className="mt-3 w-full px-5 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    id="packageName"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.packageName}
                    className="  mt-3 w-full px-5 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="packageName"
                    placeholder="Package-Name"
                  />
                  <input
                    id="version"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.version}
                    className="mt-3 w-full px-5 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="version"
                    placeholder="version"
                  />
                  <input
                    id="tags"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.tags}
                    className="mt-3 w-full px-5 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="tags"
                  />
                  
                  <input
                    id="description"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.description}
                    className="mt-3 w-full px-5 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="description"
                    placeholder="description"
                  />
                  {loginForm.touched.description && (
                    <p className=" text-xs text-red-600 mt-2" id="email-error">
                      {loginForm.errors.description}
                    </p>
                  )}
                  
                  
                  
                  <button
                    className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    type="submit"
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy={7} r={4} />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-">Add Library</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by ReactLib..
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Terms of Service
                    </a>
                    and its
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-green-100 text-center hidden lg:flex justify-center items-center">
            <div className="mt-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
             <Image
             src = '/hero.png'
             height={200}
             width={600}
             quality={100}
             priority
             />

            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

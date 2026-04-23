"use client";

import React from "react";
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
      tags: "",
      description: "",
      image: "",
    },
    onSubmit: (values) => {
      axios
        .post("http://localhost:5000/library/add", values)
        .then(() => {
          toast.success("add Successfully");
          router.push("/");
        })
        .catch((err) => {
          toast.error(err.response?.data?.message);
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
      .post("https://api.cloudinary.com/v1_1/dqxnkd8jq/image/upload", fd)
      .then((res) => {
        loginForm.setFieldValue("image", res.data.url);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        
        <div className="lg:w-1/2 xl:w-5/12 p-4 sm:p-12">
          <div className="mt-2 flex flex-col items-center">
            <div className="w-full flex-1 mt-2">

              <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800">
                ADD LIBRARY
              </button>

              <form className="mx-auto max-w-xs mt-10" onSubmit={loginForm.handleSubmit}>
                
                <input type="file" onChange={uploadToCloud} className="w-full px-5 py-4 rounded-lg bg-gray-100 border" />

                <input
                  name="name"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.name}
                  className="mt-3 w-full px-5 py-4 rounded-lg bg-gray-100 border"
                  type="text"
                  placeholder="Name"
                />

                <input
                  name="packageName"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.packageName}
                  className="mt-3 w-full px-5 py-4 rounded-lg bg-gray-100 border"
                  type="text"
                  placeholder="Package-Name"
                />

                <input
                  name="version"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.version}
                  className="mt-3 w-full px-5 py-4 rounded-lg bg-gray-100 border"
                  type="text"
                  placeholder="Version"
                />

                <input
                  name="tags"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.tags}
                  className="mt-3 w-full px-5 py-4 rounded-lg bg-gray-100 border"
                  type="text"
                  placeholder="Tags"
                />

                <input
                  name="description"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.description}
                  className="mt-3 w-full px-5 py-4 rounded-lg bg-gray-100 border"
                  type="text"
                  placeholder="Description"
                />

                <button
                  className="mt-5 w-full py-4 bg-green-400 rounded-lg text-white"
                  type="submit"
                >
                  Add Library
                </button>

              </form>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-green-100 hidden lg:flex justify-center items-center">
          <Image src="/hero.png" height={200} width={600} alt="hero" />
        </div>

      </div>
    </div>
  );
};

export default Login;
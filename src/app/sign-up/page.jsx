"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "make it longer")
    .max(50, "too long")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("email is required"),
  password: Yup.string()
    .required("password is required")
    .matches(/[a-z]/, "must include a lower case")
    .matches(/[A-Z]/, "must include an upper case")
    .matches(/[0-9]/, "must include a number")
    .matches(/\W/, "must include a special character"),
  confirmPassword: Yup.string()
    .required("confirm password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignUp = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit(values, { resetForm, setSubmitting }) {
      axios
        .post("http://localhost:5000/user/add", values) // ✅ fixed port
        .then((response) => {
          resetForm();
          toast.success("User added successfully");
          router.push("/");
        })
        .catch((err) => {
          if (err.response?.data?.code === 11000) {
            toast.error("Email already exists");
          }
          setSubmitting(false);
        });
    },
    validationSchema: signUpSchema,
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center bg-blue-950 min-h-screen"
    >
      <div className="mt-4 w-[70vh] bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
        
        <img
          className="rounded-xl"
          src="https://media.istockphoto.com/id/1390831094/photo/hand-press-the-virtual-screen-enter-the-username-and-password-to-log-in-online-security-system.jpg"
          alt="signup"
        />

        <div className="p-4 sm:p-7">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign up
            </h1>

            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Already have an account?
              <a
                className="text-blue-600 hover:underline ml-1"
                href="/sign-in"
              >
                Sign in here
              </a>
            </p>
          </motion.div>

          <div className="mt-5">
            <form onSubmit={formik.handleSubmit}>
              <div className="grid gap-y-4">

                {/* NAME */}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className="py-3 px-4 border rounded"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm">{formik.errors.name}</p>
                )}

                {/* EMAIL */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="py-3 px-4 border rounded"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                )}

                {/* PASSWORD */}
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className="py-3 px-4 border rounded"
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm">{formik.errors.password}</p>
                )}

                {/* CONFIRM PASSWORD */}
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  className="py-3 px-4 border rounded"
                />
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.confirmPassword}
                    </p>
                  )}

                <button
                  type="submit"
                  className="bg-blue-600 text-white py-3 rounded"
                >
                  Sign Up
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUp;
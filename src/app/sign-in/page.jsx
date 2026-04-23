'use client'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const loginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Invalid email'),
  password: Yup.string().required('Password is required')
    .matches(/[a-z]/, 'Must include a lowercase')
    .matches(/[A-Z]/, 'Must include an uppercase')
    .matches(/[0-9]/, 'Must include a number')
    .matches(/\W/, 'Must include a special character'),
});

const Login = () => {
  const router = useRouter();

  const login = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit(values, { resetForm, setSubmitting }) {
      axios.post("http://localhost:5001/user/add", values)
        .then((response) => {
          resetForm();
          toast.success('User added successfully');
          router.push('/');
        }).catch((err) => {
          setSubmitting(false);
        });
    },
    validationSchema: loginSchema
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
      className="mx-auto bg-slate-900"
    >
      <div className="w-[70vh] bg-orange-800 border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700 mx-auto">
        
        <img 
          className='rounded-xl' 
          src="https://media.istockphoto.com/id/1390831094/photo/hand-press-the-virtual-screen-enter-the-username-and-password-to-log-in-online-security-system.jpg" 
          alt="login" 
        />

        <div className="p-4 sm:p-7">
          <div className="text-center">
            <motion.h1 
              className="block text-2xl font-bold text-gray-800 dark:text-white"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              Sign in
            </motion.h1>

            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Don&apos;t have an account yet?
              <a className="text-blue-600 hover:underline ml-1" href="/sign-up">
                Sign up here
              </a>
            </p>
          </div>

          <div className="mt-5">

            <form onSubmit={login.handleSubmit}>
              <motion.div className="grid gap-y-4">

                <input
                  type="email"
                  name="email"
                  onChange={login.handleChange}
                  value={login.values.email}
                  className="py-3 px-4 border rounded"
                  placeholder="Email"
                />

                <input
                  type="password"
                  name="password"
                  onChange={login.handleChange}
                  value={login.values.password}
                  className="py-3 px-4 border rounded"
                  placeholder="Password"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded"
                >
                  Sign in
                </button>

              </motion.div>
            </form>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
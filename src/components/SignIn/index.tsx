"use client";
import React from "react";
import Link from "next/link";

const LoginComponent: React.FC = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-8 text-center text-3xl font-bold leading-9 tracking-tight text-black">
          Chimoney Prototype
        </h2>
        <h2 className="text-gray-900 mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label className="text-gray-900 block text-sm font-medium leading-6">
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="text-gray-900 block text-sm font-medium leading-6">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                type="password"
                placeholder="Input Password"
                className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10  outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="border-gray-300 bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 h-4 w-4 rounded border"
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="text-gray-500 dark:text-gray-300">
                  Remember me
                </label>
              </div>
            </div>
            <Link
              href="#"
              className="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <div>
            <Link href="/account">
              <button className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                Sign In
              </button>
            </Link>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-light">
            Don’t have an account yet?
            <Link
              href="/signup"
              className="text-primary-600 dark:text-primary-500 font-medium underline hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;

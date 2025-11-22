"use client";

// React Icons
import { FaInstagram, FapaperPlane } from "react-icons/fa"; // Paper plane icon add kiya hai button ke liye
import Link from "next/link";

export default function Promotion() {
  return (
    <section className="py-12 px-4">
      <div className="mx-auto max-w-md">
        {/* Card Container */}
        <div className="relative group">

          {/* Background Gradient Glow Effect (Optional for cool look) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>

          {/* Main Card */}
          <div className="relative flex flex-col items-center bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-xl text-center">

            {/* Icon with Instagram Gradient Background */}
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 shadow-lg transform transition duration-500 group-hover:scale-110">
              <FaInstagram className="text-4xl text-white" />
            </div>

            {/* Heading */}
            <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400">
              thephillyfoodfanatic
            </h3>

            {/* Follower Count - Highlighted */}
            <p className="mt-2 text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              580k+
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
              Active Followers
            </p>

            {/* Divider */}
            <div className="w-full border-t border-gray-200 dark:border-gray-800 mb-8"></div>

            {/* Call to Action Button */}
            <div className="w-full">
              <p className="mb-4 text-sm font-medium text-gray-600 dark:text-gray-300">
                Looking to promote your brand?
              </p>
              <Link
                href="/contact"
                className="flex items-center justify-center w-full gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                Contact for Promotion
                {/* Arrow/Send Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

// import counts from "@/data/promotionCounts.json";

// React Icons
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Promotion() {
  const cards = [
    {
      key: "youtube",
      label: "YouTube Subscribers",
      icon: <FaYoutube className="text-3xl" />,
      iconBg: "bg-red-600",
    },
    {
      key: "twitter",
      label: "Twitter Followers",
      icon: <FaTwitter className="text-3xl" />,
      iconBg: "bg-sky-500",
    },
    {
      key: "instagram",
      label: "Instagram Followers",
      icon: <FaInstagram className="text-3xl" />,
      iconBg: "bg-pink-500",
    },
  ];

  return (
    <section className="">
      <div className="mx-auto max-w-5xl ">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {cards.map((card) => {
            const value = 0;

            return (
              <div
                key={card.key}
                className="flex flex-col items-center rounded-xl bg-white px-6 py-6 shadow-sm ring-1 ring-gray-100"
              >
                <div
                  className={`mb-3 flex h-14 w-14 items-center justify-center rounded-full ${card.iconBg} text-white`}
                >
                  {card.icon}
                </div>

                <p className="text-3xl font-semibold text-gray-900">
                  {value}
                </p>

                <p className="mt-1 text-sm font-medium text-gray-500">
                  {card.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

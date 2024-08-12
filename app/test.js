"use client";
import "./globals.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import timeSince from "@/app/components/helper/timeSince";
import Hello from "@/app/components/tools/Hello";
import Loading from "./posts/[id]/loading";
// import generateSlug from "@/app/components/tools/generateSlug";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [valuesArray, setValuesArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("http://127.0.0.1:5000/status");
        const fetchedData = await data.json();
        const convertArray = Object.keys(fetchedData);
        const valuesArray = convertArray.map((key) => fetchedData[key]);
        setValuesArray(valuesArray);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="mt-20">
        <Loading />
      </div>
    ); // Return loading indicator while fetching data
  }

  return (
    <div className="min-h-screen flex items-center justify-center mt-20">
      <div style={{ wordWrap: "break-word" }}>
        {valuesArray
          .slice()
          .reverse()
          .map((post) => (
            <div
              key={post.uniqueId}
              className="bg-white shadow-lg rounded-lg max-w-2xl mx-auto mt-4 py-4 px-6 transition duration-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Image
                    src={post.image}
                    alt="user"
                    width={40}
                    height={40}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <Link
                      href={`/${encodeURIComponent(post.post)}`}
                      className="font-semibold hover:text-blue-500"
                    >
                      <p>{post.name}</p>
                    </Link>
                    <p className="text-gray-500 text-sm">
                      {timeSince(post.uniqueId)}
                    </p>
                  </div>
                </div>
                <div>
                  <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                    𐄂
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-lg leading-7">{post.title}</p>

                {/* Render Markdown content as HTML */}
                <div
                  className="mt-2 text-gray-800"
                  dangerouslySetInnerHTML={{ __html: post.post }}
                />
              </div>
              {post.images && (
                <div className="mt-4">
                  <Image
                    src={post.images}
                    alt="photos"
                    loading="lazy"
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              )}
              <div className="flex items-center justify-between mt-4">
                <div>
                  <div>Comments</div>
                </div>
                <div>
                  <Link
                    href={`/posts/${post.uniqueId}`}
                    className="text-gray-500 hover:text-gray-800"
                  >
                    view
                  </Link>
                </div>
              </div>
              {/* comments */}
              <Hello />
            </div>
          ))}
        <div id="observer"></div>
      </div>
    </div>
  );
}

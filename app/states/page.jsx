"use client";
import SuperHero from "@/shared/SuperHero";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";

function page() {
  const [hasWindow, setHasWindow] = useState(false);

  const videos = [
    { src: "https://youtu.be/mzUNPKS83T8" },
    { src: "https://youtu.be/spiU9YkKjPw" },
    { src: "https://youtu.be/qnRdF5mSK68" },
    { src: "https://youtu.be/2GLK-QiNb2s" },
    { src: "https://youtu.be/hjIY2eTOwKU" },
    { src: "https://youtu.be/MyLIo95ree8" },
  ];
  //

  const images = [
    { src: "/images/states/1 (1).jpg" },
    { src: "/images/states/1 (2).jpg" },
    { src: "/images/states/1 (3).jpg" },
    { src: "/images/states/1 (4).jpg" },
    { src: "/images/states/1 (5).jpg" },
    { src: "/images/states/1 (6).jpg" },
    { src: "/images/states/1 (7).jpg" },
    { src: "/images/states/1 (8).jpg" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div>
      <SuperHero
        imgsrc="/images/videos/bg.png"
        text={
          <div className="flex w-full justify-between">
            <a
              href="https://www.youtube.com/@user-hb5pn9ix3u/videos"
              className="bg-default rounded-md py-1 px-2 text-xl uppercase flex gap-2 items-center"
            >
              Youtube <FaPlay className="text-[#fff] w-4" />{" "}
            </a>
            <span>الحالات</span>
          </div>
        }
      />
      //
      <div className="container py-5 text-end">
        <div className="flex flex-col justify-end items-end ">
          <Image src="/images/desc/vec.svg" alt="" width={50} height={20} />
          <p className="text-default font-semibold text-lg">
            {" "}
            شاهد بعض فيديوهات الحالات
          </p>
        </div>
      </div>
      <div className="container">
        <div className="md:flex md:justify-start md:flex-wrap  w-full">
          {hasWindow &&
            videos.map((v, index) => (
              <div className="basis-[32%] relative m-2" key={index}>
                <ReactPlayer
                  width="100%"
                  height="216px"
                  className="rounded-lg overflow-hidden"
                  url={v.src}
                  controls
                  // light="images/videos/thumbnail.png"
                  pip={true}
                />
                <source src={v.src} type="video/mp4" />
              </div>
            ))}
        </div>

        <div className="md:flex md:justify-center md:flex-wrap gap-3 w-full">
          {images.map((image) => {
            return (
              <img src={image.src} alt="ss" width={300} height={50} />
              // <Image
              //   src={image.src}
              //   alt=""
              //   width={300}
              //   height={50}
              //   loading="lazy"
              // />
            );
          })}
        </div>
        <div className="flex justify-center items-center ">
          <a
            href="https://www.youtube.com/@user-hb5pn9ix3u/videos"
            className="border-2 border-default text-default font-bold px-3 py-2 rounded-xl my-3"
          >
            {" "}
            شاهد المزيد{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;
